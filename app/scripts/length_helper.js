exports.CalculateLineLength = function(text, position, linelength) {
    if(position + linelength >= text.length) {
      return text.length - position;
    }
  
    let i = position + linelength + 1;
  
    while(i >= 0 && text[i] != ' ') {
      i--;
    }
  
    return i - position;
  }