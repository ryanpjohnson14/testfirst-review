function rotater(str){
    var reverse = false;
    var res = function(n){
        if (n < str.length){
            if (reverse){
                let move = str.substr(-n);
                return move + str.substr(0, str.length-n);
            }
            let move = str.substr(0,n);
            return str.substr(n) + move;
        } else {
            reverse = !reverse;
            return str;
        }
    }
    return res;
}