function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map((el, i, a) => el === elemToReplace ? a[i] = substitutionElem : a[i] = el);
}
