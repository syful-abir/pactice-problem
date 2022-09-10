document.getElementById('btn-maney').addEventListener('click',function(){

    const sendManeyFiled = document.getElementById('usar-maney');
    const sendManeyAmount = sendManeyFiled.value;
    const newSendManeyAmount = parseFloat(sendManeyAmount);

    sendManeyFiled.value = '';

    if(isNaN(newSendManeyAmount)){
        alert('Not A number');
        return;
    }

    const totalFiled = document.getElementById('maney-total');
    const totalAmount = totalFiled.innerText;
    const periviousSendManeymaney = parseFloat(totalAmount);

    const totalSendManeyAmount = periviousSendManeymaney + newSendManeyAmount;
    totalFiled.innerText = totalSendManeyAmount;

    const blanceFiled = document.getElementById('blance-total')
    const blanceAmount = blanceFiled.innerText;
    const totalBlance = parseFloat (blanceAmount);

    const totalBlanceAmount = totalBlance - newSendManeyAmount;
    blanceFiled.innerText = totalBlanceAmount;
    
})