fetch('https://v6.exchangerate-api.com/v6/822304e8ee8183e9de49f5df/latest/USD')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        rates = JSON.stringify(data.conversion_rates);
        rp = JSON.parse(rates);
        lastupdated = data.time_last_update_unix * 1000;
        nextupdate = data.time_next_update_unix * 1000;
        usdcad = rp.CAD.toLocaleString();
        usdeur = rp.EUR.toLocaleString();
        usdgbp = rp.GBP.toLocaleString();
        usdaud = rp.AUD.toLocaleString();
        usdcrc = rp.CRC.toLocaleString();
        usdjpy = rp.JPY.toLocaleString();
        cadusd = (1 / usdcad).toLocaleString();
        eurusd = (1 / usdeur).toLocaleString();
        gbpusd = (1 / usdgbp).toLocaleString();
        audusd = (1 / usdaud).toLocaleString();
        crcusd = (1 / usdcrc).toLocaleString();
        jpyusd = (1 / usdjpy).toLocaleString();

        let lastupdatedtime = new Date(lastupdated).toLocaleDateString('en-US') + ', ' + new Date(lastupdated).toLocaleTimeString('en-US');
        let nextupdatetime = new Date(nextupdate).toLocaleDateString('en-US') + ', ' + new Date(nextupdate).toLocaleTimeString('en-US');

        document.getElementById('lastupdated').innerHTML = lastupdatedtime;
        document.getElementById('nextupdate').innerHTML = nextupdatetime;
        document.getElementById('usdcad').innerHTML = '$' + usdcad;
        document.getElementById('usdeur').innerHTML = '$' + usdeur;
        document.getElementById('usdgbp').innerHTML = '$' + usdgbp;
        document.getElementById('usdaud').innerHTML = '$' + usdaud;
        document.getElementById('usdcrc').innerHTML = '$' + usdcrc;
        document.getElementById('usdjpy').innerHTML = '$' + usdjpy;
        document.getElementById('cadusd').innerHTML = '$' + cadusd;
        document.getElementById('eurusd').innerHTML = '$' + eurusd;
        document.getElementById('gbpusd').innerHTML = '$' + gbpusd;
        document.getElementById('audusd').innerHTML = '$' + audusd;
        document.getElementById('crcusd').innerHTML = '$' + crcusd;
        document.getElementById('jpyusd').innerHTML = '$' + jpyusd;
        document.getElementById('reloadprompt').innerHTML = '';
    })
    .catch((err) => {});
