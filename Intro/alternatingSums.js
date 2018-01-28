function alternatingSums(a) {
    let group1 = [];
    let group2 = [];

    if (a.length > 1) {
        // Separating two groups using the index
        for (let i = 0; i < a.length; i++) {
            if (i % 2 === 0) {
                group1.push(a[i]);
            } else {
                group2.push(a[i]);
            }
        }
        // Sum all the weights for each group  
        group1 = group1.reduce((acc, cur) => acc + cur);
        group2 = group2.reduce((acc, cur) => acc + cur);

        return [group1, group2];

    } else {
        return [...a, 0]
    }

}