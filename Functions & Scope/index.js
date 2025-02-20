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
// const amount2 = calculateTotalPrice("5",120) // should throw error
// console.log("amount2 ",amount2)



// Online Food Ordering System
// Scenario:
// A food delivery app allows users to place orders. 
// The total bill should be calculated based on the item prices, and a discount should be applied for orders above $50.

function calulatePrice(items,discount,discountableAmt){
    let price = items.reduce((acc,current)=> acc = acc + current ,0);
    function calculteDiscount(totalprice){
        if(totalprice > discountableAmt){

            totalprice = totalprice * (1- (discount/100))
        }
      return totalprice;
    }

      
return calculteDiscount(price)

}
const res = calulatePrice([10, 15, 12, 8],10,50); //no discount
const res1 = calulatePrice([20, 18, 25],10,50); // discount
const res2 = calulatePrice([30, 25, 15],10,50); // discount
console.log("res: ",res)
console.log("res1: ",res1)
console.log("res2: ",res2)


