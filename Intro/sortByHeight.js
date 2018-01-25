function sortByHeight(a) {
    // Get the idx of -1 from a.

    var indices = []; // Indices will hold the index values of -1.
    var element = -1;

    var idx = a.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = a.indexOf(element, idx + 1); // idx + 1 means that is gonna start the search after the first occurence of the element.      
    }
    // Removing -1 from a backwards. So it does not mess up the length.
    for (var i = indices.length - 1; i >= 0; i--) {
        a.splice(indices[i], 1)
    }

    // Ascending order
    a.sort((x, y) => x - y);

    // Adding -1 back on the original position.
    for (var j = 0; j < indices.length; j++) {
        a.splice(indices[j], 0, -1)
    }

    return a;
}