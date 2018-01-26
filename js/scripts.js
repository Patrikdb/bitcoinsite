var coinContainer = document.getElementById('what');

var myRequest = new XMLHttpRequest();
//myRequest.open('GET', 'https://api.coinmarketcap.com/v1/ticker/')
myRequest.open('GET', 'https://api.coinmarketcap.com/v1/ticker/?start=0&limit=10')

myRequest.onload = function() {
  var myData = JSON.parse(myRequest.responseText);
  console.log(myData[0])
  addHTML(myData);
  var rank = document.getElementById('rank').innerHTML = myData[0].rank;
  var name = document.getElementById('name').innerHTML = myData[0].name;
  var priceUsd = document.getElementById('priceUsd').innerHTML = myData[0].price_usd;
  var volU24 = document.getElementById('volUd24').innerHTML = myData[0]['24h_volume_usd'];
  var pst1h = document.getElementById('pst1h').innerHTML = myData[0].percent_change_1h
  var symbol = document.getElementById('symbol').innerHTML = myData[0].symbol
;

};
myRequest.send();
function addHTML (data) {

  for(i = 0; i < data.length; i++){
  coinContainer.innerHTML += "YO NIGGA";
}
}
