function MyEventEmitter(){
    var obj = {};
    obj.addListener = function(str, fnc){
       if (!Array.isArray(obj.events[str])){
           obj.events[str] = [];
       }
       obj.events[str].push({f:fnc, t:this.caller});
    }
    obj.emit = function(){
        const str = arguments[0];
        const data = [];
        for (let i = 1; i < arguments.length; i++){
            data.push(arguments[i]);
        }
        if (Array.isArray(obj.events[str])){
            for (let i = 0; i < obj.events[str].length; i++){
                obj.events[str][i].f.apply(obj.events[str][i].t, data);
            }
        }
    }
    obj.events = {};
    return obj;
}