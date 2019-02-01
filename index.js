function distanceFromHqInBlocks(pickup_block){
  const HQ_Block=42
  return Math.abs(HQ_Block-pickup_block)
}
function distanceFromHqInFeet(pickup_block){
  return distanceFromHqInBlocks(pickup_block)*264
}
function distanceTravelledInFeet(point_a,point_b){
  const BLOCK_LENGTH=264;return Math.abs(point_a-point_b)*BLOCK_LENGTH
}
function calculatesFarePrice(point_a, point_b){
  let distance=distanceTravelledInFeet(point_a,point_b)
  //First 400 are free
  //400-2000ft,2cents per foot
  //2000-2500ft,25 dollars
  
}