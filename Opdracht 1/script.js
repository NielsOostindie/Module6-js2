//!hierboven staan alle initiële variabelen
let myName = "Niels";
let myAge = 17;
let myHairColor = "bruin";
let leeg = " ";
let zeven_7 = 7;
let nol = null;
let myBirthyear = 2006;

document.write("uitkomst van vraag 8.1: " + myAge * 1 + "<br>");
document.write("uitkomst van vraag 8.2: " + myAge * myBirthyear + "<br>");
document.write(
  "uitkomst van vraag 8.3: " + Math.ceil(myBirthyear / myAge) + "<br>"
);
document.write(
  "uitkomst van vraag 8.4: " + Math.max(myBirthyear, myAge) + "<br>"
);
document.write(
  "uitkomst van vraag 8.5: " + (myBirthyear / myAge).toFixed(2) + "<br>"
);
document.write("uitkomst van vraag 8.6: " + 2, 5 * 2, 5 + "<br>");
document.write("uitkomst van vraag 8.7: " + Math.sin(Math.PI * 2) + "<br>");
document.write("uitkomst van vraag 8.8: " + 12 / 0 + "<br>");
document.write("uitkomst van vraag 8.9: " + myAge * 2 + "<br>");
document.write("uitkomst van vraag 8.10: " + myAge * 2 + 1 + "<br>");
document.write("uitkomst van vraag 8.11: " + myAge * (2 + 1) + "<br>");
document.write("uitkomst van vraag 8.12: " + myAge++ + "<br>");
document.write("uitkomst van vraag 8.13: " + nol * 1 + "<br>");
document.write("<br>");
document.write("<br>");
document.write("ik ben een 'brave' student" + myName + "<br>");
document.write(myName.charAt(0) + "<br>");
document.write(myName.charAt(4) + "<br>");
document.write(myName + " " + myName + "<br>");
document.write(myName + " " + --myAge + "<br>");
document.write(myAge + " " + myName + "<br>");
document.write(myAge + myAge + "<br>");
document.write("<br>");
document.write("<br>");
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myArray.push(11);
document.write(myArray + "<br>");
myArray.reverse();
document.write(myArray + "<br>");
myArray.reverse();
myArray.pop();
document.write(myArray + "<br>");
myArray.splice(4, 2);
document.write(myArray + "<br>");
document.write("<br>");
document.write("<br>");
let myArrayLength = myArray.length;
document.write(myArrayLength + "<br>");

for (i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
  document.write(myArray[i] + "<br>");
}
document.write("<br>");
for (i = 0; i < myArray.length; i++) {
  if (myArray[i] == 3) {
    continue;
  }
  console.log(myArray[i]);
  document.write(myArray[i] + "<br>");
}
document.write("<br>");
for (i = 0; i < myArray.length; i++) {
  if (myArray[i] == 7) {
    document.write(myArray[i] + "<br>");
  }
  console.log(myArray[i]);
  document.write(myArray[i] + "<br>");
}
document.write("<br>");
for (i = 0; i < myArray.length; i++) {
  if (myArray[i] == 1) {
    myArray.splice(0, 1);
  }
  console.log(myArray[i]);
  document.write(myArray[i] + "<br>");
}

document.write("<br>");
for (i = 0; i < myArray.length; i++) {
  if (myArray[i] == 3) {
    myArray.splice(1, 1, "x");
  }
  console.log(myArray[i]);
  document.write(myArray[i] + "<br>");
}
document.write("<br>");
for (i = 0; i < myArray.length; i++) {
    myArray.splice(2, 1, "");
  console.log(myArray[i]);
  document.write(myArray[i] + "<br>");
}
document.write("<br>");
document.write("<br>");
function nee(){
    for(let temp = 0; temp < 10; temp++){
        document.write('nee')
    }
}

function ja(){
    document.write('ja');
}
function currency(waarden1, waarden2){
if(waarden1 == waarden2){
    return ja();
} else {
    return nee();
}
}
currency("dollar", "euro")


document.write("<br>");
function teller(waarden1, waarden2){
    if(waarden1 == waarden2){
        return ja();
    } else {
        return nee();
    }
}
teller("6", 6)
document.write("<br>");
function myNaam(waarden1, waarden2){
    if(waarden1 == waarden2){
        return ja();
    } else {
        return nee();
    }
}
myNaam("dit ben ik", myName)
document.write("<br>");
function whatIsMyName(waarden1, waarden2){
    if(waarden1 == waarden2){
        return ja();
    } else {
        return nee();
    }
}
whatIsMyName(myName, myName)
document.write("<br>");
document.write("<br>");
const date = new Date();
document.write(date);

const m = new Date();
let month = m.getMonth();
document.getElementById("month").innerHTML = month;

const d = new Date();
let day = d.getDate();
document.getElementById("day").innerHTML = day;