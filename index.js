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
  let output;
  switch (distance){
    case (distance <= 400):
      output = 0;
      break;
    case (distance > 400 && distance <= 2000):
      output = (distance - 400) * .02;
      break;
    case (distance > 2000 && distance < 2500):
      output = 25;
      break;
    case (distance > 2500):
      output = 'cannot travel that far';
      break;
  }
  return output;
}
