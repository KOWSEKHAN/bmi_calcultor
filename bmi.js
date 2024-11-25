function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    if (weight && height) {
        let bmi = weight / ((height / 100) ** 2);
        let result = document.getElementById('result');
        result.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
    } else {
        alert('Please enter both weight and height');
    }
}
