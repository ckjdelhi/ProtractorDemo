describe('Protractor Demo App', ()=> {
   var testData=[{"x":1,"y":1,"sum":3},{"x":2,"y":2,"sum":4}];

    it('should have a title', ()=> {
      browser.get('http://juliemr.github.io/protractor-demo/');
      expect(browser.getTitle()).toEqual('Super Calculator');
    });
    for( var i in testData){
      it('should test add function', ()=>{
        expect(testData[i].x+testData[i].y).toEqual(testData[i].sum);
      });
    }
  });