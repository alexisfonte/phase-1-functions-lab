// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation){
    const numberOfBlocks = 42 - pickupLocation;
    if (numberOfBlocks >= 0) {
        return numberOfBlocks;
    } else {
        return (numberOfBlocks * -1);
    }
}

function distanceFromHqInFeet(pickupLocation){
    return (264 * distanceFromHqInBlocks(pickupLocation));
}

function distanceTravelledInFeet(startBlock, destinationBlock){
    const blockDistance = startBlock - destinationBlock;
    let distanceTravelled;
    if (blockDistance >= 0){
        distanceTravelled = blockDistance;
    } else {
        distanceTravelled = (blockDistance * -1);
    }
    return (distanceTravelled * 264);
}

function calculatesFarePrice(start, end){
    const distance = distanceTravelledInFeet(start, end);
    let fare;
    if (distance <= 400){
        fare = 0;
    } else if(distance > 400 && distance <= 2000){
        fare = ((distance - 400) * 0.02);
    } else if(distance > 2000 && distance <= 2500){
        fare = 25;
    } else if(distance > 2500){
        fare = 'cannot travel that far';
    }
    return fare;
}