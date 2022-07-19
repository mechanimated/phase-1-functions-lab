// Code your solution in this file!
const hq = 42;

function distanceFromHqInBlocks(pickup) {
    let blocks = pickup - hq;
    blocks = Math.abs(blocks);
    return blocks;
}

function distanceFromHqInFeet(pickup) {
    let blocks = pickup - hq;
    blocks = Math.abs(blocks);
    let feet = blocks * 264;
    return feet;
}

function distanceTravelledInFeet(pickup, dropoff) {
    let feet = (Math.abs(pickup - dropoff)) * 264;
    return feet;
}

function calculatesFarePrice(pickup, dropoff) {
    let feet = (Math.abs(pickup - dropoff)) * 264; 
    if (feet < 400) {
        let fare = 0;
        return fare;
    }
    else if (feet > 399 && feet < 2001) {
        let fare = (feet - 400) * .02;
        return fare;
    }
    else if (feet > 2000 && feet < 2501) {
        let fare = 25;
        return fare;
    }
    else {
        return 'cannot travel that far';
    }
}