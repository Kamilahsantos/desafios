let lineheight = require ('./scripts/length_helper')

function BasicPart1 (text,linelength){
    let output ='';
    let position =0;
    let width = 0;
    while(position<text.length){
        width = lineheight.CalculateLineLength(text,position,lineheight);
        output = output + text.substr(position,width).trim()+"\n\n";
        position+=width;
    
    }

   return output;
}

let firstinput ='In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.';
 
let secondinput = 'And God said, "Let there be light," and there was light. God saw that the light was good, and he separated the light from the darkness. God called the light "day," and the darkness he called "night." And there was evening, and there was morning - the first day';

console.log(BasicPart1(firstinput, 40));
console.log(BasicPart1(secondinput, 40));
