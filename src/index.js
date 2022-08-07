module.exports = function reverse (n, r = 0) {
    var x = Math.abs(n)
    if(!x) return r;
    r =  r * 10  + x % 10;
    return reverse(Math.floor( x / 10), r);
    
    
}

