function radioBill(){
    var callCost =2.75
    var smsCost = 0.75
    var callCostTotal = 0
    var smsCostTotal = 0
    var theWarningLevel = 0
    var theCriticalLevel = 0

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
    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }
    return {
        theCallCost,
        theSmsCost,
        makeSms,
        makeCall,
        getTotalCost,
        setWarningLevel,
        setCriticalLevel,
        totalClassName
    }
}