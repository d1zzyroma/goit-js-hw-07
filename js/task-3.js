const input = document.getElementById("name-input")

const output = document.getElementById("name-output")


input.addEventListener("input", () => {

    const inputValueTrimmed = input.value.trim()

    if(inputValueTrimmed){
        output.textContent = inputValueTrimmed;
    }else{
        output.textContent = "Anonymous"
    }
})