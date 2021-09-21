const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const btnCheck = document.querySelector("#check-btn");
const outputMessage = document.querySelector("#opt-message");


btnCheck.addEventListener("click", function clickEventHandler(){
    const date = dateOfBirth.value
    const numberToCheck = luckyNumber.value
    if(date && numberToCheck){
        if(numberToCheck>0)
        {
            var sumOfDate =  calculateSum(date)
            checkLuckyUnlucky(sumOfDate, numberToCheck)
        }else{
            showMessage("The input values should be positive")
        }
    }
    else{
        alert("Please enter both the fields")
        }
    }
)

function calculateSum(date){
    let sum = 0
    date = date.replaceAll('-','')
    for(let digit of date){
        sum = sum + Number(digit);

    }
    return sum

}
function checkLuckyUnlucky(sumOfDate, numberToCheck){
    if(sumOfDate % numberToCheck === 0){
        showMessage("your birthday is lucky !! 🥳🥳🥳")
    }else{
        showMessage("your birthday is NOT lucky, so sad !! 😞😞")
    }
}

function showMessage(msg){
    outputMessage.innerText = msg

}