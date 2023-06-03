function myfunc() {
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    if(
        (b1 == 'x' || b1 == 'X') &&
        (b2 == 'x' || b2 == 'X') &&
        (b3 == 'x' || b3 == 'X')
    ){
        document.getElementById('print').innerHTML = "Jogador X ganhou";
        document.getElementById("b4").disable = true;
        document.getElementById("b5").disable = true;
        document.getElementById("b6").disable = true;
        document.getElementById("b7").disable = true;
        document.getElementById("b8").disable = true;
        document.getElementById("b9").disable = true;
        window.alert('Jogador X ganhou');
    }
        
    else if(
        (b4=='x' || b4=='X') &&
        (b5=='x' || b5=='X') &&
        (b6=='x' || b6=='X')
    ){
        document.getElementById('print').innerHTML = "Jogador X ganhou";
        document.getElementById("b1").disable = true;
        document.getElementById("b2").disable = true;
        document.getElementById("b3").disable = true;
        // document.getElementById("b4").disable = true;
        // document.getElementById("b5").disable = true;
        // document.getElementById("b6").disable = true;
        document.getElementById("b7").disable = true;
        document.getElementById("b8").disable = true;
        document.getElementById("b9").disable = true;
        window.alert('Jogador X ganhou');
    }
    
    else if(
        (b7=='x' || b7=='X') &&
        (b8=='x' || b8=='X') &&
        (b9=='x' || b9=='X')
    ){
        document.getElementById('print').innerHTML = "Jogador X ganhou";
        document.getElementById("b1").disable = true;
        document.getElementById("b2").disable = true;
        document.getElementById("b3").disable = true;
        document.getElementById("b4").disable = true;
        document.getElementById("b5").disable = true;
        document.getElementById("b6").disable = true;
        // document.getElementById("b7").disable = true;
        // document.getElementById("b8").disable = true;
        // document.getElementById("b9").disable = true;
        window.alert('Jogador X ganhou');
    }
    
    else if(
        (b1=='x' || b1=='X') &&
        (b4=='x' || b4=='X') &&
        (b7=='x' || b7=='X')
    ){
        document.getElementById('print').innerHTML = "Jogador X ganhou";
        // document.getElementById("b1").disable = true;
        document.getElementById("b2").disable = true;
        document.getElementById("b3").disable = true;
        // document.getElementById("b4").disable = true;
        document.getElementById("b5").disable = true;
        document.getElementById("b6").disable = true;
        // document.getElementById("b7").disable = true;
        document.getElementById("b8").disable = true;
        document.getElementById("b9").disable = true;
        window.alert('Jogador X ganhou');
    }
    
    else if(
        (b2=='x' || b2=='X') &&
        (b5=='x' || b5=='X') &&
        (b8=='x' || b8=='X')
    ){
        document.getElementById('print').innerHTML = "Jogador X ganhou";
        document.getElementById("b1").disable = true;
        // document.getElementById("b2").disable = true;
        document.getElementById("b3").disable = true;
        document.getElementById("b4").disable = true;
        // document.getElementById("b5").disable = true;
        document.getElementById("b6").disable = true;
        document.getElementById("b7").disable = true;
        // document.getElementById("b8").disable = true;
        document.getElementById("b9").disable = true;
        window.alert('Jogador X ganhou');
    }
    
    else if(
        (b3=='x' || b3=='X') &&
        (b6=='x' || b6=='X') &&
        (b9=='x' || b9=='X')
    ){
        document.getElementById('print').innerHTML = "Jogador X ganhou";
        document.getElementById("b1").disable = true;
        document.getElementById("b2").disable = true;
        // document.getElementById("b3").disable = true;
        document.getElementById("b4").disable = true;
        document.getElementById("b5").disable = true;
        // document.getElementById("b6").disable = true;
        document.getElementById("b7").disable = true;
        document.getElementById("b8").disable = true;
        // document.getElementById("b9").disable = true;
        window.alert('Jogador X ganhou');
    }
    
    else if(
        (b1=='x' || b1=='X') &&
        (b5=='x' || b5=='X') &&
        (b9=='x' || b9=='X')
    ){
        document.getElementById('print').innerHTML = "Jogador X ganhou";
        // document.getElementById("b1").disable = true;
        document.getElementById("b2").disable = true;
        document.getElementById("b3").disable = true;
        document.getElementById("b4").disable = true;
        // document.getElementById("b5").disable = true;
        document.getElementById("b6").disable = true;
        document.getElementById("b7").disable = true;
        document.getElementById("b8").disable = true;
        // document.getElementById("b9").disable = true;
        window.alert('Jogador X ganhou');
    }
    
    else if(
        (b3=='x' || b3=='X') &&
        (b5=='x' || b5=='X') &&
        (b7=='x' || b7=='X')
    ){
        document.getElementById('print').innerHTML = "Jogador X ganhou";
        document.getElementById("b1").disable = true;
        document.getElementById("b2").disable = true;
        // document.getElementById("b3").disable = true;
        document.getElementById("b4").disable = true;
        // document.getElementById("b5").disable = true;
        document.getElementById("b6").disable = true;
        // document.getElementById("b7").disable = true;
        document.getElementById("b8").disable = true;
        document.getElementById("b9").disable = true;
        window.alert('Jogador X ganhou');
    }
//player 0
    else if(
        (b1 == '0' || b1 == '0') &&
        (b2 == '0' || b2 == '0') &&
        (b3 == '0' || b3 == '0')
    ){
        document.getElementById('print').innerHTML = "Jogador 0 ganhou";
        document.getElementById("b4").disable = true;
        document.getElementById("b5").disable = true;
        document.getElementById("b6").disable = true;
        document.getElementById("b7").disable = true;
        document.getElementById("b8").disable = true;
        document.getElementById("b9").disable = true;
        window.alert('Jogador 0 ganhou');
    }
        
    else if(
        (b4=='0' || b4=='0') &&
        (b5=='0' || b5=='0') &&
        (b6=='0' || b6=='0')
    ){
        document.getElementById('print').innerHTML = "Jogador 0 ganhou";
        document.getElementById("b1").disable = true;
        document.getElementById("b2").disable = true;
        document.getElementById("b3").disable = true;
        // document.getElementById("b4").disable = true;
        // document.getElementById("b5").disable = true;
        // document.getElementById("b6").disable = true;
        document.getElementById("b7").disable = true;
        document.getElementById("b8").disable = true;
        document.getElementById("b9").disable = true;
        window.alert('Jogador 0 ganhou');
    }
    
    else if(
        (b7=='0' || b7=='0') &&
        (b8=='0' || b8=='0') &&
        (b9=='0' || b9=='0')
    ){
        document.getElementById('print').innerHTML = "Jogador 0 ganhou";
        document.getElementById("b1").disable = true;
        document.getElementById("b2").disable = true;
        document.getElementById("b3").disable = true;
        document.getElementById("b4").disable = true;
        document.getElementById("b5").disable = true;
        document.getElementById("b6").disable = true;
        // document.getElementById("b7").disable = true;
        // document.getElementById("b8").disable = true;
        // document.getElementById("b9").disable = true;
        window.alert('Jogador 0 ganhou');
    }
    
    else if(
        (b1=='0' || b1=='0') &&
        (b4=='0' || b4=='0') &&
        (b7=='0' || b7=='0')
    ){
        document.getElementById('print').innerHTML = "Jogador 0 ganhou";
        // document.getElementById("b1").disable = true;
        document.getElementById("b2").disable = true;
        document.getElementById("b3").disable = true;
        // document.getElementById("b4").disable = true;
        document.getElementById("b5").disable = true;
        document.getElementById("b6").disable = true;
        // document.getElementById("b7").disable = true;
        document.getElementById("b8").disable = true;
        document.getElementById("b9").disable = true;
        window.alert('Jogador 0 ganhou');
    }
    
    else if(
        (b2=='0' || b2=='0') &&
        (b5=='0' || b5=='0') &&
        (b8=='0' || b8=='0')
    ){
        document.getElementById('print').innerHTML = "Jogador 0 ganhou";
        document.getElementById("b1").disable = true;
        // document.getElementById("b2").disable = true;
        document.getElementById("b3").disable = true;
        document.getElementById("b4").disable = true;
        // document.getElementById("b5").disable = true;
        document.getElementById("b6").disable = true;
        document.getElementById("b7").disable = true;
        // document.getElementById("b8").disable = true;
        document.getElementById("b9").disable = true;
        window.alert('Jogador 0 ganhou');
    }
    
    else if(
        (b3=='0' || b3=='0') &&
        (b6=='0' || b6=='0') &&
        (b9=='0' || b9=='0')
    ){
        document.getElementById('print').innerHTML = "Jogador 0 ganhou";
        document.getElementById("b1").disable = true;
        document.getElementById("b2").disable = true;
        // document.getElementById("b3").disable = true;
        document.getElementById("b4").disable = true;
        document.getElementById("b5").disable = true;
        // document.getElementById("b6").disable = true;
        document.getElementById("b7").disable = true;
        document.getElementById("b8").disable = true;
        // document.getElementById("b9").disable = true;
        window.alert('Jogador 0 ganhou');
    }
    
    else if(
        (b1=='0' || b1=='0') &&
        (b5=='0' || b5=='0') &&
        (b9=='0' || b9=='0')
    ){
        document.getElementById('print').innerHTML = "Jogador 0 ganhou";
        // document.getElementById("b1").disable = true;
        document.getElementById("b2").disable = true;
        document.getElementById("b3").disable = true;
        document.getElementById("b4").disable = true;
        // document.getElementById("b5").disable = true;
        document.getElementById("b6").disable = true;
        document.getElementById("b7").disable = true;
        document.getElementById("b8").disable = true;
        // document.getElementById("b9").disable = true;
        window.alert('Jogador 0 ganhou');
        }
    
    else if(
        (b3=='0' || b3=='0') &&
        (b5=='0' || b5=='0') &&
        (b7=='0' || b7=='0'))
        {
        document.getElementById('print').innerHTML = "Jogador 0 ganhou";
        document.getElementById("b1").disable = true;
        document.getElementById("b2").disable = true;
        // document.getElementById("b3").disable = true;
        document.getElementById("b4").disable = true;
        // document.getElementById("b5").disable = true;
        document.getElementById("b6").disable = true;
        // document.getElementById("b7").disable = true;
        document.getElementById("b8").disable = true;
        document.getElementById("b9").disable = true;

        window.alert('Jogador 0 ganhou');
        }

        //Verificar o jogador 0

        else if (
            (b1=='X' || b1 == '0') &&
            (b2=='X' || b2 == '0') &&
            (b3=='X' || b3 == '0') &&
            (b4=='X' || b4 == '0') &&
            (b5=='X' || b5 == '0') &&
            (b6=='X' || b6 == '0') &&
            (b7=='X' || b7 == '0') &&
            (b8=='X' || b8 == '0') &&
            (b9=='X' || b9 == '0')
            )
            {
                document.getElementById('print').innerHTML = "Beleza...";
                window.alert('Beleza...')
            }
        else{
            //aqui vamos exibir o resultado
            if(flag ==1){
                document.getElementById('print').innerHTML = "Jogador X";
            }
        }
}

//reset the game
function myReset()
{
    location.reload()
    {
        b1 = document.getElementById("b1").value = '';
        b2 = document.getElementById("b2").value = '';
        b3 = document.getElementById("b3").value = '';
        b4 = document.getElementById("b4").value = '';
        b5 = document.getElementById("b5").value = '';
        b6 = document.getElementById("b6").value = '';
        b7 = document.getElementById("b7").value = '';
        b8 = document.getElementById("b8").value = '';
        b9 = document.getElementById("b9").value = '';
    }
}

function myFunc()