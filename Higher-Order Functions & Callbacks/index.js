// Scenario: You are designing a system to process an array of user transactions (withdrawals & deposits). 
// You need to apply different processing logic for each type.



function processTranaction(transactions, callback) {
    transactions.forEach(transaction => {
        callback(transaction)
    });

}

function handleTransaction(transaction) {
    if (transaction.type === "withdrawal") {
        console.log(`withdrwan process:  ${transaction.amount}`)

    } else {
        console.log(`deposite process ${transaction.amount}`)
    }
}
const transactions = [
    { type: "withdrawal", amount: 200 },
    { type: "deposit", amount: 500 },
    { type: "withdrawal", amount: 100 }
];
console.log("processTranaction", processTranaction(transactions, handleTransaction));
console.log("====================================================================================")





//  Payment Processing System
// Scenario: A financial application needs to process different types of payments (credit card, PayPal, bank transfer) with different logic.
// Problem: Implement a function processPayments(payments, callback) that applies a callback function to each payment type.
// steps ;payment should be array of ojct with type and amount
function processPayments(payments,callback){
    payments.forEach((item)=>{
        callback(item)
    })

}

function handlePayment(payment){
    switch(payment.type){
        case "credit_card":
        console.log(`credit card payment processed of ${payment.amount}`);
        break;
        case "paypal":
        console.log(`paypalpayment processed of ${payment.amount}`);
        break;
        case "bank_transfer":
        console.log(`bank_transferpayment processed of ${payment.amount}`);
        break;
        default:
            console.log("Unknown payment method")

    }
}

const payments = [
    { type: "credit_card", amount: 100 },
    { type: "paypal", amount: 200 },
    { type: "bank_transfer", amount: 300 }
];

processPayments(payments,handlePayment);
console.log("====================================================================================")



// Logging System
// Scenario: A system needs to log messages with different levels (info, warning, error) using different logging mechanisms.
// Problem: Implement a function logMessages(messages, callback) that processes logs based on severity.

function logMessages(messages,callback){
    messages.forEach((msg)=>callback(msg))

}

function handleMessages(msg){
    switch(msg.level){
        case "info":
            console.log(`${msg.level} - ${msg.message}`)
            break;
        case "warning":
            console.log(`${msg.level} - ${msg.message}`)
             break;
        case "error" :
            console.log(`${msg.level} - ${msg.message}`)
            break; 
         default:
                console.log(`Unknown error`)
    }

}

const logs = [
    { level: "info", message: "User logged in" },
    { level: "warning", message: "Low disk space" },
    { level: "error", message: "System crash detected" }
]

logMessages(logs,handleMessages);
console.log("====================================================================================")



// Email Notification System
// Scenario: An application sends different types of email notifications (order confirmation, password reset, promotional offers).
// Problem: Implement a function sendEmails(emails, callback) that sends emails using different logic based on email type.

function sendEmails(emails,callback){
    emails.forEach(email=>callback(email))

}

function handleEmail(email){
    switch(email.type){
        case "order_confirmation":
            console.log(`Sending order confirmation email to ${email.recipient}`);
            break;
            case "password_reset":
            console.log(`Sending password reset email to ${email.recipient}`);
            break;
            case "promo":
            console.log(`Sending promo email to ${email.recipient}`);
            break;
            default:
            console.log("Unknown email")
    }

}

const emails = [
    { type: "order_confirmation", recipient: "user1@example.com" },
    { type: "password_reset", recipient: "user2@example.com" },
    { type: "promo", recipient: "user3@example.com" }
];
sendEmails(emails,handleEmail);
console.log("====================================================================================")






// Scenario: A warehouse needs to process different stock transactions (add stock, remove stock, check stock level).
// Problem: Implement a function updateInventory(transactions, callback) to update stock based on transaction type.

function updateInventory(transactions,callback){
    transactions.forEach((tran)=>callback(tran))

}

function handleInventory(inventory){
    switch(inventory.action){
        case "add":
            console.log(`Adding ${inventory.quantity} inventory in ${inventory.item}`);
            break;
            case "remove":
            console.log(`Removing ${inventory.quantity} inventory from ${inventory.item}`);
            break; 
            case "check":
            console.log(`Checking inventory in ${inventory.item}`);
            break;
            default:
                console.log('Unknown Inventory')  
    }

}


const inventoryTransactions = [
    { action: "add", item: "Laptop", quantity: 5 },
    { action: "remove", item: "Mouse", quantity: 2 },
    { action: "check", item: "Keyboard" }
];

updateInventory(inventoryTransactions,handleInventory);
console.log("====================================================================================")
