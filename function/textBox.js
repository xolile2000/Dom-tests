function textBill(){
    var callCostTotal = 0
    var smsCostTotal = 0
    var theWarningLevel = 0
    var theCriticalLevel = 0
    var callCost =2.75
    var smsCost = 0.75

    function theCallCost(){
       return callCost
    }
    function theSmsCost(){
        return smsCost
    }
    function makeCall(){
        callCostTotal += callCost
    }

    function makeSms(){
        callCostTotal += smsCost
    }
    function setWarningLevel(){
        theWarningLevel = 20
    }
    function getWarningLevel(){
        return theWarningLevel
    }
    function setCriticalLevel(){
        theCriticalLevel =30
    }
    function getCriticalLevel(){
        return theCriticalLevel
    }
    

    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }
    function totalClassName(){
        if(getTotalCost() >= getCriticalLevel){
            return "critical"
        }
        if(getTotalCost() >= getWarningLevel){
            return "warning"
        }
    }
    return {
        theCallCost,
        theSmsCost,
        makeCall,
        getTotalCost,
        makeSms,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        totalClassName
    }
}