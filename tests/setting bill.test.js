describe('the setting bill with factory function' , function(){
    it('should be able to set the call cost ' , function(){
        let settingBill = BillWithSettings();

        
        settingBill.setCallCost(1.85);
        assert.equal(1.85,settingBill.getCallCost());

        let settingBill2 = BillWithSettings();
        settingBill2.setCallCost(2.75);
        assert.equal(2.75,settingBill2.getCallCost());

    });

    it('should be able to set the sms cost ' , function(){
        let settingBill = BillWithSettings();
        settingBill.setSmsCost(0.85);
        assert.equal(0.85,settingBill.getSmsCost());

        let settingBill2 = BillWithSettings();
        settingBill2.setSmsCost(0.75);
        assert.equal(0.75,settingBill2.getSmsCost());

    });

    it('should be able to set the sms  and call cost ' , function(){
        let settingBill = BillWithSettings();
        settingBill.setSmsCost(0.85);
        settingBill.setCallCost(2.75);

        assert.equal(0.85,settingBill.getSmsCost())
        assert.equal(2.75,settingBill.getCallCost());

        let settingBill2 = BillWithSettings();
        settingBill2.setSmsCost(0.65);
        settingBill2.setCallCost(1.75);

        assert.equal(0.65,settingBill2.getSmsCost())
        assert.equal(1.75,settingBill2.getCallCost());

    });


    it('should be able to set the Warning Level' , function(){
        
        let settingBill = BillWithSettings();
        settingBill.setWarningLevel(20)
        assert.equal(20,settingBill.getWarningLevel());
        



    });

    it('should be able to set the critical Level' , function(){
        
        let settingBill = BillWithSettings();
        settingBill.setCriticalLevel(30)
        assert.equal(30,settingBill.getCriticalLevel());
        



    });

    it('should be able to set the warning and critical Level' , function(){
        
        let settingBill = BillWithSettings();
        settingBill.setWarningLevel(15)
        settingBill.setCriticalLevel(20)

        assert.equal(15,settingBill.getWarningLevel());

        assert.equal(20,settingBill.getCriticalLevel());
        
    });


    describe('use values' , function(){
        
       it("should be able to use the call cost set",function(){
           let settingBill = BillWithSettings();
          settingBill.setCriticalLevel(10);

           settingBill.setCallCost(2.25)
           settingBill.setSmsCost(0,85);

           settingBill.makeCall();
           settingBill.makeCall();
           settingBill.makeCall();

           assert.equal(6.75,settingBill.getTotalCost());
           assert.equal(6.75,settingBill.getTotalCallCost());
           assert.equal(0.00,settingBill.getTotalSmsCost());
       })

       it("should be able to use the call cost set for 2 calls at 1.35 each",function(){
        let settingBill = BillWithSettings();
       settingBill.setCriticalLevel(10);

        settingBill.setCallCost(1.35)
        settingBill.setSmsCost(0.85);

        settingBill.makeCall();
        settingBill.makeCall();
        

        assert.equal(2.70,settingBill.getTotalCost());
        assert.equal(2.70,settingBill.getTotalCallCost());
        assert.equal(0.00,settingBill.getTotalSmsCost());
    })

    it("should be able to send 2 sms at 0.85 each",function(){
        let settingBill = BillWithSettings();
        settingBill.setCriticalLevel(10);

        settingBill.setCallCost(1.35)
        settingBill.setSmsCost(0.85);

        settingBill.sendSms();
        settingBill.sendSms();
        

        assert.equal(1.70,settingBill.getTotalCost());
        assert.equal(0.00,settingBill.getTotalCallCost());
        assert.equal(1.70,settingBill.getTotalSmsCost());
    })

    it("should be able to send 2 sms at 0.85 each and make call at 1.35",function(){
        let settingBill = BillWithSettings();
        settingBill.setCriticalLevel(10);
        settingBill.setCallCost(1.35)
        settingBill.setSmsCost(0.85);

        settingBill.sendSms();
        settingBill.makeCall()
        settingBill.sendSms();
        

        assert.equal(3.05,settingBill.getTotalCost());
        assert.equal(1.35,settingBill.getTotalCallCost());
        assert.equal(1.70,settingBill.getTotalSmsCost());
    })
    describe(" warning level and critical level",function(){
        it("it should return a class name of 'warning' if warning level is reached",function(){
            let settingBill = BillWithSettings();
            settingBill.setCallCost(1.35);
            settingBill.setSmsCost(0.85);
            settingBill.setWarningLevel(4);
            settingBill.setCriticalLevel(10);

            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();

            assert.equal("warning",settingBill.totalClassName())

        })
         it("it should return a class name of 'critical' if warning level has been reached",function(){
            let settingBill = BillWithSettings();

            settingBill.setCallCost(2.50);
            settingBill.setSmsCost(0.85);
            settingBill.setWarningLevel(10);

            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();

            assert.equal("critical",settingBill.totalClassName())

        })

        it(" it should stop the total call cost from increasing when the critical level has been reached",function(){
            let settingBill = BillWithSettings();
            settingBill.setCriticalLevel(10);

            settingBill.setCallCost(2.50);
            settingBill.setSmsCost(0.85);
            settingBill.setCriticalLevel(10);

            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();
            settingBill.makeCall();

            assert.equal("critical",settingBill.totalClassName())
            assert.equal(10,settingBill.totalClassName())

        })
        
    })
    
    
    });

});