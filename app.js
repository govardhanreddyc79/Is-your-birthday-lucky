// const dateOfBirth = document.querySelector("#date-of-birth");
// const luckyNumber = document.querySelector("#lucky-number");
// const btnCheck = document.querySelector("#check-number");
// const outputMessage = document.querySelector("#opt-message");

const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");

checkNumberButton.addEventListener('click',function getValues(){
  console.log(dateOfBirth.value,luckyNumber.value);
})

btnCheck.addEventListener("click", function clickEventHandler(){
    var birthdate = dateOfBirth.value.replaceAll('-','')
    var sum =0
    for(i=0;birthdate.length;i++){
        sum = sum + birthdate[i]
    checkLuckyUnlucky(sum)
    }
})

function checkLuckyUnlucky(totalSum){
    if(totalSum%luckyNumber.value === 0){
        showMessage( luckyNumber.value + "is a lucky number!! 🥳🥳🥳")
    }else{
        showMessage(luckyNumber.value + "is not lucky number!! 😞😞")
    }
}

function showMessage(message){
    message.style.display = "block";
    message.innerText = message

}