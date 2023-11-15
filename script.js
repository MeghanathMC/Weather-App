let inputEl = document.getElementById("text-field");
let tempEl = document.getElementById("temp-value");
let weatherDesc = document.getElementById("weather-info");
let placeEl = document.getElementById("place");
let btnEl = document.getElementById("btn");
let icon = document.getElementById("img");

const apiKey = "a95a60e3b6813cde47a3cf8e5593e373";
btnEl.onclick = function () {
  if (inputEl == "") {
    alert("please enter some location: ");
  } else {
    loc = inputEl.value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const { name } = data;
        const { feels_like } = data.main;
        const { description } = data.weather[0];
        tempEl.innerText = Math.floor(feels_like);
        placeEl.innerText = name;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"`;

        weatherDesc.innerText = description;
      })

      .catch(() => {
        alert("location not found");
      });
    inputEl.value = "";
  }
};
