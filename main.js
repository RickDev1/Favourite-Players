// console.log('hello js');
// select-V
// document.getElementById('btn-1').addEventListener('click', function () {
//     const playerOneField = document.getElementById('messi');
//     const playerName = document.getElementById('player1');
//     const playerValue = playerName.innerText;
//     playerOneField.value = playerValue


// })
// perPlayer
document.getElementById('btn-calc').addEventListener('click', function () {
    const NumberField = document.getElementById('inputNumber');
    const numberInputstring = NumberField.value;
    const numberInput = parseFloat(numberInputstring);
    const currentnumber = numberInput * 5;
    const price = document.getElementById('dollerInput');
    const priceElement = price.innerText;


    price.innerText = currentnumber;
    NumberField.value = '';

})
// TotalCost
document.getElementById('btn-calcTotal').addEventListener('click', function () {
    const ManagerField = document.getElementById('managerInput');
    const ManagerTextString = ManagerField.value;
    const ManagerText = parseFloat(ManagerTextString);
    const CoachField = document.getElementById('coachInput');
    const CoachTextString = CoachField.value;
    const CoachText = parseFloat(CoachTextString);



    const TotalCost = ManagerText + CoachText;


    const TotalValue = document.getElementById('TotalDoller');
    const TotalValueInner = TotalValue.innerText;
    TotalValue.innerText = TotalCost;
    ManagerField.value = '';
    CoachField.value = '';

})