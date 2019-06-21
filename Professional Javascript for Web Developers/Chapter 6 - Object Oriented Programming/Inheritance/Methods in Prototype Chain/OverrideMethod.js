// Often a subtype will need to either override a supertype method or introduce new methods that
// don’t exist on the supertype. To accomplish this, the methods must be added to the prototype after
// the prototype has been assigned. Consider this example:
function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function(){
    return this.property;
};

function SubType(){
    this.subproperty = false;
}

//inherit from SuperType
SubType.prototype = new SuperType();
//new method
SubType.prototype.getSubValue = function (){
    return this.subproperty;
};

//override existing method
SubType.prototype.getSuperValue = function (){
    return false;
};
var instance = new SubType();
alert(instance.getSuperValue()); //false