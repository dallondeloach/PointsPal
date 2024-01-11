const selectedOption = document.getElementById("selected-option");
const dropdownBtn = document.getElementById("dropdown-btn");
const routeTypeDropdown = document.getElementById("route-type-dropdown");

function toggleDropdown() {
    routeTypeDropdown.classList.toggle("show");
}

function selectRouteType(event) {
    const selectedRouteType = event.target.dataset.routeType;
}
