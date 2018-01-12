function centuryFromYear(year) {
    var answer;
    if (year % 100 === 0) {
      answer = year/100;
    } else {
      answer = Math.floor((year/100)+1);
    }
      return answer;
  }
