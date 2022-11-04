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



document.getElementById('withdraw-btn-tag').addEventListener('click',function(){
    const withdrawInput = document.getElementById('with-input-tag') ;
    const withdraw = withdrawInput.value;
    const withdrawMain = parseFloat(withdraw);

    withdrawInput.value = '';

    if(isNaN(withdrawMain)){
        alert("Please Enter Any Number Of Amount");
        return;
    }
    

    const balanceInput = document.getElementById('total-balance');
    const balance = balanceInput.innerText;
    const balanceMain = parseFloat(balance);

    if(withdraw>balanceMain){
        alert("You Do Not Have Sufficiant Balance");
        return;
    }

    const withdrawText = document.getElementById('total-withdraw') ;
    const withdrawElement = withdrawText.innerText;
    const mainWithdraw = parseFloat(withdrawElement);


    const totalWithdraw = withdrawMain + mainWithdraw;
    withdrawText.innerText =totalWithdraw;


    const totalBalance = balanceMain - withdrawMain;
    balanceInput.innerText = totalBalance;
})