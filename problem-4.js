const names = ['rased', 'emon', 'tusar', 'shamim', 'jubayer', 'sourov', 'ismil'];

function perfectFriend(names) {
    const friend = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     // console.log(element);
    // }
    for (const element of names) {
        console.log(element);
    }
}

const friendsName = perfectFriend(names);
console.log(friendsName);