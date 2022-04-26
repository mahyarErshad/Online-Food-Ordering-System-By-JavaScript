'use strict';
// for calculating total price of normal burger
// first we catch everything we need to change in the functions
let normalBurger = document.getElementById("normalBurger");
let normalBurgerTotal = document.getElementById("normalBurgerTotal");
const normalBurgerPlus = document.getElementById("normalBurgerPlus");
const normalBurgerMinus = document.getElementById("normalBurgerMinus");
let normalBurgerCounter = 0;
// price is the price we know. cost is the price * counter
let normalBurgerPrice = 8000;
let normalBurgerCost = 0;
// function for adding items to the cart
/*
 we plus or minus the counter by each click and calculate the price and print the result at the moment
 by calling print function
*/
normalBurgerPlus.addEventListener("click" , ()=>{
    normalBurgerCounter++;
    normalBurgerCost = normalBurgerCounter * normalBurgerPrice;
    normalBurger.innerText = normalBurgerCounter;
    normalBurgerTotal.innerText = (normalBurgerCost) +" " + "تومان";
    printOutput();
});
// function for removing items from the cart
normalBurgerMinus.addEventListener("click" , ()=>{
    if(normalBurgerCounter > 0){
        normalBurgerCounter--;
        normalBurgerCost = normalBurgerCounter * normalBurgerPrice;
        normalBurger.innerText = normalBurgerCounter;
        normalBurgerTotal.innerText = (normalBurgerCost) +" "+ "تومان"
        printOutput();
}});
// for calculating total price of special burger
let specialBurger = document.getElementById("specialBurger");
let specialBurgerTotal = document.getElementById("specialBurgerTotal");
const specialBurgerPlus = document.getElementById("specialBurgerPlus");
const specialBurgerMinus = document.getElementById("specialBurgerMinus");
let specialBurgerCounter = 0;
let specialBurgerPrice = 10000;
let specialBurgerCost = 0;
specialBurgerPlus.addEventListener("click" , ()=>{
    specialBurgerCounter++
    specialBurgerCost = specialBurgerCounter * specialBurgerPrice;
    specialBurger.innerText = specialBurgerCounter;
    specialBurgerTotal.innerText = (specialBurgerCost) +" " + "تومان";
    printOutput();
});
specialBurgerMinus.addEventListener("click" , ()=>{
    if(specialBurgerCounter > 0){
        specialBurgerCounter--;
        specialBurgerCost = specialBurgerCounter * specialBurgerPrice;
        specialBurger.innerText = specialBurgerCounter;
        specialBurgerTotal.innerText = (specialBurgerCost) +" "+ "تومان";
        printOutput();
}});
// for calculating total price of normal cheese burger
let cheeseBurger = document.getElementById("cheeseBurger");
let cheeseBurgerTotal = document.getElementById("cheeseBurgerTotal");
const cheeseBurgerPlus = document.getElementById("cheeseBurgerPlus");
const cheeseBurgerMinus = document.getElementById("cheeseBurgerMinus");
let cheeseBurgerCounter = 0;
let cheeseBurgerPrice = 10000;
let cheeseBurgerCost = 0;
cheeseBurgerPlus.addEventListener("click" , ()=>{
    cheeseBurgerCounter++;
    cheeseBurgerCost = cheeseBurgerCounter * cheeseBurgerPrice;
    cheeseBurger.innerText = cheeseBurgerCounter;
    cheeseBurgerTotal.innerText = (cheeseBurgerCost) +" " + "تومان";
    printOutput();
});
cheeseBurgerMinus.addEventListener("click" , ()=>{
    if(cheeseBurgerCounter > 0){
        cheeseBurgerCounter--;
        cheeseBurgerCost = cheeseBurgerCounter * cheeseBurgerPrice;
        cheeseBurger.innerText = cheeseBurgerCounter;
        cheeseBurgerTotal.innerText = (cheeseBurgerCost) +" "+ "تومان";
        printOutput();
}});
// for calculating total price of normal cheese burger
let scheeseBurger = document.getElementById("scheeseBurger");
let scheeseBurgerTotal = document.getElementById("scheeseBurgerTotal");
const scheeseBurgerPlus = document.getElementById("scheeseBurgerPlus");
const scheeseBurgerMinus = document.getElementById("scheeseBurgerMinus");
let scheeseBurgerCounter = 0;
let scheeseBurgerPrice = 20000;
let scheeseBurgerCost = 0;
scheeseBurgerPlus.addEventListener("click" , ()=>{
    scheeseBurgerCounter++;
    scheeseBurgerCost = scheeseBurgerCounter * scheeseBurgerPrice;
    scheeseBurger.innerText = scheeseBurgerCounter;
    scheeseBurgerTotal.innerText = (scheeseBurgerCost) +" " + "تومان";
    printOutput();
});
scheeseBurgerMinus.addEventListener("click" , ()=>{
    if(scheeseBurgerCounter > 0){
        scheeseBurgerCounter--;
        scheeseBurgerCost = scheeseBurgerCounter * scheeseBurgerPrice;
        scheeseBurger.innerText = scheeseBurgerCounter;
        scheeseBurgerTotal.innerText = (scheeseBurgerCost) +" "+ "تومان";
        printOutput();
}});
// for calculating total price of potato
let potato = document.getElementById("potato");
let potatoTotal = document.getElementById("potatoTotal");
const potatoPlus = document.getElementById("potatoPlus");
const potatoMinus = document.getElementById("potatoMinus");
let potatoCounter = 0;
let potatoPrice = 10000;
let potatoCost = 0;
potatoPlus.addEventListener("click" , ()=>{
    potatoCounter++;
    potatoCost = potatoCounter * potatoPrice;
    potato.innerText = potatoCounter;
    potatoTotal.innerText = (potatoCost) +" " + "تومان";
    printOutput();
});
potatoMinus.addEventListener("click" , ()=>{
    if(potatoCounter > 0){
        potatoCounter--;
        potatoCost = potatoCounter * potatoPrice;
        potato.innerText = potatoCounter;
        potatoTotal.innerText = (potatoCost) +" "+ "تومان";
        printOutput();
}});
// for calculating total price of special potato
let spotato = document.getElementById("spotato");
let spotatoTotal = document.getElementById("spotatoTotal");
const spotatoPlus = document.getElementById("spotatoPlus");
const spotatoMinus = document.getElementById("spotatoMinus");
let spotatoCounter = 0;
let spotatoPrice = 25000;
let spotatoCost = 0;
spotatoPlus.addEventListener("click" , ()=>{
    spotatoCounter++;
    spotatoCost = spotatoCounter * spotatoPrice;
    spotato.innerText = spotatoCounter;
    spotatoTotal.innerText = (spotatoCost) +" " + "تومان";
    printOutput();
});
spotatoMinus.addEventListener("click" , ()=>{
    if(spotatoCounter > 0){
        spotatoCounter--;
        spotatoCost = spotatoCounter * spotatoPrice;
        spotato.innerText = spotatoCounter;
        spotatoTotal.innerText = (spotatoCost) +" "+ "تومان";
        printOutput();
}});
// for calculating total price of soda
let soda = document.getElementById("soda");
let sodaTotal = document.getElementById("sodaTotal");
const sodaPlus = document.getElementById("sodaPlus");
const sodaMinus = document.getElementById("sodaMinus");
let sodaCounter = 0;
let sodaPrice = 5000;
let sodaCost = 0;
sodaPlus.addEventListener("click" , ()=>{
    sodaCounter++; 
    sodaCost = sodaCounter * sodaPrice;
    soda.innerText = sodaCounter;
    sodaTotal.innerText = (sodaCost) +" " + "تومان";
    printOutput();
});
sodaMinus.addEventListener("click" , ()=>{
    if(sodaCounter > 0){
        sodaCounter--;
        sodaCost = sodaCounter * sodaPrice;
        soda.innerText = sodaCounter;
        sodaTotal.innerText = (sodaCost) +" "+ "تومان";
        printOutput();
}});
// for calculating total price of healthy soda
let hsoda = document.getElementById("hsoda");
let hsodaTotal = document.getElementById("hsodaTotal");
const hsodaPlus = document.getElementById("hsodaPlus");
const hsodaMinus = document.getElementById("hsodaMinus");
let hsodaCounter = 0;
let hsodaPrice = 6000;
let hsodaCost = 0;
hsodaPlus.addEventListener("click" , ()=>{
    hsodaCounter++;
    hsodaCost = hsodaCounter * hsodaPrice;
    hsoda.innerText = hsodaCounter;
    hsodaTotal.innerText = (hsodaCost) +" " + "تومان";
    printOutput();
});
hsodaMinus.addEventListener("click" , ()=>{
    if(hsodaCounter > 0){
        hsodaCounter--;
        hsodaCost = hsodaCounter * hsodaPrice;
        hsoda.innerText = hsodaCounter;
        hsodaTotal.innerText = (hsodaCost) +" "+ "تومان";
        printOutput();
}});
// for calculating total price of salad
let salad = document.getElementById("salad");
let saladTotal = document.getElementById("saladTotal");
const saladPlus = document.getElementById("saladPlus");
const saladMinus = document.getElementById("saladMinus");
let saladCounter = 0;
let saladPrice = 8000;
let saladCost = 0;
saladPlus.addEventListener("click" , ()=>{
    saladCounter++;
    saladCost = saladCounter * saladPrice;
    salad.innerText = saladCounter;
    saladTotal.innerText = (saladCost) +" " + "تومان";
    printOutput();
});
saladMinus.addEventListener("click" , ()=>{
    if(saladCounter > 0){
        saladCounter--;
        saladCost = saladCounter * saladPrice;
        salad.innerText = saladCounter;
        saladTotal.innerText = (saladCost) +" "+ "تومان";
        printOutput();
}});
// for calculating total price of cezar salad
let cezar = document.getElementById("cezar");
let cezarTotal = document.getElementById("cezarTotal");
const cezarPlus = document.getElementById("cezarPlus");
const cezarMinus = document.getElementById("cezarMinus");
let cezarCounter = 0;
let cezarPrice = 25000;
let cezarCost = 0;
cezarPlus.addEventListener("click" , ()=>{
    cezarCounter++;
    cezarCost = cezarCounter * cezarPrice;
    cezar.innerText = cezarCounter;
    cezarTotal.innerText = (cezarCost) +" " + "تومان";
    printOutput();
});
cezarMinus.addEventListener("click" , ()=>{
    if(cezarCounter > 0){
        cezarCounter--;
        cezarCost = cezarCounter * cezarPrice;
        cezar.innerText = cezarCounter;
        cezarTotal.innerText = (cezarCost) +" "+ "تومان";
        printOutput();
}});
// output functions
// first we catch everything we need to change in the functions
const totalNumber= document.getElementById("totalNumber");
const bill = document.getElementById("bill");
const serviceCost = document.getElementById("serviceCost");
const discount = document.getElementById("discount");
const dicountCode = document.getElementById("dicountCode");
const finalCost = document.getElementById("finalCost");
const takhfifBtn = document.getElementById("discountBtn");
const undoneDiscount = document.getElementById("undone-discount");

