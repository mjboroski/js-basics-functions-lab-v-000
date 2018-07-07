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

}
