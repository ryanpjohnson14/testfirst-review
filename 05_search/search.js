function search(arr, fnc){
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            if (search(arr[i], fnc)){
                return true;
            }
        } else if (fnc.call(null, arr[i])){
            return true;
        }
    }
    return false;
}