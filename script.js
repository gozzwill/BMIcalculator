function calculatebmi() {
    const weight = document.querySelector('.weight');
    const height = document.querySelector('.height');
    const result = document.querySelector('.result');
    const calculatebutton = document.querySelector('.calculatebutton');
    const resetbutton = document.querySelector('.resetbutton');


/*HEIGHT TO M */

    let H = height.value/100
    

/*BMI CALC */
    let bmi = (weight.value)/(H*H)


    let category = "";
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else if (bmi > 29.9) {
            category = "Obesity";
        }
    if (weight.value >= 1 || height.value >= 1){ 
        result.innerHTML = 'Your BMI is ' + bmi.toFixed(2) + " " + category
    } else if( weight.value <= 0 || height.value <= 0){
        result.innerHTML = "Please enter valid measurements"
    }
}

function reset(){
    const weight = document.querySelector('.weight');
    const height = document.querySelector('.height');
    const result = document.querySelector('.result');
    const calculatebutton = document.querySelector('.calculatebutton');
    const resetbutton = document.querySelector('.resetbutton');

    weight.value = ""
    height.value = ""
    result.innerHTML = ""
}

