function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let size = 0;
    let days = 0;
    while (size < desiredHeight) {
        days++;
        size += upSpeed;
        if (size < desiredHeight) {
            size -= downSpeed;
        }
    }
    return days;
}