// defined globaly because we use them in different functions
// set them zero because they must be shown at the beginning and cant be empty
let billCal = 0;
let numberCounter = 0;
let service = 0;
let takhfif = false;
let discountFee = 0;
let discountPercent = 0;
let final = 0;
const takhfifCode20 = "20off";
const takhfifCode30 = "30off";

/*
 calculate function to be called before each print
*/

function calculate(){
    // counts total number of items
    numberCounter = normalBurgerCounter + specialBurgerCounter + cheeseBurgerCounter + scheeseBurgerCounter + potatoCounter + spotatoCounter + sodaCounter + hsodaCounter + saladCounter + cezarCounter;
    // counts total price of items
    billCal = normalBurgerCost + specialBurgerCost + cheeseBurgerCost + scheeseBurgerCost + potatoCost + spotatoCost + sodaCost + hsodaCost + saladCost + cezarCost;
    // 5% of total price
    service = (billCal * 5) / 100;
    /*
    if discount is true, the if part will be activated and discount will be calculated
    for total price of all items and new items that will be added on.
    after removing the discount, the discount will be set to false and the discount fee will be set to 0.
    */
    if(takhfif === true){
        discountFee = (billCal * discountPercent) / 100;
    }
    // calculation for final price
    final = billCal + service - discountFee;
}
// function print for the result
function printOutput(){
    // for printing first we calculate for updating the last changes
    calculate();
    // then print the variables into their places with a postfix
    totalNumber.innerText = numberCounter  + " " + " عدد";
    bill.innerText = billCal + " " + "تومان";
    serviceCost.innerText = service + " " + "تومان";
    finalCost.innerText = final + " " + "تومان";
    discount.innerText = discountFee + " " + "تومان";
}

