
let inp = document.querySelector(".inp1");
let myp = document.querySelector("p");
let deletebtn = document.querySelector(".delete");
let select = document.querySelector("select");
let note = document.querySelector(".note")
S = "";
// myp.textContent = S;

let calc = function()  {
    F = (+inp.value * 115/100) ;
    S = F * + (V / 100);
    if (S===0) {
        S = ""
        note.style.display = "block"
    }
    myp.textContent = S;
}
let V = select.value;
myp.style.display = "none";
select.onchange = () => {
     V = select.value;
     calc();
}
/////  restore from local storage
if (window.localStorage.mainInput) {
    inp.value = window.localStorage.getItem("mainInput");
}

inp.oninput = function()  {
     L_Storage = inp.value;
     window.localStorage.setItem("mainInput",L_Storage);
    F = (+inp.value * 115/100) ;
    S = F * + (V / 100);
    if (S===0) {
        S = "";
        note.style.display = "block";
        myp.style.display = "none";
    } else {
        note.style.display = "none"
        myp.style.display = "flex";
    }
    myp.textContent = S;
}
let backUp = "";
deletebtn.onclick = () => {
     backUp = inp.value;
    inp.value = "";
}
//////////////////// HISTORY
let empty = document.querySelector(".empty");
let H_Div = document.querySelector(".history");
inp.onfocus = function() {
    
    let hr = document.createElement("hr");
    let H_No = document.createElement("h4");
    let H_res = document.createElement("span");
   NO = inp.value || backUp;
   RES = myp.textContent;
   if (true) {
        H_No.textContent = NO;
        H_res.textContent = RES;
        H_Div.prepend(hr)
        H_Div.prepend(H_res)
    H_Div.prepend(H_No)
    }
    
    //  opt = document.querySelectorAll("option");
    // console.log(opt[1]);
}
let recheck = function() {
    
    if (H_Div.innerHTML === "") {
        empty.style.display = "block";
    } else {
        empty.style.display = "none";
    }
}

setInterval(recheck,inp.onfocus)
let deleteH = document.querySelector(".deleteHistory");

deleteH.onclick = function() {
    H_Div.innerHTML = "";
}

let fatherH = document.querySelector(".father-history");
let hide = document.querySelector(".hideH");

hide.onclick = function() {
    if (fatherH.style.opacity === "0") {
        fatherH.style.opacity = "1";
    } else {
        fatherH.style.opacity = "0";
    }
}

