(function () {
    var line;
    while(line=readline()){
        var lineArr = line.split(" ");
        var routeInfoLine = readline();
        var routeInfoLineArr = routeInfoLine.split(" ");
        var n = lineArr[0];
        var l = lineArr[1];
        var routes = [];
        var saveStack = [];
        var resultAtLast = 0;
        var resultMax = 1;
        for(var i = 0;i<n;i++){
            saveStack[i] = 0;
        }
        for(var i=1;i<n;i++){
            var targetCity = parseInt(routeInfoLineArr[i-1]);
            if(routes[i]==null){
                routes[i]=[];
            }
            if(routes[targetCity]==null){
                routes[targetCity]=[];
            }
            routes[i].push(targetCity);
            routes[targetCity].push(i);
        }
        DFS(0,parseInt(l)+1);
        print(resultMax);
    }

    function DFS(currentCity,left){
        if(left===0){
            resultAtLast = 0;
            saveStack.forEach(function(v){
                if(v!=0){
                    resultAtLast++;
                }
            });
            if(resultMax<resultAtLast){
                resultMax=resultAtLast;
            }
            return null;
        }
        saveStack[currentCity] = saveStack[currentCity] + 1;
        var currentRouteInfo = routes[currentCity];
        for(var i=0;i<currentRouteInfo.length;i++){
            DFS(currentRouteInfo[i],left-1);
        }
        saveStack[currentCity] = saveStack[currentCity] - 1;
    }
})();