const portfolioRisk = (COVmatrix,firstReturn,weight,periods,scaler) => {
    let portfolioRisk = {}
    let hurdleRateArray = [];
    let portfolioExpectedReturn = 0;
    risk = math.sqrt(math.multiply(weight,COVmatrix,math.transpose(weight)))*math.sqrt(periods)
    ERMCratio = math.multiply(weight,COVmatrix,periods,1/risk)
    anchorERMC = firstReturn/scaler/ERMCratio._data[0]
    for (var g in ERMCratio._data){
        hurdleRateArray.push(anchorERMC*ERMCratio._data[g]);
        portfolioExpectedReturn += anchorERMC*ERMCratio._data[g]*weight[g]
    } 

    portfolioRisk = {
        risk: risk,
        ERMCratios: ERMCratio,
        anchorERMC: anchorERMC,
        hurdleRateArray: hurdleRateArray,
        portfolioExpectedReturn: portfolioExpectedReturn
    }
    
    return portfolioRisk;
}