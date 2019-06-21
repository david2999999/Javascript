// Another important thing to understand is that the object literal approach to creating prototype
// methods cannot be used with prototype chaining, because you end up overwriting the chain. Here’s
// an example:
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
//try to add new methods - this nullifi es the previous line
SubType.prototype = {
    getSubValue : function (){
        return this.subproperty;
    },
    
    someOtherMethod : function (){
        return false;
    }
};
var instance = new SubType();
alert(instance.getSuperValue()); //error!