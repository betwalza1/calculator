function appendToDisplay(value: string): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += value; // Append the clicked button's value to the display
}

function clearDisplay(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = ''; // Clear the display
}

function calculate(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        // Evaluate the expression and display the result
        display.value = eval(display.value).toString(); 
    } catch (error) {
        display.value = 'Erreur'; // Display error if the evaluation fails
    }
}

let scientificMode = false;
let isScientificMode: boolean = false;

function switchToScientificMode(): void {
    const scientificButtons = document.querySelector('.scientific-buttons') as HTMLElement;

    // Bascule l'état du mode scientifique
    isScientificMode = !isScientificMode;

    // Affiche ou cache les boutons scientifiques
    scientificButtons.style.display = isScientificMode ? 'grid' : 'none';
}



function toggleMode(): void {
    scientificMode = !scientificMode;
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = scientificMode ? 'Mode Scientifique' : 'Mode Normal';
}

// Scientific Functions
function power(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    const values = display.value.split(',');
    if (values.length === 2) {
        const base = parseFloat(values[0]);
        const exponent = parseFloat(values[1]);
        display.value = Math.pow(base, exponent).toString();
    } else {
        display.value = 'Entrée: x,y';
    }
}

function factorial(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseInt(display.value);
    if (n < 0) {
        display.value = 'Erreur';
        return;
    }
    display.value = (n === 0 ? 1 : n * factorialRecursive(n)).toString();
}

function factorialRecursive(n: number): number {
    return n <= 1 ? 1 : n * factorialRecursive(n - 1);
}

function sqrt(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseFloat(display.value);
    display.value = Math.sqrt(n).toString();
}

function toBinary(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseInt(display.value);
    display.value = n.toString(2);
}

function toHex(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseInt(display.value);
    display.value = n.toString(16).toUpperCase();
}

function exponential(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseFloat(display.value);
    display.value = Math.exp(n).toString();
}

function logarithm(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseFloat(display.value);
    display.value = Math.log(n).toString();
}

function cosine(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseFloat(display.value);
    display.value = Math.cos(n).toString();
}

function sine(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseFloat(display.value);
    display.value = Math.sin(n).toString();
}

function tangent(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    const n = parseFloat(display.value);
    display.value = Math.tan(n).toString();
}

function currentTime(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    const now = new Date();
    display.value = now.toLocaleTimeString();
}

function modulo(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    const values = display.value.split(',');
    if (values.length === 2) {
        const a = parseFloat(values[0]);
        const b = parseFloat(values[1]);
        display.value = (a % b).toString();
    } else {
        display.value = 'Entrée: a,b';
    }

    

}

// Make functions accessible globally
(window as any).appendToDisplay = appendToDisplay;
(window as any).clearDisplay = clearDisplay;
(window as any).calculate = calculate;
(window as any).toggleMode = toggleMode;
(window as any).power = power;
(window as any).factorial = factorial;
(window as any).sqrt = sqrt;
(window as any).toBinary = toBinary;
(window as any).toHex = toHex;
(window as any).exponential = exponential;
(window as any).logarithm = logarithm;
(window as any).cosine = cosine;
(window as any).sine = sine;
(window as any).tangent = tangent;
(window as any).currentTime = currentTime;
(window as any).modulo = modulo;