const buttons = document.querySelectorAll("button[data-key]")
// console.log(buttons)

const removery = (e)=>{
    const index = e.target.dataset.key;
    // console.log(index)
    document.querySelector(`li[data-key="${index}"]`).remove()

    e.target.parentNode.remove();

}


buttons.forEach(btn=> btn.addEventListener("click", removery))