// discount functions
/* if input value matches with the discount code, it will return true for "calculate function" and 20 or 30 percent
depends on discount code. and then calculate function and print function will be called again to
calculate the price based on discount percent. and also it will change some style
*/
takhfifBtn.addEventListener('click' , ()=>{
    if(dicountCode.value === takhfifCode20){
        // the percent for calculate function based on discount code
        discountPercent = 20;
        // now the if part in calculate function will do something
        takhfif = true;
        // we change some colors to green and the costumer will know that the discount is applied
        discount.style.color = "green";
        dicountCode.style.color = "green";
        // now fix the code for not being able to put another one or used it twice
        dicountCode.value = takhfifCode20;
        dicountCode.readOnly = true;
        // get the invisible message from html and show it to the costumer.
        let discountTitle = document.getElementById("discountTitle");
        discountTitle.style.color = "green";
        let success = document.getElementById("successDiscount");
        success.style.display = "block";
        // make it invisible again after 2 seconds
        setTimeout(()=>{success.style.display = "none";},2000);
        // cakculate and print again to update the price
        printOutput();
        // remove button will be activated
        takhfifBtn.style.display = "none";
        undoneDiscount.style.display = "block";
    } else if(dicountCode.value === takhfifCode30){
        // same as above but this is 30 percent off
        discountPercent = 30;
        takhfif = true;
        discount.style.color = "green";
        dicountCode.style.color = "green";
        dicountCode.value = takhfifCode30;
        dicountCode.readOnly = true;
        let discountTitle = document.getElementById("discountTitle");
        discountTitle.style.color = "green";
        let success = document.getElementById("successDiscount");
        success.style.display = "block";
        setTimeout(()=>{success.style.display = "none";},2000);
        printOutput()
        takhfifBtn.style.display = "none";
        undoneDiscount.style.display = "block";
    } else{
        // for codes that does not match, we show a red message
        let fail = document.getElementById("failDiscount");
        fail.style.display = "block";
        setTimeout(()=>{fail.style.display = "none";},2000);
        dicountCode.value = "";
    }});

