/**
 * created two valuable to store scores from both user and 
 * the computer each time selection is made
 */
let userScore = 0;
let compScore = 0;


/**
 * This function creates a div and three button elements in the html document
 * @returns a div and nested three buttons
 */
function createPage(){
    const div = document.createElement("div");
    div.setAttribute("class", "btn-container")
    for(let i = 0; i < 3; i++){
        const btn = document.createElement("button");
        div.appendChild(btn)
    }
    return document.body.appendChild(div);
}

/**
 * This function creates text inside the buttons
 */
function btnContent(){
    let btnText = ["Restart", "rock", "paper", "scissors"];
    let btn = document.body.querySelectorAll("button");
    for(let i = 0; i < btn.length; i++){
      btn[i].textContent = btnText[i];
    }
}

/**
 * 
 * @returns 
 */
let getCompChoice = () =>{
    let options = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

let game = () => {
    let user = document.querySelector(".userScore");
    const comp = document.querySelector(".computerScore");
    const result = document.querySelector(".result");
    const result1 = document.querySelector(".result1");
    const result2 = document.querySelector(".result2");
    const btn = document.querySelectorAll("button");

    btn.forEach(item => {
        item.addEventListener("click", () => {
            playGround(item.textContent, getCompChoice());

            if(userScore >= 5 && userScore > compScore){
                result1.textContent = "you won"
                user.style.display = "none"
                comp.style.display = "none"
                result.style.display = "none"     
                
            }
            else if (compScore >= 5 && compScore > userScore){
                result2.textContent = "computer won"
                user.style.display = "none"
                comp.style.display = "none"
                result.style.display = "none"  
            }
        })
    })

}

let playGround = (userSelsction, compSelection) => {
    const result = document.querySelector(".result");
    const user = document.querySelector(".userScore");
    const comp = document.querySelector(".computerScore")
    if(userSelsction === compSelection){
        result.textContent = result.textContent = `user: ${userSelsction}; comp: ${compSelection} It's a Tie`
    }
    else if (userSelsction == "rock"){
        if(compSelection == "scissors"){
            result.textContent = `user: ${userSelsction}; comp: ${compSelection}`
            userScore++;
            user.textContent = userScore;

        }
        else{
            result.textContent = `user: ${userSelsction}; comp: ${compSelection}`
            compScore++;
            comp.textContent = compScore;
        }
    }
    else if (userSelsction == "paper"){
        if(compSelection == "rock"){
            result.textContent = `user: ${userSelsction}; comp: ${compSelection}`
            userScore++;
            user.textContent = userScore;

        }
        else {
            result.textContent = `user: ${userSelsction}; comp: ${compSelection}`
            compScore++;
            comp.textContent = compScore;

        }
    }
    else if (userSelsction == "scissors"){
        if(compSelection == "paper"){
            result.textContent = `user: ${userSelsction}; comp: ${compSelection}`
            userScore++;
            user.textContent = userScore;

        }
        else {
            result.textContent = `user: ${userSelsction}; comp: ${compSelection}`
            compScore++;
            comp.textContent = compScore;
        }
    }
    
}

function restart(){
    let rBtn = document.querySelector(".restart");
    rBtn.addEventListener("click", () => {
        window.location.reload()
    })
}

createPage()
btnContent()
game();
restart()
