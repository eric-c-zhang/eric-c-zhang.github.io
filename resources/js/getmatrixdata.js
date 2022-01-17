const getMatrixData = async assets => {
    //Download price data... to be moved to Heroku server
    var results = [];
    var stocks = new Stocks('HOW0LDN2HBFLZDA2')
    for (a in assets) {
        options.symbol = assets[a];
        results[a] = await stocks.timeSeries(options)
    }
    let returnResults = results;
    closePrice = extractClosePrice(await returnResults);
    returns = makeReturnArray(await returnResults);
    
    try {
        covmat=math.matrix(cov(returns));
    } catch(e) {
        console.log("Error in the matrix");
        console.log(e);
    }

    //Use the static matrix from the Heroku server if possible
    console.log(remoteMat)
    if (remoteMat !== undefined) {
        covmat = remoteMat;
    }
    return covmat;
}