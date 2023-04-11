//Program no 1
function addNum(para1){
    return function (para2){
        return para1+para2;
    }
}

let arg1 = addNum(5);
let result = arg1(3);
console.log(result);


// Program no 2
let discountTags = ["15%", "20%", "25%", "30%"];
let i = 0;

function findDiscountTag (val, arr) {
    
         if (arr[i] === val){
            return true;
         }

    if(i<arr.length) {
        i++;
        findDiscountTag(val,arr);
    }
return arr[i] === val;
} 
console.log(findDiscountTag("25%",discountTags)); //true
console.log(findDiscountTag("10%",discountTags)); //false


//Program no 3
function addText (text) {
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    document.body.appendChild(paragraph);
}

addText("I have added by a function.");
addText("I am another paragraph added by a function.");


//Program no 4
let ul = document.getElementById("list");

function addList (text) {
        const li = document.createElement("li");
        li.innerText = text;
        ul.appendChild(li);
    }

    addList("List 1");
    addList("List 2");


//Program no 5
function changeColor (id, color){
    let element = document.getElementById(id);
    element.style.backgroundColor = color;
}

changeColor("first-element", "red");
changeColor("second-element", "green");


//Program no 6
let user01 = {
    Name: "Ali",
    Age: 23,
    hasBeared: true
};
let user02 = {
    Name: "Usman",
    Age: 21,
    hasBeared: false
};

function storeData (key,obj){
    let jsonFile = JSON.stringify(obj);
    localStorage.setItem(key, jsonFile);
}

storeData("Id-01", user01);
storeData("Id-02", user02);


// Program no 7
function getData (key) {
    return JSON.parse(localStorage.getItem(key));
}

let Id_01 = getData("Id-01");
console.log(Id_01);

let Id_02 = getData("Id-02");
console.log(Id_02);


//Program no 8
let userCredential = {
    firstName: "Abid",
    lastName : "Ali",
    userName : "abid.ali",
    password : "ABCD123456"
};

function storeAndRetrieve(obj) {
    for (let key in obj) {
    localStorage.setItem(key, JSON.stringify(obj[key]));
  }

  let retrievedObj = {};
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    retrievedObj[key] = JSON.parse(localStorage.getItem(key));
  }

  return retrievedObj;
}
let retrievedObj = storeAndRetrieve(userCredential);
console.log(retrievedObj);