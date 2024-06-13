const prompt = require("./utils/prompts.js");
const fs = require("fs");
const path = require("path");

const hotels = [];
const reservations = [];

class Hotel {
    constructor(id, name, town, rooms) {
        if (typeof (id) != "number" || typeof (name) != "string" || typeof (town) != "string" || typeof (rooms) != "number") {
            throw new Error("Argumentos inválidos para a construção de um Hotel");
        };
        this.id = id;
        this.name = name;
        this.town = town;
        this.rooms = rooms;
        this.availableRooms = rooms;
        this.currentGuests = [];
        this.totalRatings = 0;
        this.ratingsCount = 0;
        this.ocupationLogs = [];
    };
};

class Reservation {
    constructor(id, customer, hotel) {
        if (typeof (id) != "number" || typeof (customer) != "string" || typeof (hotel) != "number") {
            throw new Error("Argumentos inválidos para a construção de uma Reserva");
        };
        this.id = id;
        this.customer = customer;
        this.hotel = hotel;
    };
};

class OcupationLog {
    constructor(type, time, reservation) {
        if (typeof (type) != "string" || typeof (time) != "number" || typeof (reservation) != "object") {
            throw new Error("Argumentos inválidos para a construção de um registro");
        };
        this.type = type;
        this.time = time;
        this.id = reservation.id;
        this.customer = reservation.customer;
    };
};

function createHotel() {
    console.log("");
    try {
        let name;
        while (true) {
            name = prompt.prompt("Insira o nome do hotel: ");
            if (name.toLowerCase() === "cancelar" ) {
                return;
            };
            if (name.length === 0 ) {
                console.log("Esse nome não é válido.");
                continue;
            };
            if (hotels.some((hotel) => hotel.name.toLowerCase() === name.toLowerCase())) {
                console.log("Esse nome já está em uso.");
                continue;
            };
            break;
        };
        let town;
        while (true) {
            town = prompt.prompt("Insira a cidade onde se encontra o hotel: ");
            if (town.toLowerCase() === "cancelar" ) {
                return;
            };
            if (town.length === 0 ) {
                console.log("Esse nome não é válido.");
                continue;
            };
            break;
        };

        const rooms = prompt.promptPositive("Insira quantos quartos o hotel terá: ", true);

        hotels.push(new Hotel(createHotelID(), name, town, rooms));

        prompt.prompt("Hotel adicionado com sucesso! Aperte [enter] para continuar. ");

    } catch (error) {
        console.log("Algo deu errado ao registrar seu hotel:");
        console.log(error);
        prompt.prompt("Aperte [enter] para continuar. ");
    };
};

function createHotelID() {
    while (true) {
        const id = randomNumber(1000, 9999);
        if (!(hotels.some((hotel) => hotel.id === id))) {
            return id;
        };
    };
};

function searchHotels() {
    if (hotels.length === 0) {
        prompt.prompt("Não há hotéis para buscar. Aperte [enter] para continuar. ");
        return;
    };
    const towns = [];
    for (let i in hotels) {
        if (!towns.includes(hotels[i].town)) {
            towns.push(hotels[i].town);
        };
    };
    const town = promptArrayIndex("Insira a cidade em que deseja buscar:", towns);
    if (town === 0) return;

    const hotelsInTown = hotels.filter(hotel => hotel.town === towns[town - 1]);

    const hotelIndex = promptArrayIndex("Insira o hotel que deseja acessar:", hotelsInTown, "name");
    if (hotelIndex === 0) return;

    const hotel = hotelsInTown[hotelIndex - 1];

    const action = promptActions(
        "Insira a ação que deseja realizar:",
        [
            {text: "Visualizar hotel", function: displayHotel, arg: hotel},
            {text: "Fazer reserva", function: createReservation, arg: hotel},
            {text: "Relatório de ocupação", function: logOccupation, arg: hotel},
            {text: "Excluir hotel", function: deleteHotel, arg: hotel}
        ]
    );
    if (action === 0) return;
};

function displayHotel(hotel) {
    console.log("");
    console.log("Informações do hotel:");
    console.log("- ID: " + hotel.id);
    console.log("- Nome: " + hotel.name);
    console.log("- Cidade: " + hotel.town);
    console.log("- Quartos: " + hotel.rooms);
    console.log("- Quartos disponíveis: " + hotel.availableRooms);
    if (hotel.ratingsCount === 0) {
        console.log("- Avaliação: Esse hotel ainda não foi avaliado");
    } else {
        ratings = Math.round(hotel.totalRatings * 100 / hotel.ratingsCount) / 100;
        console.log("- Avaliação: " + ratings);
    };
    prompt.prompt("Aperte [enter] para continuar. ");
};

