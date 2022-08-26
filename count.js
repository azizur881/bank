document.getElementById('deposit-btn').addEventListener('click',function(){
    //deposit value
        let deposit = document.getElementById('deposit-input').value 
         deposit=parseFloat(deposit)

        let depositOutputText= document.getElementById('deposit-output').innerText
        let depositOutput=parseFloat(depositOutputText)
    //deposit output show
        document.getElementById('deposit-output').innerText = deposit + depositOutput
        console.log(deposit)
        document.getElementById('deposit-input').value=('')
       

        //balance here
        let balanceText = document.getElementById('balance-output').innerText
        let balanceOutput=parseFloat(balanceText)
        document.getElementById('balance-output').innerText = deposit + balanceOutput

})
document.getElementById('withdraw-btn').addEventListener('click',function(){
    let withdraw = document.getElementById('withdraw-input').value 
         withdraw=parseFloat(withdraw)

        let withdrawOutputText= document.getElementById('withdraw-output').innerText
        let withdrawOutput=parseFloat(withdrawOutputText)
    //deposit output show
        document.getElementById('withdraw-output').innerText = withdraw + withdrawOutput
        
        document.getElementById('withdraw-input').value=('')
       

        //balance here
        let balanceText = document.getElementById('balance-output').innerText
        let balanceOutput=parseFloat(balanceText)
        document.getElementById('balance-output').innerText = balanceOutput - withdraw
       let btn= document.getElementById('withdraw-btn')
       
        if(balanceOutput<withdraw){
            btn.disabled=true
            document.getElementById('balance-output').innerText = balanceOutput
            document.getElementById('withdraw-output').innerText = withdrawOutput
        }
        else if(balanceOutput>=withdraw){
            btn.disabled=false
        }
})