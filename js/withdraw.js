document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawFiled = document.getElementById('usar-withdraw');
    const withdrawAmount = withdrawFiled.value;
    const newWithdrawAmount = parseFloat(withdrawAmount);

    withdrawFiled.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Not A number');
        return;
    }

    const totalFiled = document.getElementById('withdraw-total');
    const totalAmount = totalFiled.innerText;
    const periviousWithdrawmaney = parseFloat(totalAmount);

    const totalWithdrawAmount = periviousWithdrawmaney + newWithdrawAmount;
    totalFiled.innerText = totalWithdrawAmount;

    const blanceFiled = document.getElementById('blance-total')
    const blanceAmount = blanceFiled.innerText;
    const totalBlance = parseFloat (blanceAmount);

    const totalBlanceAmount = totalBlance - newWithdrawAmount;
    blanceFiled.innerText = totalBlanceAmount;
    
})