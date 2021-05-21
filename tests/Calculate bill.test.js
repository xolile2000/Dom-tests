describe('calculateBtnClicked' , function(){
    it('return the total of the string enterned on the text area ' , function(){
        assert.equal((7.75),calculateBtnClicked("call, sms, call, sms, sms"))

    });

    it('call should equal 2.75' , function(){
        assert.equal((2.75),calculateBtnClicked("call"))

    });

    it(' sms should equal 0.75' , function(){
        assert.equal((0.75),calculateBtnClicked("sms"))

    });

});