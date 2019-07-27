let arrayShuffle = require ('./scripts/arrayshuffle')

let lengthhelper = require ('./scripts/length_helper')

function IntermediatePart2 (text,linelength){
    let output ='';
    let position =0;
    let width = 0;

    while(position <text.length){
        width =lengthhelper.CalculateLineLength(text,position,linelength);
        output = output + JustifyContent (text.substr(position,width).trim(),width)+"\n";
        position +=width;
    }
    return output;
}

function JustifyContent (text,linelength){
    let size = text.length;

    if (size ==linelength){
        return text;
    }

let words = text.split('');

let RequiredSpaces = linelength-text.replace(/\s/g,'').length;

let SpacesWords = Math.floor(RequiredSpaces/(words.length-1));

let ExtraSpaces = RequiredSpaces % (words.length-1);

let Spaces = CreateArrayOfSpaces (words.length-1,SpacesWords,ExtraSpaces);

let output='';

for (let i=0;i<words.length;i++){
    output+=words[i]+(i<words.length-1 ?spaces[i]:'');

   }
   return output;

}

function CreateArrayOfSpaces (linelength,spaces,ExtraSpaces){
    let SpaceArray=[];
    let index =[];

    for (let i=0;i<linelength;i++){
        if (i<linelength-1){
            index.push(i);
        }
        SpaceArray.push(''.repeat(spaces));
    }

    for (let i=0;i<ExtraSpaces;i++){
        SpaceArray[index[i]]+='';
    }

    return SpaceArray;

}

let firstinput ='In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters.';

let secondinput = 'And God said, "Let there be light," and there was light. God saw that the light was good, and he separated the light from the darkness. God called the light "day," and the darkness he called "night." And there was evening, and there was morning - the first day';


console.log(IntermediatePart2 (firstinput, 40));


console.log(IntermediatePart2 (secondinput, 40));