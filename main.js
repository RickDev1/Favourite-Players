// console.log('hello js');
// select-V

document.getElementById('btn-1').addEventListener('click', function () {
    const PlayerField = document.getElementById('messi');
    const playerOne = PlayerField.innerText;

    const InputPlayer = document.getElementById('player1');
    const InputPlayerOne = InputPlayer.innerText;
    InputPlayer.innerText = playerOne;


})
document.getElementById('btn-2').addEventListener('click', function () {
    const PlayerField = document.getElementById('neymar');
    const playerOne = PlayerField.innerText;
    const InputPlayer = document.getElementById('player2');
    const InputPlayerOne = InputPlayer.innerText;
    InputPlayer.innerText = playerOne;


})
document.getElementById('btn-3').addEventListener('click', function () {
    const PlayerField = document.getElementById('mbappe');
    const playerOne = PlayerField.innerText;
    const InputPlayer = document.getElementById('player3');
    const InputPlayerOne = InputPlayer.innerText;
    InputPlayer.innerText = playerOne;


})
document.getElementById('btn-4').addEventListener('click', function () {
    const PlayerField = document.getElementById('victor');
    const playerOne = PlayerField.innerText;
    const InputPlayer = document.getElementById('player4');
    const InputPlayerOne = InputPlayer.innerText;
    InputPlayer.innerText = playerOne;


})
document.getElementById('btn-5').addEventListener('click', function () {
    const PlayerField = document.getElementById('ramos');
    const playerOne = PlayerField.innerText;
    const InputPlayer = document.getElementById('player5');
    const InputPlayerOne = InputPlayer.innerText;
    InputPlayer.innerText = playerOne;


})
document.getElementById('btn-6').addEventListener('click', function () {
    const PlayerField = document.getElementById('sanches');
    const playerOne = PlayerField.innerText;
    const InputPlayer = document.getElementById('player5');
    const InputPlayerOne = InputPlayer.innerText;
    InputPlayer.innerText = playerOne;


})

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

    const price = document.getElementById('dollerInput');

    const priceElementstring = price.innerText;
    const priceElement = parseFloat(priceElementstring);


    const TotalCost = priceElement + ManagerText + CoachText;


    const TotalValue = document.getElementById('TotalDoller');
    const TotalValueInner = TotalValue.innerText;
    TotalValue.innerText = TotalCost;
    ManagerField.value = '';
    CoachField.value = '';

})