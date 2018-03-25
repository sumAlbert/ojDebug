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
