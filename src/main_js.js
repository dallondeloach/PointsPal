const routeContainer = document.getElementById("routeContainer");
const routeLabel = document.getElementById("routeLabel");
const dropdownContent = document.getElementById("routeTypeDropdown");

routeContainer.addEventListener('click', () => toggleDropdown());
dropdownContent.addEventListener('click', (event) => selectRouteType(event));

function toggleDropdown() {
    dropdownContent.classList.toggle('show');

    if(dropdownContent.classList.contains('show')){
        //replace label content with dropdown items
        routeLabel.textContent = '';
        dropdownContent.childNodes.forEach((item) =>{
            routeLabel.appendChild(item.cloneNode(true));
        });
    } else{
        //reset label content
        routeLabel.textContent = 'Round Trip';
    }
}

function selectRouteType(event) {
    const selectedOption = event.target.dataset.routeType;
    
    if(selectedOption){
        routeLabel.textContent = selectedOption
        toggleDropdown();
    }
}

