var application = function(){
    //private variables and functions
    var components = new Array();
    //initialization
    components.push(new BaseComponent());

    //public interface
    return {
        getComponentCount : function(){
            return components.length;
        },
        registerComponent : function(component){
            if (typeof component == “object”){
                components.push(component);
            }
        }
    };
}();

// In web applications, it’s quite common to have a singleton that manages application-level
// information. This simple example creates an application object that manages components.
// When the object is fi rst created, the private components array is created and a new instance of
// BaseComponent is added to its list. (The code for BaseComponent is not important; it is used only
// to show initialization in the example.) The getComponentCount() and registerComponent()
// methods are privileged methods with access to the components array. The former simply returns the
// number of registered components, and the latter registers a new component.
//
// The module pattern is useful for cases like this, when a single object must be created and
// initialized with some data and expose public methods that have access to private data. Every
// singleton created in this manner is an instance of Object, since ultimately an object literal
// represents it. This is inconsequential, because singletons are typically accessed globally instead of
// passed as arguments into a function, which negates the need to use the instanceof operator to
// determine the object type.