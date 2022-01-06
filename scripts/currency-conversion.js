//More info about api data on https://app.abstractapi.com/api/exchange-rates/documentation

fetch('https://exchange-rates.abstractapi.com/v1/live/?api_key=1b28c23d9af34b2ea1cf20cd0ec547b1&base=USD')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    rates = JSON.stringify(data.exchange_rates);
    rp = JSON.parse(rates);
    lastupdated = data.last_updated * 1000;
    usdcad = rp.CAD.toLocaleString();
    usdeur = rp.EUR.toLocaleString();
    usdgbp = rp.GBP.toLocaleString();
    usdbtc = rp.BTC;
    usddoge = rp.DOGE.toLocaleString();

    let dateupdated = new Date(lastupdated).toLocaleDateString('en-US')

    let timeupdated = new Date(lastupdated).toLocaleTimeString('en-US')

    let lastupdatedtime = dateupdated + ' ' + timeupdated;

    document.getElementById('lastupdated').innerHTML = lastupdatedtime;
    document.getElementById('usdcad').innerHTML = usdcad;
    document.getElementById('usdeur').innerHTML = usdeur;
    document.getElementById('usdgbp').innerHTML = usdgbp;
    document.getElementById('usdbtc').innerHTML = usdbtc;
    document.getElementById('usddoge').innerHTML = usddoge;
    document.getElementById('reloadprompt').innerHTML = '';
  })
  .catch((err) => {})

function gettousd(code) {
  fetch(`https://exchange-rates.abstractapi.com/v1/live/?api_key=1b28c23d9af34b2ea1cf20cd0ec547b1&base=${code}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      rates = JSON.stringify(data.exchange_rates);
      rp = JSON.parse(rates);
      tousd = rp.USD;
      result = tousd.toLocaleString();
      document.getElementById(code).innerHTML = `\$${result} USD`;
    })
    .catch((err) => {})
}

setTimeout(function () {
  gettousd('CAD');
}, 1250);

setTimeout(function () {
  gettousd('EUR');
}, 2500);

setTimeout(function () {
  gettousd('GBP');
}, 3750);

setTimeout(function () {
  gettousd('BTC');
}, 5000);

setTimeout(function () {
  gettousd('DOGE');
}, 6250);