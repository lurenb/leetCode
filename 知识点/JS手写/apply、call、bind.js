Function.prototype.myapply = function(thisArg,args){
    var fn = this
    thisArg = thisArg?Object(thisArg):window
    thisArg.fn = fn
    args = args || []
    var res = thisArg.fn(...args)
    delete thisArg.fn
    return res
}

Function.prototype.mycall = function(thisArg,...args){
    var fn = this
    thisArg = thisArg? Object(thisArg):window
    thisArg.fn = fn
    var res = thisArg.fn(...args)
    delete thisArg.fn
    return res
}

Function.prototype.mybind = function(thisArg,...args){
    var fn = this
    thisArg = thisArg? Object(thisArg): window
    return function(...arg){
        thisArg.fn = fn
        var finalArgs = [...args,...arg]
        var res = thisArg.fn(...finalArgs)
        delete thisArg.fn
        return res
    }
}