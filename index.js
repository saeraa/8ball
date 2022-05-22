const btn = document.getElementById("button")
const inp = document.getElementById("input")
const btnClear = document.getElementById("clear")
const textDisplay = document.getElementById("ball-inner")
const ball = document.getElementById("ball-container")

btn.addEventListener("click", askAQuestion)
btnClear.addEventListener("click", () => {
    inp.value = ""
    textDisplay.style.fontSize = "4rem"
    textDisplay.textContent = "8"
    })

async function askAQuestion() {
    const question = encodeURIComponent(inp.value)
    const url = "https://8ball.delegator.com/magic/JSON/" + question;
    const response = await fetch(url)
    const data = await response.json()
    textDisplay.style.fontSize = "1rem"
    textDisplay.innerText = data.magic.answer
    
    if (data.magic.type == "Contrary") {
        ball.classList.add("animate__animated", "animate__shakeX")
        removeAnims()
    } else if (data.magic.type == "Affirmative") {
        ball.classList.add("animate__animated", "animate__shakeY")
        removeAnims()
    } else {
        ball.classList.add("animate__animated", "animate__swing")
        removeAnims()
    }

}

function removeAnims() {
    setTimeout(() => ball.classList.value = "", 1500)
}