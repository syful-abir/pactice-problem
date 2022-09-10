document.getElementById('btn-deposit').addEventListener('click',function(){

    const depositeFiled = document.getElementById('usar-deposit');
    const depositAmount = depositeFiled.value;
    const newDepositeAmount = parseFloat(depositAmount);

    depositeFiled.value = '';

    if(isNaN(newDepositeAmount)){
        alert('Not A number');
        return;
    }

    const totalFiled = document.getElementById('deposit-total');
    const totalAmount = totalFiled.innerText;
    const periviousDepositemaney = parseFloat(totalAmount);

    const totalDepositeAmount = periviousDepositemaney + newDepositeAmount;
    totalFiled.innerText = totalDepositeAmount;

    const blanceFiled = document.getElementById('blance-total')
    const blanceAmount = blanceFiled.innerText;
    const totalBlance = parseFloat (blanceAmount);

    const totalBlanceAmount = totalBlance + newDepositeAmount;
    blanceFiled.innerText = totalBlanceAmount;

    
})