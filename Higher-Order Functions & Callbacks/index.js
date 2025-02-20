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
console.log("processTranaction", processTranaction(transactions, handleTransaction))