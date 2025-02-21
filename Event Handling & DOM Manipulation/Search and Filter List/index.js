
// Search and Filter List:
// Scenario: Build a search bar that filters a list of items in real time as the user types. use JS DOM manipulation and event handling

let searchBar = document.getElementById('searchInput');
let list = document.getElementById('list');
let items = document.getElementsByTagName('li');


searchBar.addEventListener("input", function () {
    let sarchImput = searchBar.value.toLowerCase();

    Array.from(items).forEach((item) => {
        let txt = item.textContent.toLowerCase();

        if (txt.includes(sarchImput)) {
            console.log("in iff")
            item.style.display = ''
        } else {
            console.log("in else")
            item.style.display = 'none';
        }



    })

})