let btn = document.querySelector("#btn")
let city = document.querySelector("#city")
let temp = document.querySelector("num")
let time = document.querySelector("#time")
let wind = document.querySelector("#wind")
let sunrise = document.querySelector("#sunrise")
let sunset = document.querySelector("#sunset")
let humidity = document.querySelector("#humidity")
let visibility = document.querySelector("#visibility")
let uv = document.querySelector("#uv")
let hl=document.querySelector("#hl")
let dhl = document.querySelector("#dhl")
let pm2_5 = document.querySelector("#pm")
let pm10 = document.querySelector("#pm10")
let loca = document.querySelector("h3")
let latitude,longitude;
const Gateinfo = async()=>{
  loca.innerText=city.value;
 let lati_url = `https://geocode.maps.co/search?q=${city.value}&api_key=69280d3334799595588466eom582285`
let response =   await fetch(lati_url)
let data =  await response.json();
latitude = data[0].lat;
longitude = data[0].lon;



    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=IST&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&hourly=visibility,relative_humidity_2m&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
    let response1 = await fetch(url)
   let data1 = await response1.json();
    temp.innerText = data1.current.temperature_2m
    dhl.innerText=`High/Low\n\n${data1.daily.temperature_2m_max[0]}/${data1.daily.temperature_2m_min[0]}`
    wind.innerText = ` Wind Speed \n ${data1.current.wind_speed_10m}Km/h`;
    humidity.innerText=` Humidity \n ${data1.current.relative_humidity_2m}%`
    visibility.innerText=`Visibility \n${data1.hourly.visibility[0]}m`
    hl.innerText=`\n\n${data1.daily.temperature_2m_max[0]}/${data1.daily.temperature_2m_min[0]}\n\n${data1.daily.temperature_2m_max[1]}/${data1.daily.temperature_2m_min[1]}\n\n${data1.daily.temperature_2m_max[2]}/${data1.daily.temperature_2m_min[2]}\n\n${data1.daily.temperature_2m_max[3]}/${data1.daily.temperature_2m_min[3]}\n\n\n${data1.daily.temperature_2m_max[4]}/${data1.daily.temperature_2m_min[4]}\n\n${data1.daily.temperature_2m_max[5]}/${data1.daily.temperature_2m_min[5]}\n\n${data1.daily.temperature_2m_max[6]}/${data1.daily.temperature_2m_min[6]}\n\n`
    time.innerText= `${data1.daily.time[0]}\n\n ${data1.daily.time[1]}\n\n${data1.daily.time[2]}\n\n${data1.daily.time[3]}\n\n\n${data1.daily.time[4]}\n\n ${data1.daily.time[5]}\n\n ${data1.daily.time[6]}\n\n `;
   sunrise.innerText=`${data1.daily.sunrise[0]}\n\n\n ${data1.daily.sunrise[1]}\n\n\n${data1.daily.sunrise[2]}\n\n\n${data1.daily.sunrise[3]}\n\n\n${data1.daily.sunrise[4]}\n\n\n ${data1.daily.sunrise[5]}\n\n\n ${data1.daily.sunrise[6]}\n\n\n `
  sunset.innerText=`${data1.daily.sunset[0]}\n\n\n ${data1.daily.sunset[1]}\n\n\n${data1.daily.sunset[2]}\n\n\n${data1.daily.sunset[3]}\n\n\n${data1.daily.sunset[4]}\n\n\n ${data1.daily.sunset[5]}\n\n\n ${data1.daily.sunset[6]}\n\n\n `
    

    const newurl = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=pm10,pm2_5,uv_index`
let response2 = await fetch(newurl)
let data2 = await response2.json();
uv.innerText=`UV Index\n ${data2.current.uv_index}`;
pm2_5.innerText=`PM2_5\n${data2.current.pm2_5}μg/m`;
pm10.innerText=`PM10\n${data2.current.pm10}μg/m`;


}
Gateinfo();
btn.addEventListener("click",(Gateinfo));

