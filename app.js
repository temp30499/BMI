document.getElementById('bmi-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid values for height and weight.";
        return;
    }

    const bmi = calculateBMI(height, weight);
    document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
});

function calculateBMI(height, weight) {
    return weight / ((height / 100) ** 2);
}
