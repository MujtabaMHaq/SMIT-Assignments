var counter = document.getElementById("counter")
var inputField = document.getElementById("inputField")

function start(ele) {

    clearInterval(bas)

    var hr = parseInt(document.getElementById("hr").value) || 0;
    var min = parseInt(document.getElementById("min").value) || 0;
    var sec = parseInt(document.getElementById("sec").value) || 0;
    var mainContainer = document.getElementById("mainContainer")
    var btn = document.getElementById("btn")

    var time = hr * 3600 + min * 60 + sec

    var bas = setInterval(function () {
        ele.setAttribute('disabled', 'true');


        if (time == 0) {
            clearInterval(bas);
            counter.innerHTML = "00 : 00 : 00"
            ele.removeAttribute("disabled");
            mainContainer.classList.remove("hearts");
            counter.classList.remove("alert");
            mainContainer.className = "reset"
            btn.style.border = '2px solid rgb(84,180,53)';

            var inputs = inputField.getElementsByTagName('input');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].removeAttribute("disabled");;
            }
        }

        else {

            var inputs = inputField.getElementsByTagName('input');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].value = "";
                inputs[i].setAttribute('disabled', 'true');
            }

            var hours = Math.floor(time / 3600).toString().padStart(2, "0")
            var minutes = Math.floor(time % 3600 / 60).toString().padStart(2, "0")
            var seconds = (time % 60).toString().padStart(2, "0")


            counter.innerHTML = `${hours}<span class="time">Hrs : </span>${minutes}<span class="time">Mins : </span>${seconds}<span class="time">Secs</span>`

            time--

            if (time < 5) {
                mainContainer.className = "hearts"
                counter.className = "alert"
                btn.style.border = '2px solid red';
            }
        }
    }, 1000)





}













// var rep = setInterval(start , 1000)