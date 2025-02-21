let likeBtn = document.getElementById("likebtn");
let dislikebtn = document.getElementById("dislikebtn");
let likeCountDisplay = document.getElementById("likeCount");
let dislikeCountDisplay = document.getElementById("dislikeCount");

let likeCount =0;
let dislikeCount =0 ;
let userReaction =null ;

likeBtn.addEventListener('click',function(){
    if(userReaction === 'like'){
        likeCount--;
        userReaction= null;
        likeBtn.classList.remove("selected")
    } else{
        likeCount++;
        if(userReaction === 'dislike'){
            dislikeCount--;
            dislikebtn.classList.remove("selected")
        }
        userReaction = "like";
        likeBtn.classList.add("selected")
    }

    updateCounts()
}
)

dislikebtn.addEventListener("click",function(){
    if(userReaction === "dislike"){
        dislikeCount--;
        userReaction =null;
        dislikebtn.classList.remove("selected")

    } else{
        dislikeCount++;
        if(userReaction === "like"){
            likeCount--;
            likeBtn.classList.remove("selected")
        }
        userReaction = "dislike";
        dislikebtn.classList.add("selected")
    }
    updateCounts()
})

function  updateCounts(){
likeCountDisplay.textContent = likeCount;
dislikeCountDisplay.textContent = dislikeCount;
}