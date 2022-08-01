
let inp = document.querySelector(".inp1");
let myAllVs = document.querySelector(".AllVs span");
let mySubTotal = document.querySelector(".subtotal span");
let myTotal = document.querySelector(".total span");
let deletebtn = document.querySelector(".delete");
// let select = document.querySelector("select");

deletebtn.onclick = () => {
        //  backUp = inp.value;
        inp.value = "";
    }

// let calc = function()  {
   
// }
// select.onchange = () => {
//      V = select.value;
//      calc();
// }
/////  restore from local storage
if (window.localStorage.mainInput) {
    inp.value = window.localStorage.getItem("mainInput");
}

let AllVs = [];

TotalCells = 0;
if (TotalCells === 0) {
    myAllVs.style.display = "none";
    mySubTotal.style.display = "none";
    myTotal.style.display = "none";
}

inp.oninput = function()  {
    TotalCells = 0;
    let numberTotal = [];
     L_Storage = inp.value;
     window.localStorage.setItem("mainInput",L_Storage);
    AllVs = inp.value.split(" ");
    for (i=0; i < AllVs.length;i++) {
        if (typeof +AllVs[i] === "number") {
        numberTotal.push(AllVs[i]);
        TotalCells += +numberTotal[i];
        }
    }
    if (TotalCells === 0) {
        myAllVs.style.display = "none";
        mySubTotal.style.display = "none";
        myTotal.style.display = "none";
    } else {
        myAllVs.style.display    = "block";
        mySubTotal.style.display = "block";
        myTotal.style.display    = "block";
        
        myAllVs.textContent = +((TotalCells).toFixed(3));
        mySubTotal.textContent = +((TotalCells * 115/100).toFixed(5));
        myTotal.textContent = +((TotalCells * 115/100 * 85/100).toFixed(5));
    }
}

// let backUp = "";
// deletebtn.onclick = () => {
//      backUp = inp.value;
//     inp.value = "";
// }
//////////////////// HISTORY
// let empty = document.querySelector(".empty");
// let H_Div = document.querySelector(".history");
// inp.onfocus = function() {
    
//     let hr = document.createElement("hr");
//     let H_No = document.createElement("h4");
//     let H_res = document.createElement("span");
//    NO = inp.value || backUp;
//    RES = myp.textContent;
//    if (true) {
//         H_No.textContent = NO;
//         H_res.textContent = RES;
//         H_Div.prepend(hr)
//         H_Div.prepend(H_res)
//     H_Div.prepend(H_No)
//     }
    
    //  opt = document.querySelectorAll("option");
    // console.log(opt[1]);
// }



// let recheck = function() {
    
//     if (H_Div.innerHTML === "") {
//         empty.style.display = "block";
//     } else {
//         empty.style.display = "none";
//     }
// }


// setInterval(recheck,inp.onfocus)
// let deleteH = document.querySelector(".deleteHistory");




// deleteH.onclick = function() {
//     H_Div.innerHTML = "";
// }




// let fatherH = document.querySelector(".father-history");
// let hide = document.querySelector(".hideH");

// hide.onclick = function() {
//     if (fatherH.style.opacity === "0") {
//         fatherH.style.opacity = "1";
//     } else {
//         fatherH.style.opacity = "0";
//     }
// }

