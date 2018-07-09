function filter(arr, fnc){
    var res = [];
    for (var i = 0; i < arr.length; i++){
        if (fnc(arr[i])){
            res.push(arr[i]);
        }
    }
    return res;
}