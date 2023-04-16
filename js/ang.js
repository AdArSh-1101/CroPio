function calculate(){
    const urlParams = new URLSearchParams(window.location.search);
    const origin = urlParams.get('origin');
    let landSize = document.getElementById("land-size").value;
    let measurementType = document.getElementById("measurement-type").value;
    let totalCost, profit;
    if (measurementType === "bigha") {
        landSize=landSize*0.619;
    } 
    else if (measurementType === "hectare") {
        landSize=landSize*2.47105;
    }
    if(origin==='Wheat'){
        totalCost=12210*landSize;
        profit=15390*landSize;
    }
    else if(origin==='Soybeans'){
        totalCost=1476*81.97*landSize;
        profit=20979*landSize;
    }
    else if(origin==='Corn'){
        totalCost=15200*landSize;
        profit=36000*landSize;
    }
    else if(origin==='Winter Wheat'){
        totalCost=151.20*81.97*landSize;
        profit=173.80*81.97*landSize;
    }
    else{
        totalCost=0;
        profit=0;
    }
    totalCost=(totalCost).toFixed(2);
    profit=(profit).toFixed(2);
    document.getElementById("total-cost").value = totalCost;
    document.getElementById("total-profit").value = profit;
    return false;
}