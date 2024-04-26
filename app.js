const prompt = require('prompt-sync')();

const { configDotenv } = require('dotenv');
const mongoose = require('mongoose');
const {RunCommandCursor} = require('mongodb');
const username = prompt('What is your name?');
const dotenv = require('dotenv');
dotenv.config();

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    await runQueries();
    // await createUser();
    // await main();
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit();
};



// const customerSchema = new mongoose.Schema({
//     text: String,
//     age: Number,
// })

// const Customer = mongoose.model('Customer', customerSchema);

// const createCustomer = async () => {
//     const name = await prompt('Enter customer username: ');
//     const age = await prompt('Enter custmer age ');

//     const newCustomer = new Customer({name, email});
//     await newCustomer.save();
//     console.log('Customer created successfully');
// }

// const viewCustomers = async () => {
//     console.log('Here is a list of all the customers');
// }

// const deleteUser = async () => {
//     console.log('customer deleted');
// }



    // const displayMenu = () => {
    //     console.log('\nMenu:');
    //     console.log('1. Create a customer');
    //     console.log('2. View all customers');
    //     console.log('3. Update a customer')
    //     console.log('4. Delete a customer');
    //     console.log('5. Quit');
    // }

//     const main = async () => {
//     let choice;
//     let firstRound = true;

//     while(firstRound || choice!=='5') {
//         firstRound = false;
//         displayMenu();
//         choice = await prompt('Enter your Choice: ');
    
//         switch(choice) {
//             case '1':
//                 await createCustomer();
//                 break;
            
//             case '2': 
//                 await viewCustomers();
//                 break;

//             case '3':
//                 await deleteCustomer();
//                 break;
            
//             case '4': 
//                 await updateCustomer();
//                 break;
//             case '5':
                
//                 console.log('Goodbye!')
//             default: 
//                 console.log('Invalid Input.  Try again.')
//         }
        
        
//     }
// }


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

//     const newCustomer = new Customer({ name, email });
//     newCustomer.save()
//         .then(() => {
//             console.log('Customer created successfully');
//         })
//         .catch((err) => {
//             console.error('Error creating customer:', err);
//         });
// };

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