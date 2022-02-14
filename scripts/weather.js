let result = document.getElementById('result');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getData, function (error) {
            if (error.code === error.PERMISSION_DENIED) {
                result.innerHTML = '<span class="error">Permission to fetch location data denied! Allow this then reload.</span>';
            } else if (error.code === error.POSITION_UNAVAILABLE) {
                result.innerHTML = '<span class="error">Location information is unavailable. Try again later.</span>';
            } else if (error.code === error.TIMEOUT) {
                result.innerHTML = '<span class="error">The request to get your location timed out. Try again later.</span>';
            } else {
                result.innerHTML = '<span class="error">Unable to fetch location data!</span>';
            }
        });
    } else {
        result.innerHTML = '<span class="error">Geolocation is not supported by this browser.</span>';
    }
}

getLocation();

let finalAlerts = [];

function getData(position) {
    fetch(`https://api.weatherbit.io/v2.0/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=8cb466c81e01454d8044dd368b240a6a&include=alerts&units=I`)
        .then((response) => {
            return response.json();
        })
        .then((pre_data) => {
            let data = pre_data.data[0];
            let alerts = pre_data.alerts;
            let latitude = data.lat;
            let longitude = data.lon;
            let sunrise = moment.utc(data.sunrise, 'HH:mm').local().format('hh:mm A');
            let sunset = moment.utc(data.sunset, 'HH:mm').local().format('hh:mm A');
            let updated = moment.unix(data.ts).local('').format('LLLL');
            let station = data.station;
            let city_name = data.city_name;
            let country_code = data.country_code;
            let state_code = data.state_code;
            let wind_speed = data.wind_spd;
            let wind_direction = data.wind_cdir_full;
            let temp = data.temp;
            let app_temp = data.app_temp;
            let humidity = data.rh;
            let dew_point = data.dewpt;
            let clouds = data.clouds;
            let precipitation = data.precip;
            let snowfall = data.snow;
            let weather_image = `<img height="25" width="25" style="transform: translateY(6px)" src="https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png" alt="${data.weather.description}">`;
            let weather_description = data.weather.description;
            let visibility = data.vis;
            let pressure = data.pres;
            let uv_index = data.uv;
            if (uv_index > 0 && uv_index < 3) {
                uv_index = `${uv_index} (<span style="color: #83c88b">Low</span>)`;
            } else if (uv_index >= 3 && uv_index < 6) {
                uv_index = `${uv_index} (<span style="color: #fedc00">Moderate</span>)`;
            } else if (uv_index >= 6 && uv_index < 8) {
                uv_index = `${uv_index} (<span style="color: #f89c1b">High</span>)`;
            } else if (uv_index >= 8 && uv_index < 11) {
                uv_index = `${uv_index} (<span style="color: #ee1d23">Very High</span>)`;
            } else if (uv_index >= 11) {
                uv_index = `${uv_index} (<span style="color: #d83484">Extreme</span>)`;
            }
            let air_quality = data.aqi;
            if (air_quality >= 0 && air_quality < 51) {
                air_quality = `${air_quality} (<span style="color: #a6ce39">Good</span>)`;
            } else if (air_quality >= 51 && air_quality < 101) {
                air_quality = `${air_quality} (<span style="color: #fff201">Moderate</span>)`;
            } else if (air_quality >= 101 && air_quality < 151) {
                air_quality = `${air_quality} (<span style="color: #f6901e">Unhealthy for
        Sensitive Groups</span>)`;
            } else if (air_quality >= 151 && air_quality < 201) {
                air_quality = `${air_quality} (<span style="color: #ed1d24">Unhealthy</span>)`;
            } else if (air_quality >= 201 && air_quality < 301) {
                air_quality = `${air_quality} (<span style="color: #a2064a">Very Unhealthy</span>)`;
            } else if (air_quality >= 301 && air_quality <= 500) {
                air_quality = `${air_quality} (<span style="color: #891a1c">Hazardous</span>)`;
            }
            if (alerts.length === 0) {
                alerts = 'None';
            } else {
                let newAlerts = [];
                for (let i = 0; i < alerts.length; i++) {
                    if (!/has been replaced/g.test(alerts[i].title) && !Math.floor(new Date(alerts[i].ends_local).getTime() / 1000) < Math.floor(new Date().getTime() / 1000)) {
                        newAlerts.push(alerts[i]);
                    }
                }
                let abbrAlerts = [];
                for (let i = 0; i < newAlerts.length; i++) {
                    finalAlerts.push(
                        `${newAlerts[i].title}\n\n${newAlerts[i].description
                            .replace(/\n/g, ' ')
                            .replace(/^\* (.*?)\.{3}/g, '– $1:\n ')
                            .replace(/ \* (.*?)\.{3}/g, '\n\n– $1:\n ')}\n\n– AFFECTED REGIONS:\n ${newAlerts[i].regions}`
                    );
                }
                for (let i = 0; i < newAlerts.length; i++) {
                    abbrAlerts.push(
                        `<span style="text-decoration: underline dotted; cursor: pointer" onclick="showAlert(${i})">${newAlerts[i].title.replace(/ issued.*/g, '')} (${newAlerts[i].severity})</span>`
                    );
                }
                alerts = abbrAlerts.join(', ');
            }

            // Modifed from https://gist.github.com/endel/dfe6bb2fbe679781948c
            const Moon = {
                phases: [
                    'New Moon 🌑',
                    'Waxing Crescent Moon (Illuminated area growing) 🌒',
                    'First Quarter Moon 🌓',
                    'Waxing Gibbous Moon (Illuminated area growing) 🌔',
                    'Full Moon 🌕',
                    'Waning Gibbous Moon (Illuminated area shrinking) 🌖',
                    'Third Quarter Moon 🌗',
                    'Waning Crescent Moon (Illuminated area shrinking) 🌘',
                ],
                phase: function (year, month, day) {
                    let c = (e = jd = b = 0);

                    if (month < 3) {
                        year--;
                        month += 12;
                    }

                    ++month;
                    c = 365.25 * year;
                    e = 30.6 * month;
                    jd = c + e + day - 694039.09;
                    jd /= 29.5305882;
                    b = parseInt(jd);
                    jd -= b;
                    b = Math.round(jd * 8);

                    if (b >= 8) b = 0;
                    return Moon.phases[b];
                },
            };

            let currentTime = new Date();
            let day = currentTime.getDate();
            let month = currentTime.getMonth() + 1;
            let year = currentTime.getFullYear();

            let moon_phase = Moon.phase(year, month, day);

            let output = `Information from ${city_name}, ${state_code} (${country_code}) – Latitude: ${latitude}, Longitude: ${longitude} – Station ID: ${station}<br />Updated on ${updated}<br /><br />Active Alerts: ${alerts}<br /><textarea style="width: 40rem; max-width: 80%; margin-bottom: 25px; display: none" id="alert-display" readonly></textarea><br />Sunrise: ${sunrise}<br />Sunset: ${sunset}<br />Weather: ${weather_description} ${weather_image}<br />Precipitation: ${precipitation} inches/hour<br />Snowfall: ${snowfall} inches/hour<br />Cloud Cover: ${clouds}%<br />Wind: ${wind_speed} miles/hour (${wind_direction})<br />Temperature: ${temp}°F (Feels like ${app_temp}°F)<br />Relative Humidity: ${humidity}%<br />Dew Point: ${dew_point}°F<br />Visibility: ${visibility} miles<br />Pressure: ${pressure} millibars<br />UV Index: ${uv_index}<br />Air Quality: ${air_quality}<br />Moon Phase: ${moon_phase}`;

            result.innerHTML = output;

            twemojiUpdate();
        })
        .catch((err) => {
            console.log(err);
        });
}

function showAlert(alert) {
    console.log('e');
    let alert_display = document.getElementById('alert-display');
    if (alert_display.value !== finalAlerts[alert] || alert_display.style.display !== 'unset') {
        alert_display.style.display = 'unset';
        alert_display.value = finalAlerts[alert];
    } else {
        alert_display.style.display = 'none';
    }
}
