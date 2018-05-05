function depositProfit(deposit, rate, threshold) {
    let years = 0;
    rate = (rate / 100) + 1;
    while (deposit < threshold) {
        deposit *= rate;
        years++;
    }
    return years;
}