// Login button event handler

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

// Deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
    const depositNumber = getInputNumber('depositAmount');
    
    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById('currentDeposit').innerText = totalDeposit;
    
    updateSpanTag('currentDeposit', depositNumber);
    updateSpanTag('currentBalance', depositNumber);
    
    // const currentBalance = document.getElementById('currentBalance').innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById('currentBalance').innerText = totalBalance;

    document.getElementById('depositAmount').value = '';

})

// Withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdrawAmount');
    
    updateSpanTag('currentWithdraw', withdrawNumber);
    updateSpanTag('currentBalance', -1 * withdrawNumber);

    document.getElementById('withdrawAmount').value = '';

});




function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanTag(id, addedNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = addedNumber + currentNumber;
    document.getElementById(id).innerText = total;
}