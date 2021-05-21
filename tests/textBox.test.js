describe('textBill', function () {
    it('should return 2.75 if call is put in the text box', function () {
        assert.equal((2.75), calculateBtnClicked("call"))

    });
    it('should return 0.75 if sms is put in the text box', function () {
        assert.equal((0.75), calculateBtnClicked("sms"))

    });
    describe('use values for text Bill', function () {

        it("should be able to use the call cost set", function () {
            let billTypeText = textBill();

            billTypeText.theCallCost(2.25)
            billTypeText.theSmsCost(0.85);

            billTypeText.makeCall();
            billTypeText.makeCall();
            billTypeText.makeCall();

            assert.equal(8.25, billTypeText.getTotalCost());

        })

        it("should be able to use the sms cost set", function () {
            let billTypeText = textBill();

            billTypeText.theCallCost(2.25)
            billTypeText.theSmsCost(0.85);

            billTypeText.makeSms();
            billTypeText.makeSms();
            billTypeText.makeSms();

            assert.equal(2.25, billTypeText.getTotalCost());

        })
        describe(" warning level and critical level for text bill", function () {
            it("it should return a class name of 'warning' if warning level is reached", function () {
                let billTypeText = textBill();

                billTypeText.theCallCost(2.75);
                billTypeText.theSmsCost(0.75);
                billTypeText.setWarningLevel(20);


                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();

                assert.equal( billTypeText.totalClassName("warning"))

            })
            it("it should return a class name of 'critical' if critical level is reached", function () {
                let billTypeText = textBill();

                billTypeText.theCallCost(2.75);
                billTypeText.theSmsCost(0.75);
                billTypeText.setCriticalLevel(30);


                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();
                billTypeText.makeCall();


                assert.equal(billTypeText.totalClassName("critical"))

            })
        });
    });
});
