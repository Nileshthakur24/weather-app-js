let btn = document.getElementById('btnsearch');

// logic 
async function getweather(city) {
    let data = await fetch(`https://api.weatherapi.com/v1/current.json?key=33f7cf3cc1ce40679af130949250205&q=${city}&aqi=yes`);
    // console.log( await data.json());
    return await data.json();

}

// js main 

btn.addEventListener('click', async () => {

    try {
        let city = document.getElementById('input-city');
        // console.log(city.value);
        let img = document.getElementById('weathericon');
        let temp = document.getElementById('temp');
        let citys = document.getElementById('city');
        let country = document.getElementById('country');
        let condition = document.getElementById('condition');
        let windspeed = document.getElementById('windspeed');
        let humid = document.getElementById('humidity');

        const result = await getweather(city.value);
        console.log(result);

        img.src = result.current.condition.icon;
        temp.innerText = `${result.current.temp_c} °C`;
        citys.innerText = result.location.name;
        country.innerText = result.location.country;
        condition.innerText = result.current.condition.text;
        windspeed.innerText = `WindSpeed : ${result.current.wind_kph}(kph)`;
        humid.innerText = `Humidity : ${result.current.humidity}`;
    }
    catch {
        alert("Please Enter City or Api Error...")
    }


})

// new added 
window.addEventListener('load',()=>{
    let city = document.getElementById('input-city').value = "Delhi";
    btn.click();
})

