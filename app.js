const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);
const { configDotenv } = require('dotenv');
const mongoose = require('mongoose');
const {RunCommandCursor} = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
const CustomerData = require('./models/customers.js');

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    await runQueries();
    await main();
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit();
};




const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

const Customer = mongoose.model('Customer', customerSchema);

const createCustomer = async () => {
    const name = await prompt('Enter customer name: ');
    const age = await prompt('Enter customer age: ');
    console.log(`Name: ${name}`);
    const newCustomer = new Customer({name, age});
    await newCustomer.save();
    console.log('Customer created successfully');
}

const viewCustomers = async () => {
    const allCustomers = await Customer.find({});
    console.log('Here is a list of all the customers:');
    console.log(allCustomers);
}

const updateCustomer = async () => {
    const allCustomers = await Customer.find({});
    console.log('Below is a list of all customers', allCustomers);
    const id = prompt('Copy and paste the id of the customer you would like to update here: ');
    const newName = prompt('What is the customers new name? ');
    const newAge = prompt('What is the customers new age? ');
    const updateId = await Customer.findByIdAndUpdate(
        id,
        {name: newName, age: newAge},
        
        {new: true}
    );
    console.log('Updated ID:', updateId);
}

const deleteCustomer = async () => {
    let isValidId = false;
    
    const allCustomers = await Customer.find({});
    console.log('Below is a list of all customers:', allCustomers);
    const id = prompt('Copy and paste the ID of the customer you would like to delete: ');
            
    const removedId = await Customer.findByIdAndDelete(id);
    console.log(`You have deleted customer: ${id}`);
            
      
}



    const displayMenu = () => {
        console.log('\nMenu:');
        console.log('1. Create a customer');
        console.log('2. View all customers');
        console.log('3. Update a customer')
        console.log('4. Delete a customer');
        console.log('5. Quit');
    }

    const main = async () => {
    let choice;
    let firstRound = true;

    while(firstRound || choice!=='5') {
        firstRound = false;
        displayMenu();
        choice = await prompt('Enter your Choice: ');
    
        switch(choice) {
            case '1':
                await createCustomer();
                break;
            
            case '2': 
                await viewCustomers();
                break;

            case '3':
                await updateCustomer();
                break;
            
            case '4': 
                await deleteCustomer();
                break;
            case '5':
                
                console.log('Goodbye!')
            default: 
                
        }
        
        
    }
}


const runQueries = async () => {
    console.log('Queries running')
}

connect();

// const prompt = require('prompt-sync')();
// const mongoose = require('mongoose');

// const dotenv = require('dotenv');
// dotenv.config();

// const connect = async () => {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log('Connected to MongoDB');
//     await runQueries();
//     await createUser();
//     // await main();
//     await mongoose.disconnect();
//     console.log('Disconnected from MongoDB');
//     process.exit();
// };

// const customerSchema = new mongoose.Schema({
//     name: String,
//     email: String,
// });

// const Customer = mongoose.model('Customer', customerSchema);

// const createUser = () => {
//     const name = prompt('Enter username: ');
//     const email = prompt('Enter user Email: ');



// const displayMenu = () => {
//     console.log('\nMenu:');
//     console.log('1. Create a customer');
//     console.log('2. View all customers');
//     console.log('3. Update a customer');
//     console.log('4. Delete a customer');
//     console.log('5. Quit');
// };

// const main = async () => {
//     let choice;
//     let firstRound = true;

//     while (firstRound || choice !== '5') {
//         firstRound = false;
//         displayMenu();
//         choice = prompt('Enter your Choice: ');

//         switch (choice) {
//             case '1':
//                 createUser();
//                 break;

//             case '2':
//                 await viewUsers();
//                 break;

//             case '3':
//                 await deleteUser();
//                 break;

//             case '4':
//                 console.log('Goodbye!');
//                 break;

//             default:
//                 console.log('Invalid Input. Try again.');
//         }
//     }
// };

// const runQueries = async () => {
//     console.log('Queries running');
// };

// connect();