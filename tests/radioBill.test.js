describe('radio bill', function () {
    it('should return 2.75 if call is selected', function () {
        assert.equal((2.75), calculateBtnClicked("call"))

    });
    it('should return 0.75 if sms is put selected', function () {
        assert.equal((0.75), calculateBtnClicked("sms"))

    });
    describe('use values for radio bill', function () {

        it("should be able to use the call cost set", function () {
            let radiobtn = radioBill();

            radiobtn.theCallCost(2.25)
            radiobtn.theSmsCost(0.85);

            radiobtn.makeCall();
            radiobtn.makeCall();
            radiobtn.makeCall();
            radiobtn.makeCall();

            assert.equal(11, radiobtn.getTotalCost());

        })

        it("should be able to use the sms cost set", function () {
            let radiobtn = radioBill();

            radiobtn.theCallCost(2.25)
            radiobtn.theSmsCost(0.85);

            radiobtn.makeSms();
            radiobtn.makeSms();
            radiobtn.makeSms();
            radiobtn.makeSms();

            assert.equal(3, radiobtn.getTotalCost());

        })
        describe(" warning level and critical level for radio bill", function () {
            it("it should return a class name of 'warning' if warning level is reached", function () {
                let radiobtn = radioBill();

                radiobtn.theCallCost(2.75);
                radiobtn.theSmsCost(0.75);
                radiobtn.setWarningLevel(20);


                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();

                assert.equal(radiobtn.totalClassName("warning"))

            })
            it("it should return a class name of 'critical' if critical level is reached", function () {
                let radiobtn = radioBill();

                radiobtn.theCallCost(2.75);
                radiobtn.theSmsCost(0.75);
                radiobtn.setCriticalLevel(30);


                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();
                radiobtn.makeCall();

                assert.equal(radiobtn.totalClassName("critical"))

            })
        });
    });
});