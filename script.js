document.getElementById('convert').addEventListener('click', function() {
    // Get user input
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    
    // Validate input
    if (isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // Convert temperature
    let convertedTemperature;
    let convertedUnit;
    if (unit === 'celsius') {
        convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
        convertedUnit = '°F';
    } else {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
        convertedUnit = '°C';
    }

    // Display result
    document.getElementById('convertedTemperature').textContent = convertedTemperature.toFixed(2);
    document.getElementById('convertedUnit').textContent = convertedUnit;
});
