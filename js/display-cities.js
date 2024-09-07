window.onload = function() {
    const container = document.getElementById('dynamic-cities');
    const cities = JSON.parse(localStorage.getItem('cities')) || [];

    container.innerHTML = ''; 

    cities.forEach((city, index) => {
        const cityElement = document.createElement('div');
        cityElement.className = 'container';
        
        cityElement.innerHTML = `
            <img src="${city.image}" alt="${city.name}">
            <h2>${city.name}</h2>
            <p>${city.description}</p>
        `;

        container.appendChild(cityElement);
    });
};

function clearCities() {
    localStorage.removeItem('cities'); 
    window.location.reload(); 
}
