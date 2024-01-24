const { argv, demandOption, describe } = require("yargs");
const yargs = require("yargs");
const database = require("./databaseData.js");

console.log("Welcome to the Library Management System.");
yargs.version("1.1.0");

//Add Details
yargs.command({
    command: 'add',
    describe: 'To add a user details.',
    builder: {
        name: {
            describe: 'Name of the user',
            demandOption: true, //To required the field
            type: "string"
        },
        address: {
            describe: 'Address of the user',
            demandOption: true,
            type: "string"
        },
        contact_no: {
            describe: 'Contact Number of the user',
            demandOption: true,
            type: "string"
        },
        book_id: {
            describe: 'ID of the Book',
            demandOption: true,
            type: "string"
        },
        borrowed_date: {
            describe: 'Date of the book borrowed',
            demandOption: true,
            type: "date"
        },
        book_return_date: {
            describe: 'Date of the book return',
            type: 'date'
        },
        
    },
    handler(argv){
        database.addUser(argv.name, argv.address, argv.contact_no, argv.book_id, argv.borrowed_date, argv.book_return_date);
    
    }
});

//Update Details
yargs.command({
    command: 'update',
    describe: 'To update a user details.',
    builder: {
        id: {
            describe: "ID",
            demandOption: true,
            type: "number"
        },
        name: {
            describe: 'Name of the user',
            type: "string" 
        },
        address: {
            describe: "Address of the user",
            type: "string"
        },
        contact_no: {
            describe: "Contact Number of the user",
            type: "string"
        },
        book_id: {
            describe: 'ID of the Book',
            type: "string"
        },
        borrowed_date: {
            describe: 'Date of the book borrowed',
            type: "date"
        },
        book_return_date: {
            describe: 'Date of the book return',
            type: 'date'
        },

    },
    handler(argv){
        database.updateUser(argv.id, argv.name, argv.address, argv.contact_no, argv.book_id, argv.borrowed_date, argv.book_return_date);
    }
});

//Delete Details
yargs.command({
    command: 'delete',
    describe: 'To Delete a user details.',
    builder: {
        id: {
            describe: 'ID',
            demandOption: true,
            type: "number" 
        }
    },
    handler(argv){
        database.deleteUser(argv.id);
    }
});

//Read Details
yargs.command({
    command: 'read',
    describe: 'To Read a user details.',
    builder: {
        id: {
            describe: 'id',
            demandOption: true,
            type: "number" 
        }
    },
    handler(argv){
        database.readUser(argv.id);
    }
});

//List Details
yargs.command({
    command: 'list',
    describe: 'To List a user details.',
    
    handler(){
        database.listUser();
    }
});


yargs.parse();

