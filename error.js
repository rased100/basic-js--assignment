// problem 1 - Start:

function seerToMon(seer) {

    // Errors
    if (typeof seer != 'number') {
        return 'Error: Please Enter a Number';
    }
    else if (seer < 0) {
        return 'Error: Please Enter a Positive Number';
    }

    const mon = seer / 40;
    return mon;
}

const inputSeer = 80;
const mon = seerToMon(inputSeer)
console.log(mon);

// problem 1 - End.

/*------------------------------------*/

// problem 2 - Start:

function totalSales(shartQuantity, pantQuantity, shoeQuantity) {

    // Errors
    if (typeof shartQuantity != 'number') {
        return 'Error: Please Enter a Number';
    }
    else if (typeof pantQuantity != 'number') {
        return 'Error: Please Enter a Number';
    }
    else if (typeof shoeQuantity != 'number') {
        return 'Error: Please Enter a Number';
    }

    else if (shartQuantity < 0) {
        return 'Error: Please Enter a Positive Number';
    }
    else if (pantQuantity < 0) {
        return 'Error: Please Enter a Positive Number';
    }
    else if (shoeQuantity < 0) {
        return 'Error: Please Enter a Positive Number';
    }

    // per pics price
    const perShartPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;

    // money calculation
    const shartTotalPrice = shartQuantity * perShartPrice;
    const pantTotalPrice = pantQuantity * perPantPrice;
    const shoeTotalPrice = shoeQuantity * perShoePrice;

    // total money
    const totalMoney = shartTotalPrice + pantTotalPrice + shoeTotalPrice;
    return totalMoney;

}

const myShoping = totalSales(3, 2, 1);
console.log(myShoping);


// problem 2 - End.

/*-----------------------------------------------------------------------*/

// problem 3 - Start:

function deliveryCost(delevary) {

    // Error
    if (typeof delevary != 'number') {
        return 'Error: Please Enter a Number';
    }
    else if (delevary < 0) {
        return 'Error: Please Enter a Positive Number';
    }

    const first100Delevary = 100;
    const hundredPlusTo200Delevary = 80;
    const twohundredPlusToMaxDelevary = 50;
    if (delevary <= 100) {
        const deliveryCost = delevary * first100Delevary;
        return deliveryCost;
    }
    else if (delevary <= 200) {
        const firstDeliveryCost = 100 * first100Delevary;
        const restDelevary = delevary - 100;
        const secondDeliveryCost = restDelevary * hundredPlusTo200Delevary;
        const totalDeliveryCost = firstDeliveryCost + secondDeliveryCost;
        return totalDeliveryCost;
    }
    else {
        const firstDeliveryCost = 100 * first100Delevary;
        const secondDeliveryCost = 100 * hundredPlusTo200Delevary;
        const restDelevary = delevary - 200;
        const restDeliveryCost = restDelevary * twohundredPlusToMaxDelevary;
        const totalDeliveryCost = firstDeliveryCost + secondDeliveryCost + restDeliveryCost;
        return totalDeliveryCost;
    }
}

const totalCost = deliveryCost(100);
console.log(totalCost);

// problem 3 - End.

/*-----------------------------------------------------------------------*/

// problem 4 - Start:

const names = ['Rasedul', 'Fahim', 'Emon', 'Tusar', 'Shamim', 'Jubayer', 'Sourov', 'Ismil'];

function perfectFriend(names) {
    const perfect = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];

        // Error
        if (typeof element != 'string') {
            return 'Error: Please Enter a Name (string).';
        }
        // Perfect Friends
        if (element.length == 5) {
            perfect.push(element)
        }
    }
    return perfect;
}

const perfectFriendNames = perfectFriend(names);
console.log(perfectFriendNames);

// problem 4 - End.


