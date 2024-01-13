const selectedOption = document.getElementById("selected-option");
const dropdownBtn = document.getElementById("dropdown-btn");
const routeTypeDropdown = document.getElementById("route-type-dropdown");

function toggleDropdown() {
    routeTypeDropdown.classList.toggle("show");
}

function selectRouteType(event) {
    const selectedRouteType = event.target.dataset.routeType;
    selectedOption.textContent = selectedRouteType;
    selectedOption.classList.add("animate-in");
    toggleDropdown();

    //remove animation class after animation is complete
    setTimeout(()=> {selectedOption.classList.remove("animate-in")}, 500);
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')){
        routeTypeDropdown.classList.remove("show")
    }
}

dropdownBtn.addEventListener("click", toggleDropdown);

//add click event listeners to each dropdown item
const dropdownItems = document.querySelectorAll('.route-type-item');
dropdownItems.forEach(item => {
    item.addEventListener('click', selectRouteType);
});
