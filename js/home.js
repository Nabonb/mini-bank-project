document.getElementById('button-tag').addEventListener('click',function(){
    const emailInput = document.getElementById('email-input-tag');
    const email = emailInput.value;
    
    const passInput = document.getElementById('pass-input-tag');
    const password = passInput.value;

    if(email =='nabobarua2@gmail.com' && password=='4206251'){
        window.location.href='dashboard.html' ;//javascript dia onno akhta html page dia onno page a japowar system
    }
    else{
        alert('Please Enter Valid Email Or Password');
    }

})