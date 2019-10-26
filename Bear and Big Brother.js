var limakWeight = 4;
var bobWeight = 7;
var limakYearIncrement = 3; //3 times
var bobYearIncrement = 2; //2 times
var years = 0;

while(limakWeight <= bobWeight) {
    ++years;
    limakWeight *= limakYearIncrement;
    bobWeight *= bobYearIncrement;
}

// Answer must be 2 for these given weight
console.log(years); 