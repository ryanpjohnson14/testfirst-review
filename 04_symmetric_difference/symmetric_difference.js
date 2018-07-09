function difference(arr){
    var compareTwo = function(a,b){
        let res = [];
        for (let i = 0; i < a.length; i++){
            if (b.indexOf(a[i]) === -1){
                res.push(a[i]);
            }
        }
        for (let i = 0; i < b.length; i++){
            if (a.indexOf(b[i]) === -1){
                res.push(b[i]);
            }
        }
        return res;
    }

    var final = [];
    for (let i = 0; i < arr.length; i++){
        final = compareTwo(final, arr[i]);
    }
    return final;
}