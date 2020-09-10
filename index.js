document.querySelector('.submit').addEventListener("click",event=>{
    event.preventDefault()
    
    if(!(checkAgeValue() && checkEmailValue() && checkCheckBox())){
        alert("Erro no preenchimento do cadastro")
    }else{
        alert("dados coletados")
    }
    
})

const checkAgeValue = () =>{
        if(10 < parseInt(document.querySelector('.age').value) && parseInt(document.querySelector('.age').value) < 90 && document.querySelector('.age').value != ""){
            return true
        }else{
            alert("A idade deve estar entre 10 e 90 anos")
            return false
    }
}


const checkEmailValue = () =>{
     if(document.querySelector('.email').value.indexOf("@")>-1){
        return true
     }else{
        alert("Você deve inserir um email valido")
         return false
     }
}

const checkCheckBox = () =>{
    let checkboxes = document.querySelectorAll('.checkbox')
    let isChecked = 0
    for(checkbox in checkboxes){
        if(checkboxes[checkbox].checked){
            isChecked++
        }
        
    }
    if(isChecked > 3){
        alert("Você deve marcar no máximo 3 opções")
        return false
    }else{
        
        return true
    }
}