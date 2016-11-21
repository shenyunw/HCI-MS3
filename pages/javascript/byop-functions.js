
// function for change the state of something when a button is clicked
function toggleTopping(id) {
    var currentValue = document.getElementById(id).style.visibility;
    if (!currentValue || currentValue == "hidden") {
        document.getElementById(id).style.visibility = "visible";
    } else {
        document.getElementById(id).style.visibility = "hidden";
    }
}




function checkboxToggle(id) {
    if (document.getElementById(id).checked == true) {
        document.getElementById(id).checked = false;
    } else {
        document.getElementById(id).checked = true;
    }
}