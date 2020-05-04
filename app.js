// VARIABLES FOR CELSIUS TO FAHRENHEIT
const loading = document.getElementById('loading')
const results = document.getElementById('results');
const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const celsiusFahrenheit = document.getElementById('celsius-fahrenheit');

celsiusFahrenheit.addEventListener('submit', function(e){
    // Hide Fahrenheit
    results.style.display = 'none';

    // Show loading
    loading.style.display = 'block';

    // show calculated result
    setTimeout(calculateResult, 1000);

    e.preventDefault();
});

// result for celsius to fahrenheit
function calculateResult(){
    // Hide loading
    loading.style.display = 'none';

    fahrenheit.value = ((celsius.value * 1.8) + 32).toFixed(2);
    results.style.display = 'block';
}

// VARIABLES FOR FAHRENHEIT TO  CELSIUS
const loading1 = document.getElementById('loading1')
const results1 = document.getElementById('results1');
const celsius1 = document.getElementById('celsius1');
const fahrenheit1 = document.getElementById('fahrenheit1');
const fahrenheitCelsius = document.getElementById('fahrenheit-celsius');

fahrenheitCelsius.addEventListener('submit', function(e){
    // Hide Fahrenheit
    results1.style.display = 'none';

    // Show loading
    loading1.style.display = 'block';

    // show calculated result
    setTimeout(calculateResult1, 1000);

    e.preventDefault();
});

// result for celsius to fahrenheit
function calculateResult1(){
    // Hide loading
    loading1.style.display = 'none';

    celsius1.value = ((fahrenheit1.value - 32)/1.8).toFixed(2);
    results1.style.display = 'block';
}


