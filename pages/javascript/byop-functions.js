// function for change the state of something when a button is clicked
function toggleTopping(id) {
    var currentValue = document.getElementById(id).style.visibility;
    if (!currentValue || currentValue == "hidden") {
        document.getElementById(id).style.visibility = "visible";
    } else {
        document.getElementById(id).style.visibility = "hidden";
    }
}


function turnOffAllToppings() {
    var currentValue = document.getElement;

}
// function for change the state of something when a button is clicked
function toggleToppingP(id) {
    var currentValue = document.getElementById(id).style.visibility;
        document.getElementById(id).style.visibility = "visible";
}

function checkboxToggle(id) {
    if (document.getElementById(id).checked == true) {
        document.getElementById(id).checked = false;
    } else {
        document.getElementById(id).checked = true;
    }
}

function checkboxToggleP(id) {
    document.getElementById(id).checked = true;
}