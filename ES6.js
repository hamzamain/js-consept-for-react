const products = ["a", "ab", "c", "ad", "d", "ae", "e"];
const newProducts = products.filter((p) => !p.includes("a"));
// console.log(newProducts);
const money = 80;
const isDadHome = true;
let food = money > 100 ? "biryani" : "cha biscut";
// console.log(food);

//this bottom code will return the value of snakes;
let snakes = money < 100 && isDadHome === true ? "cha biscut" : "biriyani";
// console.log(snakes);
const moneyStr = money + "";
// console.log(moneyStr);
const realMoney = +moneyStr;
// console.log(realMoney);

const kader = [1, 2, 3, 4, 5, 6, 7];
const siddique = kader + "";
// console.log(siddique);
const kaderAgain = +siddique;
// console.log(kaderAgain);
// console.log(kader);
const number = 80 + +"5";
// console.log(number);
let isActive = false;
const showUser = () => console.log("show user");
const hideUser = () => console.log("hide user");

//this bottom code will not return something;
!isActive ? showUser() : hideUser();
const name = "abdul gofur";

//if left side is true showUser() exicuted . if not hide user will exicuted
!name.includes("abdul") ? showUser() : hideUser();

// use && if left side is true right side will exicuted;
isActive && showUser();
// use || if left side is false then rigth side will exicuted;
isActive || showUser();

//toggole boolean;
isActive = !isActive;
console.log(isActive);

const isTrue = false;
const showHand = () => console.log("hello");
const donotShowHand = () => console.log("world");
isTrue && showHand();
isTrue && isActive ? showHand() : donotShowHand();
