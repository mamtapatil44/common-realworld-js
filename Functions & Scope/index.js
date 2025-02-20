// 2. Functions & Scope
// Scenario: Your company is developing an online ticket booking system. 
// You need a function that calculates the total price based on the number of tickets purchased and the price per ticket.

function calculateTotalPrice(ticketCount,pricePerTicket){
    if(typeof ticketCount !== "number" || typeof pricePerTicket !== "number"){
        throw new Error("Wrong data entered");
        
    }
    function discountAmount(totalPrice){


        if (ticketCount > 5){
            totalPrice = totalPrice * 0.9;
        }
        return totalPrice
    }


    let totalPrice = ticketCount * pricePerTicket;

    return discountAmount(totalPrice)
}

const amount = calculateTotalPrice(5,120)  //total price should be without discount
const amount1 = calculateTotalPrice(6,120)  //apply discount 
console.log("amount ",amount);
console.log("amount1 ",amount1);
const amount2 = calculateTotalPrice("5",120) // should throw error
console.log("amount2 ",amount2)
