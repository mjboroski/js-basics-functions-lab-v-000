function distanceFromHqInBlocks(street){
  return Math.abs(street - 42)
}

function distanceFromHqInFeet(street){
  return 264 * distanceFromHqInBlocks(street)
}

function distanceTravelledInFeet(start, destination){
  return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination);
  switch (distance){
    case (distance <= 400):
      return 0;
    case (distance > 400 && distance <= 2000):
      return (distance - 400) * .02;
    case (distance > 2000 && distance < 2500):
      return 25;
    default:
      return 'cannot travel that far';
  }
}
