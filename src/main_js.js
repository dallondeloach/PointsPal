const routeContainer = document.getElementById("routeContainer");
const routeLabel = document.getElementById("routeLabel");
const dropdownContent = document.getElementById("routeTypeDropdown");

routeContainer.addEventListener('click', () => toggleDropdown());
dropdownContent.addEventListener('click', (event) => selectRouteType(event));

function toggleDropdown() {
    dropdownContent.classList.toggle('show');
}

function selectRouteType(event) {
    const selectedOption = event.target.dataset.routeType;
    
    if(selectedOption){
        routeLabel.textContent = selectedOption
        toggleDropdown();
    }
}

