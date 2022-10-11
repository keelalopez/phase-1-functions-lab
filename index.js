// Code your solution in this file!
function distanceFromHqInBlocks (pickUp) {
    let numberOfBlocks = Math.abs(pickUp - 42);
    return numberOfBlocks;
  };

function distanceFromHqInFeet (blocksToFeet) {
  let blockDifferenceResult = distanceFromHqInBlocks(blocksToFeet);
  let totalFeet = blockDifferenceResult * 264;
  return totalFeet;
};

function distanceTravelledInFeet (start, destination) {
    let absoluteDistance = Math.abs(destination - start)* 264; 
    return absoluteDistance;
};

function calculatesFarePrice (start, destination) {
    let totalFeet = distanceTravelledInFeet(start, destination);

    if (totalFeet <= 400) return 0;
    if (totalFeet > 400 && totalFeet <= 2000) return (totalFeet-400)*0.02;
    if (totalFeet > 2000 && totalFeet < 2500) return 25;
    return 'cannot travel that far';
};



  console.log(calculatesFarePrice(1, 10));