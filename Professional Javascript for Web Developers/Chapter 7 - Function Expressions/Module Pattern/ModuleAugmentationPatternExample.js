// If the application object in the module pattern example had to be an instance of BaseComponent,
//     the following code could be used:
var application = function(){
    //private variables and functions
    var components = new Array();

    //initialization
    components.push(new BaseComponent());

    //create a local copy of application
    var app = new BaseComponent();
    //public interface
    app.getComponentCount = function(){
        return components.length;
    };

    app.registerComponent = function(component){
        if (typeof component == 'object'){
            components.push(component);
        }
    };
    //return it
    return app;
}();