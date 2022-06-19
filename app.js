let multiplechoice = document.querySelectorAll("#multi-choice");
let popups = document.querySelectorAll("#pop-up1 , #pop-up2");
let lifeqform = document.querySelector("#life_question");
let all_x_btns = document.querySelectorAll(".cancel");

for (button of multiplechoice)
{
    button.addEventListener("click", (button) => {

        // adds the default color to the active button on load
        // removes the active-btn selector from the first active button if any button clicked
        // then adds the active-btn selector to the button clicked and changes to the color given to it in the if statements

        popups[0].classList.add("hide");
        popups[1].classList.add("hide");

        document.querySelector(".active-btn").style.backgroundColor = "#d9edff";
        document.querySelector(".active-btn").style.color = "black";
        document.querySelector(".active-btn").classList.remove("active-btn");
        button.target.classList.add("active-btn");

        if (button.target.innerHTML == "Abuja" && button.target.classList.value == "active-btn")
        {
            button.target.style.backgroundColor = "rgba(0, 247, 8, 0.9)";
            button.target.style.color = "blue";
            popups[0].classList.remove("hide");
        }

        if (button.target.innerHTML != "Abuja" && button.target.classList.value == "active-btn")
        {
            button.target.style.backgroundColor = "rgba(255, 107, 107, 0.9)";
            button.target.style.color = "blue";
            popups[1].classList.remove("hide");
        }
    });
}



lifeqform.addEventListener("submit", (event) => {

    event.preventDefault()
    popups[2].classList.add("hide");
    popups[3].classList.add("hide");
    document.querySelector("#anslifequestion").style.backgroundColor = "field";

    // background-color: field;

    let life_ans = document.forms["life_question"]["anslife?"].value;
    if (life_ans == "Destructive distillation")
    {
        popups[2].classList.remove("hide");
        document.querySelector("#anslifequestion").style.backgroundColor = "rgba(45, 237, 38, 0.2)";
        console.log("correct");
    }
    else
    {
        document.querySelector("#anslifequestion").style.backgroundColor = "rgba(255, 107, 107, 0.2)";
        popups[3].classList.remove("hide");
    }
})

for (x_button of all_x_btns)
{
    x_button.addEventListener("click", (cancel) => {
    cancel.target.parentNode.classList.add("hide");
    console.log(cancel.target.parentNode.classList);
    });
}
