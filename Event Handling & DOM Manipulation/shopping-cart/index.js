document.addEventListener("DOMContentLoaded",function(){
    const cartList = document.getElementById("cart-list");


    document.querySelectorAll(".add-to-cart").forEach((btn)=>{
        btn.addEventListener("click",function(){
            const content = this.previousElementSibling.textContent;
            const li = document.createElement("li");
            li.textContent = content;
            li.style.padding = "2px";
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove"
            removeBtn.addEventListener("click",function(){
                cartList.removeChild(li)
            })
            li.appendChild(removeBtn)
            cartList.appendChild(li)
        })
    })
})