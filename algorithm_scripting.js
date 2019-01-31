const log = console.log;

const convertToFahrenheit = celsious => (celsious * 9/ 5) + 32;
log(convertToFahrenheit(-30)); // -22

const convertToCelsious = fahrenheit => (fahrenheit - 32) * 5/9;
log(convertToCelsious(-22)); // -30