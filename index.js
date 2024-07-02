// Code your solution in this file!
function distanceFromHqInBlocks(setLocation) {
    const hqLocation = 42;
    return Math.abs(setLocation - hqLocation);
  }

  function distanceFromHqInFeet(setLocation){
    const blocks = distanceFromHqInBlocks(setLocation);
    const feetperBlock = 264;
    return blocks * feetperBlock;
  }

  function distanceTravelledInFeet(start, destination){
    const blocksTravelled = Math.abs(destination - start);
    const feetperBlock = 264;
    return blocksTravelled * feetperBlock;
  }

  function calculatesFarePrice( start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
  }

  