function deleteHotel(hotel) {
    console.log("");

    const confirmation = prompt.promptConfirmation(`Tem certeza que quer excluir o hotel ${hotel.name}? (s/n) `);
    if (!confirmation) return;

    const index = hotels.indexOf(hotel);
    if (index === -1) {
        console.log("O hotel desejado não existe");
    } else {
        for (let i = 0; i < reservations.length;) {
            if (reservations[i].hotel === hotel.id) {
                reservations.splice(i, 1);
            } else i++;
        };
        hotels.splice(index, 1);
        console.log("O hotel foi excluído com sucesso!");
    };
    prompt.prompt("Aperte [enter] para continuar. ");
};

function logOccupation(hotel) {
    console.log("");
    console.log(`Relatório de ocupação do hotel ${hotel.name}:`);

    for (let log of hotel.ocupationLogs) {
        console.log(`- ${log.type} em ${(new Date(log.time)).toLocaleString()}`);
        console.log(`  - Reserva com ID ${log.id} por ${log.customer}`);
    };

    prompt.prompt("Aperte [enter] para continuar ");
};

function createReservation(hotel) {
    console.log("");
    if (hotel.availableRooms <= 0) {
        console.log("Não há mais quartos disponíveis nesse hotel. Por favor complete outras reservas antes de criar uma nova.");
        prompt.prompt("Aperte [enter] para continuar. ");
        return;
    };
    try {
        let name;
        while (true) {
            name = prompt.prompt("Insira o nome do cliente que fará a reserva: ");
            if (name.toLowerCase() === "cancelar" ) {
                return;
            };
            if (name.length === 0 ) {
                console.log("Esse nome não é válido.");
                continue;
            };
            break;
        };
        const reservation = new Reservation(createReservationID(), name, hotel.id);
        reservations.push(reservation);
        hotel.availableRooms -= 1;
        hotel.ocupationLogs.push(new OcupationLog("Reserva criada", Date.now(), reservation));
        prompt.prompt("Reserva feita com sucesso! Aperte [enter] para continuar. ");

    } catch (error) {
        console.log("Algo deu errado ao fazer sua reserva.");
        console.log(error);
        prompt.prompt("Aperte [enter] para continuar. ");
    };
};

function createReservationID() {
    while (true) {
        const id = randomNumber(1000, 9999);
        if (!(reservations.some((reservation) => reservation.id === id))) {
            return id;
        };
    };
};

function listReservations() {
    if (reservations.length === 0) {
        prompt.prompt("Não há reservas para buscar. Aperte [enter] para continuar. ");
        return;
    };

    const reservationNames = [];
    for (let i in reservations) {
        const hotel = hotels.find(hotel => hotel.id === reservations[i].hotel);
        if (hotel === undefined) {
            reservationNames.push("Hotel desconhecido - " + reservations[i].customer);
        } else {
            reservationNames.push(`${hotel.name} - ${reservations[i].customer}`);
        };
    };
    const reservationIndex = promptArrayIndex("Insira a reserva que deseja acessar:", reservationNames);
    if (reservationIndex === 0) return;

    const reservation = reservations[reservationIndex - 1]

    const actions = [];
    actions.push({text: "Visualizar reserva", function: displayReservation, arg: reservation});

    if("checkedIn" in reservation) {
        actions.push({text: "Realizar check-out", function: checkOut, arg: reservation});
    } else {
        actions.push({text: "Cancelar reserva", function: deleteReservation, arg: reservation});
        actions.push({text: "Realizar check-in", function: checkIn, arg: reservation});
    };

    const action = promptActions("Insira a ação que deseja realizar:", actions);
    if (action === 0) return;
};

function displayReservation(reservation) {
    console.log("");
    console.log("Informações da reserva:");
    console.log("- ID da reserva: " + reservation.id);
    console.log("- Nome do cliente: " + reservation.customer);
    if ("checkedIn" in reservation) {
        const date = (new Date(reservation.checkedIn)).toLocaleString();
        console.log("- Data de check-in: " + date);
    };
    const hotel = hotels.find(hotel => hotel.id === reservation.hotel);
    if (hotel === undefined) {
        console.log("- Nome do Hotel: Desconhecido");
    } else {
        console.log("- Nome do Hotel: " + hotel.name);
    };
    console.log("- ID do Hotel: " + reservation.hotel);
    prompt.prompt("Aperte [enter] para continuar. ");
};

