const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "Images/bulba1.png") {
        myImage.setAttribute("src","Images/bulba2.png");
    }
    else{
        myImage.setAttribute("src", "Images/bulba1.png");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName} es mas cool`;
    }
    
}

if (!localStorage.getItem("name")){
    setUserName();
}
else{
    const storedName= localStorage.getItem("name");
    myHeading.textContent = `${storedName} es mas cool`;
}

myButton.addEventListener("click", () => {
    setUserName();
})