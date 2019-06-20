function idGen( start ) {
    var id = start;
    return function() {
        return id++;
    }
}
var idGenerator = idGen(0);


//then within the function
var id = idGenerator();