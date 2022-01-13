function animalCount(miles) {
    const animaleDensityFirst10Miles = 10;
    const animaleDensitySecond10Miles = 50;
    const animaleDensityRestMiles = 100;
    if (miles <= 10) {
        const count = miles * animaleDensityFirst10Miles;
        return count;
    }
    else if (miles <= 20) {
        const firstDenseAnimals = 10 * animaleDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animaleDensitySecond10Miles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else {
        const firstDenseAnimals = 10 * animaleDensityFirst10Miles;
        const secondDenseAnimals = 10 * animaleDensitySecond10Miles;
        const restMiles = miles - 20;
        const restDenseAnimals = restMiles * animaleDensityRestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
        return totalAnimals;
    }
}

const animals = animalCount(25);
console.log(animals);