function deleteReservation(reservation) {
    console.log("");
    const confirmation = prompt.promptConfirmation("Tem certeza que quer cancelar essa reserva? (s/n) ");
    if (!confirmation) return;

    const hotel = hotels.find(hotel => hotel.id === reservation.hotel);

    const index = reservations.indexOf(reservation);

    if (index === -1) {
        console.log("A reserva desejada não foi encontrada");
    } else {
        hotel.availableRooms = Math.min(hotel.availableRooms + 1, hotel.rooms);
        hotel.ocupationLogs.push(new OcupationLog("Reserva cancelada", Date.now(), reservation));
        reservations.splice(index, 1);
        console.log("A reserva foi cancelada com sucesso!");
    };
    prompt.prompt("Aperte [enter] para continuar. ");
};

function checkIn(reservation) {
    console.log("");
    reservation.checkedIn = Date.now();

    const hotel = hotels.find(hotel => hotel.id === reservation.hotel);
    hotel.ocupationLogs.push(new OcupationLog("Check-in realizado", Date.now(), reservation));

    console.log("Check-in realizado com sucesso!");
    prompt.prompt("Aperte [enter] para continuar. ");
};

function checkOut(reservation) {
    console.log("");
    const confirmation = prompt.promptConfirmation("Tem certeza que deseja encerrar essa visita? (s/n) ");
    if (!confirmation) return;

    const hotel = hotels.find(hotel => hotel.id === reservation.hotel);
    const index = reservations.indexOf(reservation);

    if (index === -1) {
        console.log("A visita desejada não existe");
        prompt.prompt("Aperte [enter] para continuar. ");
        return;
    };

    hotel.availableRooms = Math.min(hotel.availableRooms + 1, hotel.rooms);
    hotel.ocupationLogs.push(new OcupationLog("Check-out realizado", Date.now(), reservation));
    reservations.splice(index, 1);
    console.log("Check-out realizado com sucesso!");

    const willRate = prompt.promptConfirmation("Deseja avaliar esse hotel? (s/n) ");
    if (!willRate) return;

    const rating = prompt.promptRange("For favor insira sua avaliação (1-5): ", 1, 5, true);
    hotel.totalRatings += rating;
    hotel.ratingsCount++

    console.log("");
    console.log("Avaliação salva com sucesso!");
    prompt.prompt("Aperte [enter] para continuar. ");
};

function randomNumber(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue)) + minValue;
};

function promptActions(message = "Escolha uma das opções: ", actions = [], cancelText = "Cancelar") {
    console.log("");
    console.log(message);

    for (let i in actions) {
        console.log(`[${parseInt(i) + 1}] ${actions[i].text}`);
    };
    console.log("[0] " + cancelText);

    let actionIndex;
    while(true) {
        actionIndex = parseInt(prompt.prompt("> "));
        if (isNaN(actionIndex) || actionIndex < 0 || actionIndex > actions.length) {
            console.log("Por favor escolha uma das opções!");
            continue;
        };
        const action = actions[actionIndex - 1]
        if (typeof(action) === "object" && "function" in action) {
            action.function(action.arg);
        };
        return actionIndex;
    };
};

function promptArrayIndex(message = "Escolha uma das opções: ", array = [], property = "", cancelText = "Cancelar") {
    const actions = [];

    for (let i in array) {
        const action = {};

        if (property === "") action.text = array[i];
        else action.text = array[i][property];
        
        actions.push(action);
    };
    return promptActions(message, actions, cancelText);
};

function saveData() {
    const savedData = {
        hotels: hotels,
        reservations: reservations
    };
    jsonData = JSON.stringify(savedData);
    const directory = path.join(__dirname, "/saves");

    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory)
    };
    fs.writeFile(path.join(directory, "hotels.json"), jsonData, fileCallback);
};

function fileCallback(error) {
    console.log("");
    if (error) {
        console.log("Algo deu errado: " + error);
    } else {
        console.log("Hotéis salvos com sucesso!");
    };
    console.log("");
};

function loadData() {
    try {
        const loadedData = require("./saves/hotels.json");
        hotels.push(...loadedData.hotels);
        reservations.push(...loadedData.reservations);
    } catch {
        return;
    };
};

console.log("50. Reserva de hotéis");

loadData();

while (true) {

    const action = promptActions(
        "Escolha uma das ações abaixo:",
        [
            {text: "Registrar novo hotel", function: createHotel},
            {text: "Listar hotéis", function: searchHotels},
            {text: "Listar reservas", function: listReservations},
        ],
        "Salvar e sair"
    );

    if (action === 0) {
        saveData();
        break;
    };
};