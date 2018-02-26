function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

    const you = [yourLeft, yourRight];
    const friend = [friendsLeft, friendsRight];

    return (you.reduce((acc, cur) => acc + cur) === friend.reduce((acc, cur) => acc + cur) && you.reduce((acc, cur) => acc * cur) === friend.reduce((acc, cur) => acc * cur));
}