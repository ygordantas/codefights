function shapeArea(n) {
    var area =1;
    var lastArea = 1; // when n = 1
    if (n === 1){
        lastArea = 1;
    } else {
        for (var i = 2; i <= n; i++){
            area = lastArea + ((i-1) * 4);
            lastArea = area;
        }
  } 
    return lastArea;
}