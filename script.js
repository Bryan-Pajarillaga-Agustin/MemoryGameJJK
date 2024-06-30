let card = document.getElementsByClassName("everyCard")
let chooseCard = document.getElementsByClassName("everyCard-div")
let numberOfTries = 0
let score = 0
let numberOfPicks = 0
let firstPick, div1st
let secondPick, div2nd
let reshuffle = true
let show = true
let timer = 30
let interval
let num
let gameRunning = false
let images 
let listOfPics = {
    default: [
        "Banana.jpg", "Banana.jpg",
        "Coconut.jpg", "Coconut.jpg",
        "Covid-19.jpg", "Covid-19.jpg",
        "Fakewan.jpg", "Fakewan.jpg",
        "Mango.jpg", "Mango.jpg",
        "Pinyaple.jpg", "Pinyaple.jpg"
    ],
    Jjk: [
        "Jjk/Sukumi.jpg", "Jjk/Sukumi.jpg",
        "Jjk/Gojo.jpg", "Jjk/Gojo.jpg",
        "Jjk/Yuta.jpg", "Jjk/Yuta.jpg",
        "Jjk/Yuji.jpg", "Jjk/Yuji.jpg",
        "Jjk/Toji.jpg", "Jjk/Toji.jpg",
        "Jjk/Hakari.jpg", "Jjk/Hakari.jpg",
    ]
}


let PickedSet = listOfPics.default
function ChangeCard(){
    gameRunning = false
    num = num = window.prompt("Select a different set of card: \n Type '1': JJK \n Type '2': fruits")
    if(num == 1){
        PickedSet = listOfPics.Jjk
        timeSet()
    } else {
        PickedSet = listOfPics.default
        timeSet()
    }
}


function updateCards(){
    if(num == 1){
        PickedSet = listOfPics.Jjk
    } else {
        PickedSet = listOfPics.default
    }
    listOfPics = {
        default: [
            "Banana.jpg", "Banana.jpg",
            "Coconut.jpg", "Coconut.jpg",
            "Covid-19.jpg", "Covid-19.jpg",
            "Fakewan.jpg", "Fakewan.jpg",
            "Mango.jpg", "Mango.jpg",
            "Pinyaple.jpg", "Pinyaple.jpg"
        ],
        Jjk: [
            "Jjk/Sukumi.jpg", "Jjk/Sukumi.jpg",
            "Jjk/Gojo.jpg", "Jjk/Gojo.jpg",
            "Jjk/Yuta.jpg", "Jjk/Yuta.jpg",
            "Jjk/Yuji.jpg", "Jjk/Yuji.jpg",
            "Jjk/Toji.jpg", "Jjk/Toji.jpg",
            "Jjk/Hakari.jpg", "Jjk/Hakari.jpg",
        ]
    }
}


function shuffleCards(){
    if(reshuffle){
        gameRunning = true
        updateCards()
        timer = 30
        document.getElementById("Timer").textContent = "Timer: " + timer
        clearInterval(interval)
        firstPick = null
        secondPick = null
        numberOfPicks = 0
        reshuffle = false
        show = true
        numberOfTries = 0
        score = 0
        document.getElementById("score").textContent = "Score: "+ score
        document.getElementById("tries").textContent = "Attempts: " + numberOfTries
        document.getElementById("shuffle").textContent = "Reshuffle" 
        setAsCard()
        setTimeout(() => {
            for(let i = 0; i < 12; i++){
                card[i].style.display = "none";
                chooseCard[i].classList.replace("Picked", "CloseFlip")
                card[i].classList.replace("Picked-image", "CloseFlip-image")
            }
            show = false
            reshuffle = true
            timeSet()
        }, 3000);
    }
}

