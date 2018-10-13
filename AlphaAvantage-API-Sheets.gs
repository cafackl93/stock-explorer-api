function callNumbers() {
  
  //set API key value
  var apikey = "IUEO12W2JU4IUEOU"
  
  // Set var URL and define parameters for Alpha Vantage API
  var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min'
    + '&apikey=' + encodeURIComponent(apikey);
  
  var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
  
  Logger.log(response);
}
