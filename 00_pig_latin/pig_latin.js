function translate (input){
    var vowels =['a','e','i','o','u'];

    if (vowels.indexOf(input[0]) !== -1){ //first is found in vowels
        return input + 'ay';
    } else { //consonant in first index
        var fc = '';
        while (vowels.indexOf(input[0] === -1)){
            fc += input.substr(0,1);
            input = input.substr(1);
        }
        return input + fc + 'ay';
    }
}