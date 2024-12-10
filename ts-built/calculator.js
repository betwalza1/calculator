function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value; // Append the clicked button's value to the display
}
function clearDisplay() {
    var display = document.getElementById('display');
    display.value = ''; // Clear the display
}
function calculate() {
    var display = document.getElementById('display');
    try {
        // Evaluate the expression and display the result
        display.value = eval(display.value).toString();
    }
    catch (error) {
        display.value = 'Erreur'; // Display error if the evaluation fails
    }
}
var scientificMode = false;
var isScientificMode = false;
function switchToScientificMode() {
    var scientificButtons = document.querySelector('.scientific-buttons');
    // Bascule l'état du mode scientifique
    isScientificMode = !isScientificMode;
    // Affiche ou cache les boutons scientifiques
    scientificButtons.style.display = isScientificMode ? 'grid' : 'none';
}
function toggleMode() {
    scientificMode = !scientificMode;
    var display = document.getElementById('display');
    display.value = scientificMode ? 'Mode Scientifique' : 'Mode Normal';
}
// Scientific Functions
function power() {
    var display = document.getElementById('display');
    var values = display.value.split(',');
    if (values.length === 2) {
        var base = parseFloat(values[0]);
        var exponent = parseFloat(values[1]);
        display.value = Math.pow(base, exponent).toString();
    }
    else {
        display.value = 'Entrée: x,y';
    }
}
function factorial() {
    var display = document.getElementById('display');
    var n = parseInt(display.value);
    if (n < 0) {
        display.value = 'Erreur';
        return;
    }
    display.value = (n === 0 ? 1 : n * factorialRecursive(n)).toString();
}
function factorialRecursive(n) {
    return n <= 1 ? 1 : n * factorialRecursive(n - 1);
}
function sqrt() {
    var display = document.getElementById('display');
    var n = parseFloat(display.value);
    display.value = Math.sqrt(n).toString();
}
function toBinary() {
    var display = document.getElementById('display');
    var n = parseInt(display.value);
    display.value = n.toString(2);
}
function toHex() {
    var display = document.getElementById('display');
    var n = parseInt(display.value);
    display.value = n.toString(16).toUpperCase();
}
function exponential() {
    var display = document.getElementById('display');
    var n = parseFloat(display.value);
    display.value = Math.exp(n).toString();
}
function logarithm() {
    var display = document.getElementById('display');
    var n = parseFloat(display.value);
    display.value = Math.log(n).toString();
}
function cosine() {
    var display = document.getElementById('display');
    var n = parseFloat(display.value);
    display.value = Math.cos(n).toString();
}
function sine() {
    var display = document.getElementById('display');
    var n = parseFloat(display.value);
    display.value = Math.sin(n).toString();
}
function tangent() {
    var display = document.getElementById('display');
    var n = parseFloat(display.value);
    display.value = Math.tan(n).toString();
}
function currentTime() {
    var display = document.getElementById('display');
    var now = new Date();
    display.value = now.toLocaleTimeString();
}
function modulo() {
    var display = document.getElementById('display');
    var values = display.value.split(',');
    if (values.length === 2) {
        var a = parseFloat(values[0]);
        var b = parseFloat(values[1]);
        display.value = (a % b).toString();
    }
    else {
        display.value = 'Entrée: a,b';
    }
}
// Make functions accessible globally
window.appendToDisplay = appendToDisplay;
window.clearDisplay = clearDisplay;
window.calculate = calculate;
window.toggleMode = toggleMode;
window.power = power;
window.factorial = factorial;
window.sqrt = sqrt;
window.toBinary = toBinary;
window.toHex = toHex;
window.exponential = exponential;
window.logarithm = logarithm;
window.cosine = cosine;
window.sine = sine;
window.tangent = tangent;
window.currentTime = currentTime;
window.modulo = modulo;
