// 6. Event Handling & DOM Manipulation
// Scenario: Your task is to create a simple "To-Do List" web app where users can add items dynamically by clicking a button.

// Task: Write JavaScript code to add new tasks to a list when a button is clicked, and remove them when another button is clicked


document.addEventListener("DOMContentLoaded",function(){
    const txt = document.getElementById('inputTxt');
    const addBtn = document.getElementById('addBtn');
    const uiList = document.getElementById('taskList');

    addBtn.addEventListener("click",function(){
        const value = txt.value.trim();
        if(value !== ''){
        const item = document.createElement("li");
        item.textContent = value;


        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';

        removeBtn.addEventListener("click",function(){
            uiList.removeChild(item)
        })
        
        item.appendChild(removeBtn)
        uiList.appendChild(item)
        txt.value ='';
        }

    })
})