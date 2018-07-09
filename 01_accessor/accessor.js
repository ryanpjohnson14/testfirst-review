function accessor(obj){
    var inner = function(key, value){
        if (arguments.length === 1){
            return obj[key];
        } else if (arguments.length === 2){
            obj[key] = value;
        }
    }
    return inner;
}