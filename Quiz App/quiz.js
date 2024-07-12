var ques = [
    {
        id: 1,
        question: "HTML stand for",
        options: {
            a: "Hyper text markup Language",
            b: "Hyper text programming Language",
            c: "Hyper text styling Language",
            d: "Hyper text scripting Language",

        },
        answer: "Hyper text markup Language"
    },
    {
        id: 2,
        question: "The 'function' and  'var' are known as",
        options: {
            a: "Keywords",
            b: "Data types",
            c: "Declaration statements",
            d: "Prototypes",

        },
        answer: "Declaration statements"
    },

    {
        id: 3,
        question: "Which type of JavaScript Languages is",
        options: {
            a: "Object-Oriented",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    },
    {
        id: 4,
        question: "Which of the following function of Array object returns true if at least one element in this array satisfies the provided testing function",
        options: {
            a: "reverse()",
            b: "shift()",
            c: "slice()",
            d: "some()",

        },
        answer: "some()"
    }
    
    ,
    {
        id: 5,
        question: "Inside which HTML element do we put the JavaScript",
        options: {
            a: "js",
            b: "javascript",
            c: "script",
            d: "scripting",

        },
        answer: "script"
    }
    ,
    {
        id: 6,
        question: "Which of the following property is used to control the repetition of an image in the background",
        options: {
            a: "background-color",
            b: "background-image",
            c: "background-repeat",
            d: "background-position",

        },
        answer: "background-repeat"
    },
    
    {
        id: 7,
        question: "How can you add a comment in JavaScript",
        options: {
            a: "'This is a comment",
            b: "//This is a comment",
            c: "&lt!--This is a comment--&gt",
            d: "/*This is a comment*/",
        },
        answer: "//This is a comment"
    }
    ,
    {
        id: 8,
        question: "Which method is used to create a new array from an existing array in JavaScript",
        options: {
            a: "Array.create()",
            b: "Array.slice()",
            c: "Array.splice()",
            d: "Array.new()",
        },
        answer: "Array.slice()"
    }
    ,
    
    {
        id: 9,
        question: "Which event occurs when the user clicks on an HTML element",
        options: {
            a: "onmouseover",
            b: "onchange",
            c: "onclick",
            d: "onmouseclick",
        },
        answer: "onclick"
    }
    ,
    {
        id: 10,
        question: "How do you declare a JavaScript variable",
        options: {
            a: "variable carName;",
            b: "var carName;",
            c: "v carName;",
            d: "declare carName;",
        },
        answer: "var carName;"
    }
    
]

var fulName = document.getElementById("fulName")
var FulEmail = document.getElementById("FulEmail")
var Questions = document.getElementById("Questions")
var option = document.getElementById("option")

var nowCount =document.getElementById("nowCount")
var totalCount =document.getElementById("totalCount")
totalCount.innerHTML = ques.length

funame = localStorage.getItem("fname")
luname = localStorage.getItem("lname")
fulName.innerHTML = `${funame} ${luname}`
FulEmail.innerHTML = localStorage.getItem("email")
var indexNo = 0
var rightcounter = 0
var wrongcounter = 0
var iscalled = false






var counter = document.getElementById("counter")


function Startcounter(){

    counter.innerHTML--
    if(nowCount.innerHTML > totalCount.innerHTML-1){
        clearInterval(bas)
        counter.innerHTML = "00"
    }

    else if(counter.innerHTML < 1){
            indexNo++
            nowCount.innerHTML++
            startquiz()
            counter.innerHTML = "59"
            if (iscalled != true){
                wrongcounter++
                alert("You've exceeded the 60-second limit for this question. Please proceed to the next one.")
                option.className = "touch"

            }
            option.className = "touch"

            
                   
        
    }
    
    
}



function startquiz(){
    

   
    Questions.innerHTML = ques[indexNo].question + "?"

    
    option.innerHTML = ""
    for (var key in ques[indexNo].options) {
    var alloption = ques[indexNo].options[key]
    option.innerHTML += `<li onclick="Select(this)" >${alloption}</li>`

    }

}
var liOptions = option.getElementsByTagName("li")
var next = document.getElementById("next")

function Select(elm){
    next.removeAttribute('disabled');
    if(elm.innerHTML === ques[indexNo].answer){
        iscalled = true
        rightcounter++
        elm.className = "Correct"
        elm.parentElement.className = "dontTouch"
        


    }
    else if (elm.innerHTML != ques[indexNo].answer) {
        iscalled = true
        wrongcounter++
        elm.className = "wrong"
        elm.parentElement.className = "dontTouch"
        for (var li of liOptions) {
        if(li.innerHTML === ques[indexNo].answer){
        li.className = "Correct"

        }

        }

    }
    

   
    

}

var showCorrectAns = document.getElementById("showCorrectAns")
var gaib = document.getElementById("gaib")
var result = document.getElementById("result")
var percentage = document.getElementById("percentage")
var showPassFail = document.getElementById("showPassFail")
var resultImg = document.getElementById("resultImg")
var totalCountResult = document.getElementById("totalCountResult")


function Nxt(){
    if(indexNo < ques.length-1){

        counter.innerHTML = "59"
        

        
        indexNo++
        nowCount.innerHTML++
        startquiz()
        next.setAttribute('disabled', 'true')
        option.className = "touch"

        
        
        

    }
    else {
        gaib.remove();
        
        showCorrectAns.innerHTML = rightcounter
        totalCountResult.innerHTML = totalCount.innerHTML
        var percent = rightcounter/ques.length*100
        percentage.innerHTML = Math.floor(percent)
        result.className = "show"
        result.className = "main_result"
        if(percent < 60){
            showPassFail.innerHTML = localStorage.getItem("fname") + ", You are Fail"



        }
        else if(percent > 60 && percent <= 89){
            showPassFail.innerHTML = localStorage.getItem("fname") + ", You are Pass" 
            resultImg.setAttribute("src", "images/pass.png");


        }
        else if(percent => 90){

            showPassFail.innerHTML = localStorage.getItem("fname") + ", You are Legend!"
            resultImg.setAttribute("src", "images/legend.jpg");

        }
        
    }

}


var bas = setInterval(Startcounter, 1000)
