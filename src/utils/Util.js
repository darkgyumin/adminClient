(function(root, factory) {
    if(typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = factory();
    } else {
        var obj = (root.$min === undefined) 
                    ? factory() : Object.assign(root.$min, factory());
        root.$min = obj;
    }
}(this, function() {
    var lib = {};

    //Element 선택
    lib.isEmpty = function(value) {
        if( value == "" || 
            value == null || 
            value == undefined || 
            ( value != null && typeof value == "object" && 
                !Object.keys(value).length ) ) { 
            return true 
        } else { 
            return false 
        }
    };

    return lib;
}));