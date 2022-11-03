document.getElementById('deposit-btn-tag').addEventListener('click',function(){
    const depoInput= document.getElementById('depo-input-tag');
    const deposit = depoInput.value;
    const depositMain = parseFloat(deposit);
    
    depoInput.value='';

    if(isNaN(depositMain)){
        alert("Please Enter Any Number Of Amount");
        return;
    }
    
    const depoTotal = document.getElementById('total-depo');
    const depo = depoTotal.innerText;
    const depoMain = parseFloat(depo);
    

    const totalDepo = depositMain + depoMain;
    depoTotal.innerText = totalDepo;
    
    
    const balanceInput = document.getElementById('total-balance');
    const balance = balanceInput.innerText;
    const balanceMain = parseFloat(balance);


    const totalBalance = depositMain + balanceMain;
    balanceInput.innerText = totalBalance;

})