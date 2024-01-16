const routeContainer = document.getElementById("routeContainer");
const routeLabel = document.getElementById("routeLabel");
const dropdownContent = document.getElementById("routeTypeDropdown");

routeContainer.addEventListener('click', toggleDropdown);
dropdownContent.addEventListener('click', selectRouteType);

function toggleDropdown() {
    dropdownContent.classList.toggle('show');

    if(dropdownContent.classList.contains('show')){
        dropdownContent.removeChild(dropdownContent.firstChild);
    } else{
        const defaultOption = document.createElement('div');
        defaultOption.classList.add('route-type-item');
        defaultOption.dataset.routeType = 'Round Trip';
        defaultOption.textContent = 'Round Trip';
        dropdownContent.insertBefore(defaultOption, dropdownContent.firstChild);
    }
}

function selectRouteType(event) {
    const selectedOption = event.target.dataset.routeType;
    
    if(selectedOption){
        routeLabel.textContent = event.target.textContent;
        toggleDropdown();
    }
}

