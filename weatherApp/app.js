var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var time = document.querySelector('.day-time');
var shortDesc = document.querySelector('.short-desc');
var moreDesc = document.querySelector('.more-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var humidity = document.querySelector('.humidity span');
var content = document.querySelector('.content')

async function changeWeatherUI(){
    let capitalSearch = search.value.trim();
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=22f24674a9caf499ac0648934e1df086`;
    let data = await fetch(apiURL).then(res=> res.json()); 
    console.log(data);
    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + 'm';
        wind.innerText = data.wind.speed + 'm/s';
        humidity.innerText = data.main.humidity + '(%)';
        value.innerText = (data.main.temp - 273.15).toFixed();
        shortDesc.innerText = data.weather[1] ? data.weather[1].main : '';
        time.innerText = new Date().toLocaleString('vi');
        capitalSearch = '';
    }else{
        content.classList.add('hide')
    }
}



search.addEventListener('keypress', function(e){
    if(e.code == "Enter"){
        changeWeatherUI();

    }
})
