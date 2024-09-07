document.getElementById('add-city-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cityName = document.getElementById('city-name').value;
    const cityImage = document.getElementById('city-image').value;
    const cityDescription = document.getElementById('city-description').value;

    const newCity = {
        name: cityName,
        image: cityImage,
        description: cityDescription
    };

    const cities = JSON.parse(localStorage.getItem('cities')) || [];
    cities.push(newCity);
    localStorage.setItem('cities', JSON.stringify(cities));

    window.location.href = 'france.html';
});


