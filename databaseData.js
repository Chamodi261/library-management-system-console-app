const fs = require('fs');
// const chalk =  require('chalk');
// console.log("DB");
const data_file = "data.json";


// Add User Details - Create the module for Add the User Details
const addUser = (name, address, contact_no, book_id, borrowed_date) => {
    const users = loadUser(); // To load Preious Data
    const length = users.length;

    let id = 1;

    if (length > 0){
        id = users[length-1].id + 1;
    }

    // Validate contact_no in international format
    const contactRegex = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;
    if (!contactRegex.test(contact_no)) {
        console.log('Invalid contact number.');
        return;
    }

    //calculate the book_return_date
    const borrowedDate = new Date(borrowed_date);
    const book_return_date = new Date(borrowedDate.getTime() + 14 * 24 * 60 * 60 * 1000);
    const return_date = `${book_return_date.getFullYear()}.${(book_return_date.getMonth() + 1).toString().padStart(2, '0')}.${book_return_date.getDate().toString().padStart(2, '0')}`;


    users.push({
        id,
        name,
        address,
        contact_no,
        book_id,
        borrowed_date,
        book_return_date: return_date,
    });

    saveUser(users); //Save Command
    
    console.log('Data Saved!');
}

// Update User Details
const updateUser = (id, name, address, contact_no, book_id, borrowed_date, book_return_date) => {
    const users = loadUser();

    const updateUser = users.findIndex((user) => user.id === id);

    // Validate contact_no in international format
    const contactRegex = /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/;
    if (!contactRegex.test(contact_no)) {
        console.log('Invalid contact number.');
        return;
    }

    if (updateUser != -1){
        const user = users[updateUser];

        user.name = name ? name: user.name;
        user.address = address ? address: user.address;
        user.contact_no = contact_no ? contact_no: user.contact_no;
        user.book_id = book_id ? book_id: user.book_id;
        user.borrowed_date = borrowed_date ? borrowed_date: user.borrowed_date;
        user.book_return_date = book_return_date ? book_return_date: user.book_return_date;

        console.log('Record Updated !!', id);
        saveUser(users);
    }

    else{
        console.log('No Record Found!!');
    }
}

// Delete User Details
const deleteUser = (id) => {
    const users = loadUser();
    const newUser = users.filter((user) => {
        return user.id != id;
    });

    if (users.length > newUser.length){
        saveUser(newUser);
        console.log("Deleted !! ",id);
    }
    else{
        console.log('No Record Found');
    }
}

// Read User Details
const readUser = (id) => {
    const users = loadUser();
    const user = users.find((user) => {
        return user.id === id;
    });

    if (user){
        console.log(user);
    }
    else{
        console.log("No Records Found!!");
    }
}

// List User Details
const listUser = () => {
    console.log('List All User\'s Data');
    const users = loadUser();
    users.forEach((user) => {
        console.log(user);
    });
}

//Save Data
const saveUser = (users) =>{
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync(data_file, dataJSON);
}

// Load Data
const loadUser = () => {
    try{
        const dataBuffer = fs.readFileSync(data_file);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }

    catch(e){
        return [];
    }
}

//Export the module variable
module.exports = {
    addUser,
    updateUser,
    readUser,
    deleteUser,
    readUser,
    listUser
};