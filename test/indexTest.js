function scuberGreetingForFeet[feet]{
  if (feet<=400){return "this one is on me!";
}
else if(1999 < feet && feet <2500){
  return "i will gladly take your thirty bucks."; 
} else {return "No can do." }
}
scuberGreetingForFeet(feet);

function ternaryCheckCity[city]{
  return city==="NYC"?"ok, sounds good.":"No global,";
}
ternaryCheckCity(city);

function switchOnCharmFromTip(tip){
  switch(tip){
    case tip "generous";
    return "Thank you soo much."
    break;
    case tip "not as generous";
    return "Thank you."
    break;
    default:
    return "Bye."
  }
}
  describe('switchOnCharmFromTip()', function () {
    it('should return "Thank you so much." if the tip is generous', function () {
      expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
    });

    it('should return "Thank you." if the tip is not as generous', function () {
      expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
    });

    it('should return "Bye." if anything else', function () {
      expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
    });
  });
});
