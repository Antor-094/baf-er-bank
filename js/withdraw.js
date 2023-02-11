

document.getElementById('btn-withdraw').addEventListener('click',function(){
  
    const withdrawBalanceElement = document.getElementById('btn-withdraw-now');
    const withdrawBalanceAmountN = withdrawBalanceElement.value;
    const withdrawBalanceAmount = parseFloat(withdrawBalanceAmountN);

    
    const previousWithdrawBalance = document.getElementById('withdraw-amount-now');
    const previousWithdrawBalanceN = previousWithdrawBalance.innerText;
    const previousWithdrawBalanceF = parseFloat(previousWithdrawBalanceN)
   
    const finalWithdrawBalance = withdrawBalanceAmount + previousWithdrawBalanceF;

    previousWithdrawBalance.innerText = finalWithdrawBalance;


    const balanceTotalElement = document.getElementById('balance-total');

    const previousBalanceTotalN = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalN)

    const currentBalanceTotal = previousBalanceTotal - finalWithdrawBalance;

    balanceTotalElement.innerText = currentBalanceTotal;
    
    withdrawBalanceElement.value = ''

})