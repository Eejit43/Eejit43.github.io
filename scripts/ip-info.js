//More info about api data on https://app.abstractapi.com/api/ip-geolocation/documentation

fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=7dcea861f91a44579cea73ad833eff21')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        ip = data.ip_address;
        city = data.city;
        region = data.region;
        region_code = data.region_iso_code;
        country = data.country;
        country_code = data.country_code;
        flag = JSON.stringify(data.flag);
        flagparsed = JSON.parse(flag);
        flagemoji = flagparsed.emoji;
        country_flag = flag;
        continent = data.continent;
        continent_code = data.continent_code;
        latitude = data.latitude;
        longitude = data.longitude;
        connection = JSON.stringify(data.connection);
        connectionparsed = JSON.parse(connection);
        isp = connectionparsed.isp_name;

        document.getElementById('ip-address').innerHTML = ip;
        document.getElementById('isp').innerHTML = isp;
        document.getElementById('city').innerHTML = city;
        document.getElementById('region').innerHTML = `${region} (${region_code})`;
        document.getElementById('country').innerHTML = `${country} (${country_code}) ${flagemoji}`;
        document.getElementById('continent').innerHTML = `${continent} (${continent_code})`;
        document.getElementById('latitude').innerHTML = latitude;
        document.getElementById('longitude').innerHTML = longitude;

        document.getElementById('reloadprompt').innerHTML = '';

        twemojiUpdate();
    })
    .catch((err) => {});
