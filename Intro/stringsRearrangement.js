function stringsRearrangement(inputArray) {

    // Helper functions 

    differExactlyByOneChar = (arr) => { //is going to receive an array of strings as argument

        const hold = [];

        for (let i = 0; i < arr.length - 1; i++) {
            let differentLetters = 0;
            for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] !== arr[i + 1][j]) {
                    differentLetters++;
                }
            }
            hold.push(differentLetters);
        }
        return hold;
    };

    // Heap's method to generate all permutations
    permutation = (arr) => {
        let combinations = [
            [...arr]
        ];
        let placeHolderArr = new Array(arr.length).fill(0);
        let i = 1,
            k, p;

        while (i < arr.length) {
            if (placeHolderArr[i] < i) {
                k = i % 2 && placeHolderArr[i];
                p = arr[i];
                arr[i] = arr[k];
                arr[k] = p;
                placeHolderArr[i]++;
                i = 1;
                combinations.push([...arr]);
            } else {
                placeHolderArr[i] = 0;
                i++;
            }
        }
        return combinations;
    };

    const combinations = permutation(inputArray);

    let numberOfDifferentCharForEachCombination = combinations.map(el => differExactlyByOneChar(el));


    return numberOfDifferentCharForEachCombination.some(el => el.every(e => e === 1));
}
