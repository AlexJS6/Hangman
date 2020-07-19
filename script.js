let myInput;
let myInputLength;
let myWord;
let myNotHidden = [];
let myTruth = [];
let my_a
let myImage = 0;
document.getElementById("myButton").addEventListener("click", () => {
    myInput = document.getElementById("myInput").value;
    console.log(myInput);
    myInputLength = myInput.length;
    console.log(myInputLength);
    myWord = myInput.split("");
    console.log(myWord);
    for (let i=0; i<myWord.length; i++) {
        myNotHidden.push("_ ");
    }
    console.log(myNotHidden.join(" "));
    document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
    document.getElementById("myInput").value = "";
    /* ////////////////////LETTER A ///////////////////////////////////*/
    document.getElementsByClassName("myTd")[0].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "a") {
                myNotHidden.splice(i, 1, "a");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[0].style.backgroundColor = "#bfb";
                my_a ="a"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "a") {
                    my_a = "aa";
                }   
            }
        }
        if (my_a == "aa") {
            document.getElementsByClassName("myTd")[0].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*////////////////////////LETTER B ////////////////////////////*/
    document.getElementsByClassName("myTd")[1].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "b") {
                myNotHidden.splice(i, 1, "b");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[1].style.backgroundColor = "#bfb";
                my_a ="b"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "b") {
                    my_a = "bb";
                }   
            }
        }
        if (my_a == "bb") {
            document.getElementsByClassName("myTd")[1].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /* ///////////////////////////////LETTER C //////////////////////////////////////*/
    document.getElementsByClassName("myTd")[2].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "c") {
                myNotHidden.splice(i, 1, "c");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[2].style.backgroundColor = "#bfb";
                my_a ="c"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "c") {
                    my_a = "cc";
                }   
            }
        }
        if (my_a == "cc") {
            document.getElementsByClassName("myTd")[2].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*/////////////////////////////////LETTER D ///////////////////////////////*/
    document.getElementsByClassName("myTd")[3].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "d") {
                myNotHidden.splice(i, 1, "d");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[3].style.backgroundColor = "#bfb";
                my_a ="d"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "d") {
                    my_a = "dd";
                }   
            }
        }
        if (my_a == "dd") {
            document.getElementsByClassName("myTd")[3].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*//////////////////////////////LETTER E /////////////////////////////////*/
    document.getElementsByClassName("myTd")[4].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "e") {
                myNotHidden.splice(i, 1, "e");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[4].style.backgroundColor = "#bfb";
                my_a ="e"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "e") {
                    my_a = "ee";
                }   
            }
        }
        if (my_a == "ee") {
            document.getElementsByClassName("myTd")[4].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*////////////////////////////////////////LETTER F ///////////////////////////////*/
    document.getElementsByClassName("myTd")[5].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "f") {
                myNotHidden.splice(i, 1, "f");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[5].style.backgroundColor = "#bfb";
                my_a ="f"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "f") {
                    my_a = "ff";
                }   
            }
        }
        if (my_a == "ff") {
            document.getElementsByClassName("myTd")[5].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*////////////////////////////LETTER G ///////////////////////////*/
    document.getElementsByClassName("myTd")[6].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "g") {
                myNotHidden.splice(i, 1, "g");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[6].style.backgroundColor = "#bfb";
                my_a ="g"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "g") {
                    my_a = "gg";
                }   
            }
        }
        if (my_a == "gg") {
            document.getElementsByClassName("myTd")[6].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*/////////////////////////////////LETTER H ///////////////////////////*/
    document.getElementsByClassName("myTd")[7].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "h") {
                myNotHidden.splice(i, 1, "h");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[7].style.backgroundColor = "#bfb";
                my_a ="h"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "h") {
                    my_a = "hh";
                }   
            }
        }
        if (my_a == "hh") {
            document.getElementsByClassName("myTd")[7].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*//////////////////////////LETTER I //////////////////////////////*/
    document.getElementsByClassName("myTd")[8].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "i") {
                myNotHidden.splice(i, 1, "i");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[8].style.backgroundColor = "#bfb";
                my_a ="i"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "i") {
                    my_a = "ii";
                }   
            }
        }
        if (my_a == "ii") {
            document.getElementsByClassName("myTd")[8].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*////////////////////////////LETTER J ////////////////////////////////*/
    document.getElementsByClassName("myTd")[9].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "j") {
                myNotHidden.splice(i, 1, "j");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[9].style.backgroundColor = "#bfb";
                my_a ="j"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "j") {
                    my_a = "jj";
                }   
            }
        }
        if (my_a == "jj") {
            document.getElementsByClassName("myTd")[9].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*/////////////////////////////////////LETTER K ///////////////////////*/
    document.getElementsByClassName("myTd")[10].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "k") {
                myNotHidden.splice(i, 1, "k");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[10].style.backgroundColor = "#bfb";
                my_a ="k"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "k") {
                    my_a = "kk";
                }   
            }
        }
        if (my_a == "kk") {
            document.getElementsByClassName("myTd")[10].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*//////////////////////////LETTER L ////////////////////*/
    document.getElementsByClassName("myTd")[11].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "l") {
                myNotHidden.splice(i, 1, "l");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[11].style.backgroundColor = "#bfb";
                my_a ="l"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "l") {
                    my_a = "ll";
                }   
            }
        }
        if (my_a == "ll") {
            document.getElementsByClassName("myTd")[11].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*////////////////////////LETTER M ///////////////////////////////*/
    document.getElementsByClassName("myTd")[12].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "m") {
                myNotHidden.splice(i, 1, "m");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[12].style.backgroundColor = "#bfb";
                my_a ="n"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "m") {
                    my_a = "mm";
                }   
            }
        }
        if (my_a == "mm") {
            document.getElementsByClassName("myTd")[12].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*/////////////////////////////LETTER N ////////////////////////*/
    document.getElementsByClassName("myTd")[13].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "n") {
                myNotHidden.splice(i, 1, "n");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[13].style.backgroundColor = "#bfb";
                my_a ="n"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "n") {
                    my_a = "nn";
                }   
            }
        }
        if (my_a == "nn") {
            document.getElementsByClassName("myTd")[13].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*////////////////////////LETTER O //////////////////////////*/
    document.getElementsByClassName("myTd")[14].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "o") {
                myNotHidden.splice(i, 1, "o");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[14].style.backgroundColor = "#bfb";
                my_a ="o"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "o") {
                    my_a = "oo";
                }   
            }
        }
        if (my_a == "oo") {
            document.getElementsByClassName("myTd")[14].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*////////////////////////////////LETTER P //////////////////////////////*/
    document.getElementsByClassName("myTd")[15].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "p") {
                myNotHidden.splice(i, 1, "p");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[15].style.backgroundColor = "#bfb";
                my_a ="p"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "p") {
                    my_a = "pp";
                }   
            }
        }
        if (my_a == "pp") {
            document.getElementsByClassName("myTd")[15].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*/////////////////////////LETTER Q ////////////////////////////*/
    document.getElementsByClassName("myTd")[16].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "q") {
                myNotHidden.splice(i, 1, "q");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[16].style.backgroundColor = "#bfb";
                my_a ="q"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "q") {
                    my_a = "qq";
                }   
            }
        }
        if (my_a == "qq") {
            document.getElementsByClassName("myTd")[16].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*/////////////////////////////////////LETTER R /////////////////////////*/
    document.getElementsByClassName("myTd")[17].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "r") {
                myNotHidden.splice(i, 1, "r");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[17].style.backgroundColor = "#bfb";
                my_a ="r"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "r") {
                    my_a = "rr";
                }   
            }
        }
        if (my_a == "rr") {
            document.getElementsByClassName("myTd")[17].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*//////////////////////////////LETTER S //////////////////////////*/
    document.getElementsByClassName("myTd")[18].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "s") {
                myNotHidden.splice(i, 1, "s");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[18].style.backgroundColor = "#bfb";
                my_a ="s"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "s") {
                    my_a = "ss";
                }   
            }
        }
        if (my_a == "ss") {
            document.getElementsByClassName("myTd")[18].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*//////////////////////////////////LETTER T //////////////////////////////*/
    document.getElementsByClassName("myTd")[19].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "t") {
                myNotHidden.splice(i, 1, "t");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[19].style.backgroundColor = "#bfb";
                my_a ="t"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "t") {
                    my_a = "tt";
                }   
            }
        }
        if (my_a == "tt") {
            document.getElementsByClassName("myTd")[19].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*////////////////////////////////////// LETTER U ////////////////////////////////////*/
    document.getElementsByClassName("myTd")[20].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "u") {
                myNotHidden.splice(i, 1, "u");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[20].style.backgroundColor = "#bfb";
                my_a ="u"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "u") {
                    my_a = "uu";
                }   
            }
        }
        if (my_a == "uu") {
            document.getElementsByClassName("myTd")[20].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*//////////////////////////////////////LETTER V //////////////////////////////*/
    document.getElementsByClassName("myTd")[21].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "v") {
                myNotHidden.splice(i, 1, "v");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[21].style.backgroundColor = "#bfb";
                my_a ="v"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "v") {
                    my_a = "vv";
                }   
            }
        }
        if (my_a == "vv") {
            document.getElementsByClassName("myTd")[21].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*////////////////////////////////////LETTER W ///////////////////////////*/
    document.getElementsByClassName("myTd")[22].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "w") {
                myNotHidden.splice(i, 1, "w");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[22].style.backgroundColor = "#bfb";
                my_a ="w"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "w") {
                    my_a = "ww";
                }   
            }
        }
        if (my_a == "ww") {
            document.getElementsByClassName("myTd")[22].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*//////////////////////////////////////////LETTER X ///////////////////////*/
    document.getElementsByClassName("myTd")[23].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "x") {
                myNotHidden.splice(i, 1, "x");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[23].style.backgroundColor = "#bfb";
                my_a ="x"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "x") {
                    my_a = "xx";
                }   
            }
        }
        if (my_a == "xx") {
            document.getElementsByClassName("myTd")[23].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /*/////////////////////////LETTER Y ////////////////////////*/
    document.getElementsByClassName("myTd")[24].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "y") {
                myNotHidden.splice(i, 1, "y");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[24].style.backgroundColor = "#bfb";
                my_a ="y"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "y") {
                    my_a = "yy";
                }   
            }
        }
        if (my_a == "yy") {
            document.getElementsByClassName("myTd")[24].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
    /* ///////////////////////////////LETTER Z //////////////////////////*/
    document.getElementsByClassName("myTd")[25].addEventListener("click", () => {
        for (let i=0; i<myInputLength; i++) {
            if (myWord[i] === "z") {
                myNotHidden.splice(i, 1, "z");
                console.log(myTruth);
                document.getElementById("theWord").innerHTML = myNotHidden.join(" ");
                document.getElementsByClassName("myTd")[25].style.backgroundColor = "#bfb";
                my_a ="z"
                if (myNotHidden.join("") === myInput) {
                    document.body.style.backgroundColor = "rgb(100, 250, 100)";
                    alert("You Won! Click 'new Game' to play again!");
                    document.getElementsByClassName("myImg")[0].src = "static/images.png/HangmanWin.png";
                }
            }
            else {
                if (my_a != "z") {
                    my_a = "zz";
                }   
            }
        }
        if (my_a == "zz") {
            document.getElementsByClassName("myTd")[25].style.backgroundColor = "#fbb";
            myImage += 1;
            console.log(myImage);
        }
        if (myImage == 1) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman1.png";
        }
        else if (myImage == 2) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman2.png";
        }
        else if (myImage == 3) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman3.png";
        }
        else if (myImage == 4) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman4.png";
        }
        else if (myImage == 5) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman5.png";
        }
        else if (myImage == 6) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman6.png";
        }
        else if (myImage == 7) {
            document.getElementsByClassName("myImg")[0].src = "static/images.png/Hangman7.png";
            document.body.style.backgroundColor = "rgb(250, 100, 100)";
            alert("You Lost! Click 'new Game' to try again!");
        }
    })
})
