//More info about api data on https://app.abstractapi.com/api/ip-geolocation

var output;

$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=7dcea861f91a44579cea73ad833eff21", function (data) {
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

       output = "<span class='tooltip-text tooltip-right' data-tooltip='Internet Protocol'>IP</span> Address: " + ip + "<br><span class='tooltip-text tooltip-right' data-tooltip='Internet Service Provider'>ISP</span>: " + isp + "<br>City: " + city + "<br>Region: " + region + " (" + region_code + ")" + "<br>Country: " + country + " (" + country_code + ") " + flagemoji + "<br>Continent: " + continent + " (" + continent_code + ")" + "<br>Latitude (north-south): " + latitude + "<br>Longitude (east-west): " + longitude;

       document.getElementById('ip').innerHTML = output;
})