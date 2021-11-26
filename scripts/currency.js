//More info about api data on https://app.abstractapi.com/api/exchange-rates/documentation

let today = new Date();
let yesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 3);

today.toDateString();
yesterday.toDateString();

let prevdate = yesterday.getFullYear() + "-" + (yesterday.getMonth() + 1) + "-" + yesterday.getDate()

$.getJSON("https://exchange-rates.abstractapi.com/v1/live/?api_key=1b28c23d9af34b2ea1cf20cd0ec547b1&base=USD", function (data) {
  rates = JSON.stringify(data.exchange_rates);
  rp = JSON.parse(rates);
  lastupdated = data.last_updated * 1000;
  usdcad = rp.CAD;
  usdeur = rp.EUR;
  usdgbp = rp.GBP;
  usdbtc = rp.BTC;
  usddoge = rp.DOGE;

let dateupdated = new Date(lastupdated).toLocaleDateString("en-US")

let timeupdated = new Date(lastupdated).toLocaleTimeString("en-US")

let lastupdatedtime = dateupdated + " " + timeupdated;

  document.getElementById('lastupdated').innerHTML = lastupdatedtime;
  document.getElementById('usdcad').innerHTML = usdcad;
  document.getElementById('usdeur').innerHTML = usdeur;
  document.getElementById('usdgbp').innerHTML = usdgbp;
  document.getElementById('usdbtc').innerHTML = usdbtc;
  document.getElementById('usddoge').innerHTML = usddoge;
  document.getElementById('reloadprompt').innerHTML = "";
});

function gettousd(code) {$.getJSON(`https://exchange-rates.abstractapi.com/v1/live/?api_key=1b28c23d9af34b2ea1cf20cd0ec547b1&base=${code}`, function(data) {
  rates = JSON.stringify(data.exchange_rates);
  rp = JSON.parse(rates);
  tousd = rp.USD;
  document.getElementById(code).innerHTML = `\$${tousd} USD`
})
}

setTimeout(function() {
  gettousd('CAD');
}, 1200);

setTimeout(function() {
  gettousd('EUR');
}, 2400);

setTimeout(function() {
  gettousd('GBP');
}, 3600);

setTimeout(function() {
  gettousd('BTC');
}, 4800);

setTimeout(function() {
  gettousd('DOGE');
}, 6000);
