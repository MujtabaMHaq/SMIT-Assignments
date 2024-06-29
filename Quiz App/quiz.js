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
            a: "Object-Oriented ",
            b: "Object-Base",
            c: "Assembly Languages",
            d: "high Level",

        },
        answer: "Object-Base"
    }
    ,
    {
        id: 4,
        question: "who is the present president of pakistan",
        options: {
            a: "Arif Alvi",
            b: "Imran Khan",
            c: "Nawaz Sharif",
            d: "Zardari",

        },
        answer: "Arif Alvi"
    },
    {
        id: 5,
        question: "Inside which HTML element do we put the JavaScript?",
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
        question: "Which of the following property is used to control the repetition of an image in the background?",
        options: {
            a: "background-color",
            b: "background-image",
            c: "background-repeat",
            d: "background-position",

        },
        answer: "background-repeat"
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
    if(nowCount.innerHTML > totalCount.innerHTML){
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
var showwrongAns = document.getElementById("showwrongAns")
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
        showwrongAns.innerHTML = wrongcounter
        totalCountResult.innerHTML = totalCount.innerHTML
        var percent = rightcounter/ques.length*100
        percentage.innerHTML = Math.floor(percent)
        result.className = "show"
        if(percent < 60){
            showPassFail.innerHTML = localStorage.getItem("fname") + ", You are Fail"



        }
        else if(percent > 60 && percent <= 89){
            showPassFail.innerHTML = localStorage.getItem("fname") + ", You are Pass" 
            resultImg.setAttribute("src", "images/pass.jpg");


        }
        else if(percent => 90){

            showPassFail.innerHTML = localStorage.getItem("fname") + ", You are Legend!"
            resultImg.setAttribute("src", "images/legend.jpg");

        }
        
    }

}


var bas = setInterval(Startcounter, 1000)
