function sometimes(fnc){
    var timesCalled = 0;
    var inner = function(){
        timesCalled++;
        if (timesCalled > 3){
            if (timesCalled % 2 === 0){
                return 'I do not know!';
            }
        }
        return fnc.apply(null, arguments);
    }
    return inner;
}