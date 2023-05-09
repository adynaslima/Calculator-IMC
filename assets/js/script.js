const form = document.querySelector('#form'); 

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.querySelector('#value'); 
    let description = '';

    value.classList.add('atencao');

    document.querySelector('#infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Cuidado! O seu peso está abaixo do ideal!';
    } else if (bmi >= 18.5 && bmi <= 25) {
        value.classList.remove('atencao');
        value.classList.add('normal');
        description = 'Parabéns! Você está com peso ideal!';
    } else if (bmi > 25 && bmi <= 30) {
        description = 'Cuidado! Você está com sobrepeso!';
    } else if (bmi > 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!';
    } else if (bmi > 35 && bmi <= 40) {
        description = 'Cuidado! Você está com obesidade severa!'; 
    } else {
        description = 'Cuidado! Você está com obesidade mórbida!';
    }

    value.textContent = bmi.replace('.', ',');
    document.querySelector('#description').textContent = description; 
});