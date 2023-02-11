document.getElementById('btn-deposit').addEventListener('click',function(){

    const depositFiled = document.getElementById('deposit-field');

    const previousDepositAmount = depositFiled.value;
   const depositAmount = parseFloat(previousDepositAmount)

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalNumber = depositTotalElement.innerText;
    const depositAmountPrevious = parseFloat(previousDepositTotalNumber);

    const totalDeposit = depositAmount + depositAmountPrevious;

    depositTotalElement.innerText = totalDeposit;
   
    // balance er kam korram 

    const balanceTotalElement = document.getElementById('balance-total');

    const previousBalanceTotalN = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalN)

    const currentBalanceTotal = previousBalanceTotal + totalDeposit;

    balanceTotalElement.innerText = currentBalanceTotal;



    depositFiled.value='';
})