function setAsCard(){
    updateCards()
    images = PickedSet
    let shuffle = [];
    let index;
    for (let i = 12; i >= 0; i--) {
        index = Math.floor(Math.random(i)*i);
        shuffle.unshift(images[index])
        images.splice(index, 1);
    }
    for(let i = 0; i < 13; i++){
        
        if(i != 12){
            card[i].src = shuffle[i+1];
            card[i].style.display = 'block'
            if(!chooseCard[i].classList.contains("CloseFlip")){
                chooseCard[i].classList.add("Picked")
                card[i].classList.add("Picked-image")
            } else {
                chooseCard[i].classList.replace("CloseFlip","Picked")
                card[i].classList.replace("CloseFlip-image","Picked-image")
            }
            
        }
        
    }
}

function timeSet(){
    if(gameRunning){
        interval = setInterval(()=>{
            timer--
            document.getElementById("Timer").textContent = "Timer: " + timer
            if(timer <= 0){
                alert("TIME'S UP!!! \n NAH, YOU'D LOSE")
                show = true
                clearInterval(interval)
                for(let i = 0; i < 13; i++){
                    card[i].style.display = 'block'
                    if(!chooseCard[i].classList.contains("CloseFlip")){
                        chooseCard[i].classList.add("Picked")
                        card[i].classList.add("Picked-image")
                    } else {
                        chooseCard[i].classList.replace("CloseFlip","Picked")
                        card[i].classList.replace("CloseFlip-image","Picked-image")
                    }
                }
            }
        },1000)
    } else if(!gameRunning){
        setAsCard()
        clearInterval(interval)
        for(let i = 0; i < 12; i++){
            card[i].style.display = 'block'
            if(!chooseCard[i].classList.contains("CloseFlip")){
                chooseCard[i].classList.add("Picked")
                card[i].classList.add("Picked-image")
            } else {
                chooseCard[i].classList.replace("CloseFlip","Picked")
                card[i].classList.replace("CloseFlip-image","Picked-image")
            }
        }
    }
}


function each(par){
    if(!show){
        numberOfPicks++
        if(numberOfPicks == 1){
            card[par].style.display = "block"
            firstPick = card[par]
            div1st = chooseCard[par]
            div1st.classList.add("Picked")
            if(div1st.classList.contains("CloseFlip")){
                div1st.classList.replace("CloseFlip", "Picked")
                firstPick.classList.replace("CloseFlip-image", "Picked-image")
            } else {
                div1st.classList.add("Picked")
                firstPick.classList.add("Picked-image")
            }
        }
        if(numberOfPicks == 2){
            card[par].style.display = "block"
            secondPick = card[par]
            div2nd = chooseCard[par]
            
            if(div2nd.classList.contains("CloseFlip")){
                div2nd.classList.replace("CloseFlip", "Picked")
                secondPick.classList.replace("CloseFlip-image", "Picked")
            } else {
                div2nd.classList.add("Picked")
                secondPick.classList.add("Picked-image")
            }

            if(secondPick == firstPick){
                numberOfPicks--
                secondPick = null
            }
        }
    
        if(numberOfPicks == 2 && secondPick != firstPick){
            reshuffle
            if(firstPick.src == secondPick.src){
                score++
                document.getElementById("score").textContent = "Score: "+score
                numberOfPicks = 0
                
            } else {
                show = true
                numberOfPicks = 0
                setTimeout(() => {
                    firstPick.style.display = "none"
                    secondPick.style.display = "none"
                    numberOfTries++
                    document.getElementById("tries").textContent = "Attempts: " + numberOfTries
                    div1st.classList.replace("Picked", "CloseFlip")
                    firstPick.classList.replace("Picked-image", "CloseFlip-image")
                    div2nd.classList.replace("Picked","CloseFlip")
                    secondPick.classList.replace("Picked-image", "CloseFlip-image")
                    show = false
                }, 1000);
            }
        }
        if(score == 6){
            reshuffle = false
            setTimeout(() => {
                alert("Nah, You'd Win!")
                clearInterval(interval)
                gameRunning = false
                reshuffle = true
            }, 500);
            
        }
    }
}
