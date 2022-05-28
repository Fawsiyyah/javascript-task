var head = document.getElementById("heading");
var text = document.createTextNode("TEAM HERMES");
head.appendChild(text);

document.getElementById("container").style.backgroundColor ="coral";
document.getElementById("heading").style.color = "blue";
document.getElementById("lists").style.color = "blue";

const teamMates = ["Code Giyu", "Natacha", "Adedamola", "Fawsiyyah", "Dee Vee", "Ifechukwude", "Michael"];
console.log(teamMates[3]);

const about = {
    "First name": "Fawsiyyah",
    "Last name": "Lamidi",
    "Best movie": "Blood and Water",
    "Best food": "Noodles",
    "Complexion": "Fair",
    "State": "Osun",
    "Group name": "Team Hermes"
};
console.log(about["Best movie"]);

var noun = " Tolu ";
var verb = " sings ";
var adjective = " beautiful ";
const firstSentence = noun + "is" + adjective + ".";
const secondSentence = noun + verb + "beautifully.";
const thirdSentence = "Adam" + verb + "with" + adjective + noun +".";
const fourthSentence = "Ada" + " and" + noun + "are" + adjective + ".";
const fifthSentence = noun + verb + "like an angel.";

console.log(firstSentence);
console.log(secondSentence);
console.log(thirdSentence);
console.log(fourthSentence);
console.log(fifthSentence);

function remainder(a,b) {
    return a%b;
}

console.log(remainder(35,6));

function almightyQuadraticFormula(a,b,c){
    var discriminant = Math.pow(b,2)- 4 * a*c;
    let rootOne = (-1* b + Math.sqrt(discriminant)) / 2 * a ;
    let rootTwo = (-1* b - Math.sqrt(discriminant)) / 2 * a ;

    let answer = "The roots of your quadratic equation are " + rootOne + " and " + rootTwo + ".";
    return answer;
}
console.log(almightyQuadraticFormula(2,-3,1));

const myNoun = " dog ";
const myAdjective = " big ";
const myVerb = " ran ";
const myAdverb = " quickly ";
 
const wordBlanks = "The" + myAdjective + myNoun + myVerb + myAdverb + "across the road.";
console.log(wordBlanks); 

const pi = 3.142;
function area(pi, r) {
    return pi * r * r;
}
console.log(area(pi,9));

var p = 8200;
var r = 17.5;
var t = 2.5;
console.log(p*r*t/100);

var meritHeight = 1.69;
var meritWeight = 78;
var nutjobHeight = 1.95;
var nutjobWeight = 92;
let meritBmi = meritWeight /(meritHeight * meritHeight);
let nutjobBmi = nutjobWeight /(nutjobHeight * nutjobHeight);
console.log(meritBmi);
console.log(nutjobBmi);

var meritHeighttwo = 1.76;
var meritWeighttwo = 85;
var nutjobHeighttwo = 1.88;
var nutjobWeighttwo = 95;
let meritBmitwo = meritWeighttwo /(meritHeighttwo * meritHeighttwo);
let nutjobBmitwo = nutjobWeighttwo /(nutjobHeighttwo * nutjobHeighttwo);
console.log(meritBmitwo);
console.log(nutjobBmitwo);

