function checkInputs(){
  var inputEmail = document.getElementById('inputEmail');
  var inputSenha = document.getElementById('inputSenha');
  
  if(inputEmail.value === undefined || inputEmail.value === '' || inputEmail.value === null){
    console.log("Entrou no Rafael");
    document.getElementById('avisoPreenchimento1').style.visibility = "visible";
  }

  if(inputSenha.value === undefined || inputSenha.value === '' || inputSenha.value === null){
    console.log("Entrou no Daniel");
    document.getElementById('avisoPreenchimento2').style.visibility = "visible";

  }

  if (inputEmail.value != '' && inputSenha.value != '' ) {
    window.open('index.html');
  }

}


function checkNullInputs(){

  var inputEmail = document.getElementById('inputEmail');
  var inputSenha = document.getElementById('inputSenha');
  
  if (inputEmail.value != ''){
    document.getElementById('avisoPreenchimento1').style.visibility = "hidden";
  }
  if (inputSenha.value != ''){
    document.getElementById('avisoPreenchimento2').style.visibility = "hidden";
  }
}
