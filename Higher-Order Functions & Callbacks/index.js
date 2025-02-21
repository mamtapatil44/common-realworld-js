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







