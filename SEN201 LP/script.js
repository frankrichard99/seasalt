//TEST
const navBar = document.querySelector("nav");
const sideBar = document.querySelector("#sidePage");
const sideLists = document.querySelector(".side-list");
const pageOneMid = document.querySelector(".page-1 .mid-part");
sideLists.style = "display:none";

function displaySide(){
// navBar.style = "display: none";
// pageOneMid.style = "display: none";
sideBar.classList.add("sideBarActive");  
sideBar.classList.remove("hideSideBar");

setTimeout(()=>{
sideLists.style = "display:grid"; 
}, 100); 
}
function hideSlide(){
slideUp(afterSlideUp);

}
function slideUp(callback){
sideLists.style = "display:none";
sideBar.classList.add("hideSideBar");
callback();
}
function afterSlideUp(){
setTimeout(()=>{
sideBar.classList.remove("sideBarActive");
navBar.style = "diplay:flex";
pageOneMid.style = "display: flex";
}, 400);


}

const navLists = document.querySelectorAll("nav li");

navLists.forEach((list)=>{
list.addEventListener("mouseover", activateLine);
})

function activateLine(){
navLists.forEach((list) =>{
list.classList.remove("white-line");
}) ;
this.classList.add("white-line");
}

const typingElement = document.querySelector(".cursor-animation");
const speed = 200;
const word = "Reimagined!";
let newIndex = word.length;

function addType(){

let newWord = word;
let wordLength = word.length
let index = 0;
let g ;


let intervalId =  setInterval(()=>{
  g = newWord.slice(0, index);

  index++;
  typingElement.textContent = g;

  if(g.length == wordLength){
      clearInterval(intervalId);
      removeType(word);
  }
}, speed)
  




if(index == word.length){
  setTimeout(()=>{
      removeType(word);
  }, 3000);
  // setTimeout(()=>{
  //     typingElement.innerHTML = "";
  //     index = 0;
  //     typeAnimation();
  // }, 10000);
  
}

}
function removeType(word){

let r = [...word];

let g = "";

let intervalId = setInterval(()=> {

r.pop();
g = r.join("");
typingElement.textContent = g;  

if(r.length < 1){
  clearInterval(intervalId);
  index = 0;
  addType();
}  

}, speed);  


  
}

addType();


const boxA = document.querySelector(".box-a");
const boxB = document.querySelector(".box-b");
const boxC = document.querySelector(".box-c");
const boxD = document.querySelector(".box-d");

const A = boxA.innerHTML;
const B = boxB.innerHTML;
const C = boxC.innerHTML;
const D = boxD.innerHTML;

function swapAB(){
   
    setInterval(()=>{
        
        //  boxA.classList.add("fadeBox");
        //  boxB.classList.remove("fadeBox");
           
        
        setTimeout(()=>{
            boxB.innerHTML = A;
            boxA.innerHTML = B;
    
            // boxB.classList.remove("fadeBox");
            // boxA.classList.add("fadeBox");
    
        }, 5000);
        setTimeout(()=>{
            boxB.innerHTML = B;
            boxA.innerHTML = A;
        });
      },  10000);

}

function swapCD(){
    setInterval(()=>{
        
            // boxC.classList.add("fadeBox");
            // boxD.classList.remove("fadeBox");
           
     
        setTimeout(()=>{
            boxD.innerHTML = C;
            boxC.innerHTML = D;
    
            // boxD.classList.remove("fadeBox");
            // boxC.classList.add("fadeBox");
    
        }, 7000);
        setTimeout(()=>{
            boxD.innerHTML = D;
            boxC.innerHTML = C;
        })
        
    }, 10000);
}
 swapAB();
 swapCD();






// LINK TRANSITIONS
const homeLink = document.getElementById("homeLink");
homeLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const homePage = document.getElementById("homePage");
    homePage.scrollIntoView({behavior: 'smooth'});
});


const aboutLink = document.getElementById("aboutLink");
aboutLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const aboutPage = document.getElementById("aboutPage");
    aboutPage.scrollIntoView({behavior: 'smooth'});
});

const featureLink = document.getElementById("featuresLink");
featureLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const featurePage = document.getElementById("featurePage");
    featurePage.scrollIntoView({behavior: 'smooth'});
});

const benefitLink = document.getElementById("benefitLink");
benefitLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const benefitPage = document.getElementById("benefitPage");
    benefitPage.scrollIntoView({behavior: 'smooth'});
});



// SIDE LINK TRANSITIONS
const sideHomeLink = document.getElementById("side-homeLink");
sideHomeLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const homePage = document.getElementById("homePage");
    hideSlide();
    
});


const sideAboutLink = document.getElementById("side-aboutLink");
sideAboutLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const aboutPage = document.getElementById("aboutPage");
    hideSlide();
    aboutPage.scrollIntoView({behavior: 'smooth'});
});

const sideFeatureLink = document.getElementById("side-featuresLink");
sideFeatureLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const featurePage = document.getElementById("featurePage");
    hideSlide();
    featurePage.scrollIntoView({behavior: 'smooth'});
});

const sideBenefitLink = document.getElementById("side-benefitLink");
sideBenefitLink.addEventListener("click", (event)=>{
    event.preventDefault();
    const benefitPage = document.getElementById("benefitPage");
    hideSlide();
    benefitPage.scrollIntoView({behavior: 'smooth'});
});

