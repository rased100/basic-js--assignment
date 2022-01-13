function deliveryCost(delevary) {
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