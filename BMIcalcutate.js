const form = document.querySelector('form');
//!this usecase will give you empty
//! const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const resutls = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        resutls.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        resutls.innerHTML = `Please give a valid Weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        //show the result 
        resutls.innerHTML = `<sapn>${bmi}</span>`
    }
});