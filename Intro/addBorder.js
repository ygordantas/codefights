function addBorder(picture) {
    let size = picture[0].length + 2;
    let border = "*".repeat(size);
    let withBorder = picture.map(el => `*${el}*`);
    return [border, ...withBorder, border];

}