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
            result = elem[0];
        } else {
            if(typeof elem === 'object') {
                elem = Object.keys(elem).map((key) => elem[key]);
            }
            console.log(elem);
            result = elem;
        }
        
        return result;
    };

    return lib;
}));