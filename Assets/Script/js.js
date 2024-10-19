function convertLength() {
    const length = document.getElementById("length").value;
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    const units = {
        meters: 1,
        centimeters: 100,
        kilometers: 0.001,
        miles: 0.000621371
    };

    const lengthInMeters = length / units[fromUnit];

    const convertedLength = lengthInMeters * units[toUnit];

    document.getElementById("result").innerText = "Result Is : " + convertedLength.toFixed(2) + " " + toUnit;
}