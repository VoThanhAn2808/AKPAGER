function calculate() {

    let sideLength = parseFloat(document.getElementById('side-length').value);
    let sideUnit = document.getElementById('side-unit').value;
    let depth = parseFloat(document.getElementById('depth').value);
    let depthUnit = document.getElementById('depth-unit').value;

  
    let sideInYards = convertToYards(sideLength, sideUnit);
    let depthInYards = convertToYards(depth, depthUnit);


    let volumeInCubicYards = sideInYards * sideInYards * depthInYards;


    let volumeInCubicFeet = convertToFeet(volumeInCubicYards);
    let volumeInCubicMeters = convertToMeters(volumeInCubicYards);


    document.getElementById('cubic-yards').textContent = volumeInCubicYards.toFixed(2) + ' yd³';
    document.getElementById('cubic-feet').textContent = volumeInCubicFeet.toFixed(2) + ' ft³';
    document.getElementById('cubic-meters').textContent = volumeInCubicMeters.toFixed(2) + ' m³';
}


function convertToYards(value, unit) {
    switch (unit) {
        case 'in':
            return value / 36;
        case 'ft':
            return value / 3;
        case 'yd':
            return value;
        case 'cm':
            return value / 91.44;
        case 'm':
            return value / 0.9144;
        default:
            return 0;
    }
}


function convertToFeet(volumeInCubicYards) {
    return volumeInCubicYards * 27;
}


function convertToMeters(volumeInCubicYards) {
    return volumeInCubicYards * 0.76455485798;
}


function clearInputs() {
    document.getElementById('side-length').value = '';
    document.getElementById('depth').value = '';
    document.getElementById('cubic-yards').textContent = '-';
    document.getElementById('cubic-feet').textContent = '-';
    document.getElementById('cubic-meters').textContent = '-';
}


document.getElementById('calculate-btn').addEventListener('click', calculate);


document.getElementById('clear-btn').addEventListener('click', clearInputs);
