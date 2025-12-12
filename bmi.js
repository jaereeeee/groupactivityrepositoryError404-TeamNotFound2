const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calculateBMI = document.getElementById('calculateBMI');
const bmiResult = document.getElementById('bmiResult');

function BMI(height, weight){
    return weight / (height * height) ;
}
 document.getElementById('calculateBMI').addEventListener('click', function() {
    const heightValue = parseFloat(height.value);
    const weightValue = parseFloat(weight.value);
    const bmi = BMI(heightValue, weightValue);
    const result = document.getElementById('result');
    result.value = bmi.toFixed(2);
 });