/* after activating discount, the discount button will be hidden and remove discount would be shown.
then by clicking on it all discount properties will be undone and the price will be calculated again and styles
will go back to normal.
*/

undoneDiscount.addEventListener('click' , ()=>{
    /*
    discount fee must be set to zero. if not it wont remove the discount that already been made.
    because in line 283 we said total price - discount fee = final price and its is outside of our condition
    and will effect even if takhfif === false
    */
    discountFee = 0;
    // and the calculator wont consider discount anymore
    takhfif = false;
    // now set the styles back to normal like they were before and make it writeable again
    discount.style.color = "#202D33";
    dicountCode.value = "";
    dicountCode.style.color = "#202D33";
    dicountCode.readOnly = false;
    let discountTitle = document.getElementById("discountTitle");
    discountTitle.style.color = "#202D33";
    let msg = document.getElementById("remove-discount");
    // and of corse costumer should know that discount is removed
    msg.style.display = "block";
    setTimeout(()=>{msg.style.display = "none";},2000);
    // now we can activate the discount button again
    takhfifBtn.style.display = "block";
    undoneDiscount.style.display = "none";
    // and finally calculate and print again for updating the price
    printOutput();
});

// for submitting
const submitBtn = document.getElementById("submitBtn");
const modal = document.getElementById("modal");
const emptyCard = document.getElementById("emptyCard");
const modalOkBtn = document.getElementById("modalOkBtn");

/*
empty basket cant be submitted and if numberCounter = 0 "number or string", 
it will show an error until you buy something
*/
submitBtn.addEventListener("click" , ()=>{
    if(numberCounter == 0){
        emptyCard.style.display = "block";
        setTimeout(()=>{emptyCard.style.display = "none";},2000);
    } else{
    modal.style.display = "block";}
});
modalOkBtn.addEventListener("click" , ()=>{
    modal.style.display = "none";
    // reload page and set everything to zero again
    location.reload();
});