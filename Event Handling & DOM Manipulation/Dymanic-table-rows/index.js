
let addRow = document.getElementById("addRow")
let removerow = document.getElementById("removeRow")
let tablebody =  document.getElementById("dynamicTable").getElementsByTagName('tbody')[0];

addRow.addEventListener("click",function(){
    let row = tablebody.insertRow();

    for(let i= 0 ;i<3;i++){
        let cell = row.insertCell(i);
        cell.textContent = "New " + (i+1);
    }
})

removerow.addEventListener("click",function(){
    if(tablebody.rows.length > 0){
        tablebody.deleteRow(tablebody.rows.length-1)
    }
})