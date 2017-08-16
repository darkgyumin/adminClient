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
    lib.selector = function(selector) {
        let elem = document.querySelectorAll(selector);
        let result;

        if(elem.length === 0) {
            result = null;
        } else if(elem.length === 1) {
            elem = Object.keys(elem).map((key) => elem[key]);
            result = elem;
        } else {
            elem = Object.keys(elem).map((key) => elem[key]);
            result = elem;
        }        
        
        return result;
    };

    lib.on = function(elem, event, callback) {
        elem.forEach((elem) => {
            elem.addEventListener(event, callback);
        });
    }

    return lib;
}));