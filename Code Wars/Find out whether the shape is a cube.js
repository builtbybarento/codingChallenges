Find out whether the shape is a cube 

function cubeChecker(volume, side){
  return side>0 && volume> 0? side*side*side === volume : false
};