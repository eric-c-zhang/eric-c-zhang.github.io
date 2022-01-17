const portfolioRisk = (COVmatrix,firstReturn,weight,periods,scaler) => {
    let portfolioRisk = {}
    let hurdleRateArray = [];
    tWeight = math.transpose(weight);
    risk = math.sqrt(math.multiply(weight,COVmatrix,tWeight))*math.sqrt(periods)
    ERMCratio = math.multiply(weight,COVmatrix,periods,1/risk)
    anchorERMC = firstReturn/scaler/ERMCratio._data[0]
    for (var g of ERMCratio._data){
        hurdleRateArray.push(anchorERMC*g);
    } 
    hurdleRateArray[0]=firstReturn/100;
    
    portfolioRisk = {
        risk: risk,
        ERMCratios: ERMCratio,
        anchorERMC: anchorERMC,
        hurdleRateArray: hurdleRateArray
    }
    
    return portfolioRisk;
}