//More info about api data on https://app.abstractapi.com/api/exchange-rates/documentation

let today = new Date();
let yesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);

today.toDateString();
yesterday.toDateString();

let prevdate = yesterday.getFullYear() + "-" + (yesterday.getMonth() + 1) + "-" + yesterday.getDate()

$.when(
  $.getJSON("https://exchange-rates.abstractapi.com/v1/live/?api_key=dc0955a3bba74d768ea3bd6a48bc522e&base=USD") //,
  //$.getJSON(`https://exchange-rates.abstractapi.com/v1/historical/?api_key=dc0955a3bba74d768ea3bd6a48bc522e&base=USD&target=EUR,GBP,CAD,BTC,DOGE&date=${prevdate}`)
).done(function (curdata /*, prevdata*/ ) {
  // Current rates
  rates = JSON.stringify(curdata/*[0]*/.exchange_rates);
  rp = JSON.parse(rates);
  lastupdated = curdata.last_updated * 1000;
  usdcad = rp.CAD;
  usdeur = rp.EUR;
  usdgbp = rp.GBP;
  usdbtc = rp.BTC;
  usddoge = rp.DOGE;
  // Prev rates
  /*prevrates = JSON.stringify(prevdata[0].exchange_rates);
  prevrp = JSON.parse(prevrates);
  prevusdcad = prevrp.CAD;
  prevusdeur = prevrp.EUR;
  prevusdgbp = prevrp.GBP;
  prevusdbtc = prevrp.BTC;
  prevusddoge = prevrp.DOGE;

  if (usdcad > prevusdcad) {
    console.log("CAD exchange rate is rising!")
  } else if (usdcad < prevusdcad) {
    console.log("CAD exchange rate is decreasing!")
  } else {
    console.log("CAD exchange rate is constant.")
  }*/

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