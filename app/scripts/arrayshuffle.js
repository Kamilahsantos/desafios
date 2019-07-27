module.exports.arrayshuffle = function(array) {
    
    var presentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== presentIndex ) {
  
      randomIndex = Math.floor(Math.random() * presentIndex);
      presentIndex -= 1;
  
      temporaryValue = array[presentIndex];
      array[presentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }