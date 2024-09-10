document
  .getElementById("add-city-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const cityName = document.getElementById("city-name").value;
    const cityImage = document.getElementById("city-image").value;
    const cityDescription = document.getElementById("city-description").value;
    const cityCountry = document.getElementById("city-country").value;

    const newCity = {
      name: cityName,
      image: cityImage,
      description: cityDescription,
    };

    const citiesByCountry =
      JSON.parse(localStorage.getItem("citiesByCountry")) || {};
    const cities = citiesByCountry[cityCountry] || [];

    cities.push(newCity);

    citiesByCountry[cityCountry] = cities;
    localStorage.setItem("citiesByCountry", JSON.stringify(citiesByCountry));

    if (cityCountry == "france") {
      window.location.href = "france.html";
    } else if (cityCountry == "usa") {
      window.location.href = "usa.html";
    } else if (cityCountry == "italy") {
      window.location.href = "italy.html";
    } else {
      window.location.href = "homepage.html";
    }
  });
