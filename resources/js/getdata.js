var assets = ['XIC.TO','XIN.TO','XSP.TO','XBB.TO','CAR-UN.TO']
var options = {
  symbol: 'AAPL',
  interval: 'weekly',
  amount: 52
};
var cov = require( 'compute-covariance' );

async function getStockData(assets) {
  let results = {};
  var stocks = new Stocks('HOW0LDN2HBFLZDA2')
    for (a in assets) {
        options.symbol = assets[a];
        results[a] = await stocks.timeSeries(options);
    }
    return results;
}
