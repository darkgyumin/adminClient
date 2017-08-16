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

    //기존 Class를 삭제하고 Class 추가
    lib.initAddClass = function(elem, className) {
        elem.forEach((elem) => {
            //기존 Class 삭제
            let classList = Array.prototype.slice.apply(elem.classList);

            classList.forEach((className) => {
                elem.classList.remove(className);
            });
            //기존 Class 삭제

            let arrClassName = className.split(' ');
            
            arrClassName.forEach((className) => {
                this.addClass(elem, className);
            });
        });
    };

    //Class 적용
    lib.addClass = function(elem, className) {
        elem.classList.add(className);
    };

    return lib;
}));