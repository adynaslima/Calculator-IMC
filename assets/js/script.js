const form = document.querySelector('#form'); 

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.querySelector('#value'); 
    let description = '';

    document.querySelector('#infos').classList.remove('hidden');
});