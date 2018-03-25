//网易()
(function () {
    var line;
    while(line = readline()){
        var lineArr = line.split("");
        var lineArrLen = lineArr.length;
        var lastChar = "";
        var lastNum = 0;
        var resultNum = [];
        for(var i=0;i<lineArrLen;i++) {
            if(i===0){
                lastChar = lineArr[i];
                lastNum = 1;
                continue;
            }
            var currentChar = lineArr[i];
            if(currentChar===lastChar){
                lastNum++;
            }
            else{
                resultNum.push(lastNum);
                lastChar=currentChar;
                lastNum = 1;
            }
        }
        if(lastNum!==0){
            resultNum.push(lastNum);
        }
        var resultTotal = 0;
        resultNum.forEach(function(v){
            resultTotal += parseInt(v);
        });
        var resultAve = resultTotal/resultNum.length;
        var resultAtLast = resultAve.toFixed(2);
        print(resultAtLast);
    }
})();
//网易(魔法币)
(function(){
    var line;
    while(line = readline()){
        var currentLine = parseInt(line);
        var result = [];
        while(currentLine!==0){
            if(currentLine%2===0){
                result.unshift(2);
                currentLine -= 2;
                currentLine /= 2;
            }
            else {
                result.unshift(1);
                currentLine -= 1;
                currentLine /= 2;
            }
        }
        var resultOutput = "";
        result.forEach(function(v){
            resultOutput += v;
        });
        print(resultOutput);
    }
})();
//网易（相反数）
(function () {
    var line;
    while(line = readline()){
        var currentLine = line;
        var currentLineArr = line.split("");
        currentLineArr.reverse();
        var currentLineNum = parseInt(currentLine);
        var currentLineReverse = currentLineArr.join("");
        var currentLineReverseNum = parseInt(currentLineReverse);
        print(currentLineNum+currentLineReverseNum);
    }
})();
//网易（DFS）60%
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