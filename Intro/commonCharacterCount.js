function commonCharacterCount(s1, s2) {
    var count =0;
    s1 = Array.from(s1);
    s2 = Array.from(s2);
    
    for (var i=0; i<s1.length; i++){
        for (var j=0; j<s2.length; j++){
            if (s1[i] === s2[j]){
                count++;
                delete s2[j];
                break;
                
            }
        }
    }
    return count;
}
