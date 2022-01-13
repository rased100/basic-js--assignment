const names = ['Rasedul', 'Fahim', 'Emon', 'Tusar', 'Shamim', 'Jubayer', 'Sourov', 'Ismil'];

function perfectFriend(names) {
    const perfect = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        // console.log(element);
        if (element.length == 5) {
            perfect.push(element)
        }
    }
    return perfect;
}

const perfectFriendNames = perfectFriend(names);
console.log(perfectFriendNames);