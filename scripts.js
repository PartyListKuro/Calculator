const DisplayProp = document.querySelector('.display');
const OnDisplay = document.createElement('p');
const FinalAns = document.querySelector('.answers');
let Num1 = 0;
let Num2= 0;

function operate(N1=0, N2=0, Func='+'){
    if (Func == '+'){
        console.log(N1+N2)
        return (parseInt(N1)+parseInt(N2));
    }
    else if (Func == '-'){
        console.log(N1-N2)
        return (N1-N2);
    }
    else if (Func == '/'){
        console.log(N1/N2)
        return (N1/N2);
    }
    else if (Func == '*'){
        console.log(N1*N2)
        return (N1*N2);
    }
}

const Buttons = document.querySelectorAll('.buttons');
Buttons.forEach(key => {key.addEventListener('click',event => {ShowNum(event.target.textContent)})})


function ShowNum(Num){
    let text = Num.toString();
    console.log(text);
    if (text== '+'||text== '/'||text== '*'||text== '-'|| text == '='){
        if(Num1 == 0 && text != '*' && text != '/' && text!= '='){
            let displayanswer = operate(parseInt(OnDisplay.textContent), Num1 , text);
            Num1 = OnDisplay.textContent;
            OnDisplay.textContent = `${displayanswer} ${text} `;
            DisplayProp.appendChild(OnDisplay).classList.add('ops');
            return console.log('Success')
        }
        else if(Num1 == 0 && text == '*'||Num1 == 0 && text == '/'){
            let displayanswer = operate(parseInt(OnDisplay.textContent), 1 , text);
            Num1 = OnDisplay.textContent;
            OnDisplay.textContent = `${displayanswer} ${text} `;
            DisplayProp.appendChild(OnDisplay).classList.add('ops');
            return console.log('Success')
        }
        else if(text =='=' && OnDisplay.textContent.split(' ')[2] !== ''){
            displayanswer = operate(OnDisplay.textContent.split(' ')[0],OnDisplay.textContent.split(' ')[2],OnDisplay.textContent.split(' ')[1])
            OnDisplay.textContent = `${displayanswer}`;
            DisplayProp.appendChild(OnDisplay).classList.add('ops');
            return console.log('socksss')
        }
        else if (text != '=' && OnDisplay.textContent.split(' ')[2] <= 0 || text != '=' && OnDisplay.textContent.split(' ')[2]>= 0){
        Num2 = OnDisplay.textContent.split(' ')[2];
        console.log(Num2.toString)
        displayanswer = operate(Num1,Num2,text)
        Num1 = displayanswer;
        OnDisplay.textContent = `${displayanswer} ${text} `;
        return console.log('sockss')
  

    }
    else if(OnDisplay.textContent.split(' ')[2] == ''){
        OnDisplay.textContent = `${OnDisplay.textContent.split(' ')[0]}`;
        DisplayProp.appendChild(OnDisplay).classList.add('ops');
        Num1 = 0;
        return  console.log('socks')
    }

    }
    else if(text == 'C'){
        OnDisplay.textContent = ``;
        DisplayProp.appendChild(OnDisplay).classList.add('ops');
        Num1=0;
        return
    }
    else if(0<=Num<=9){
    OnDisplay.textContent = `${OnDisplay.textContent + Num}`;
    DisplayProp.appendChild(OnDisplay).classList.add('ops');
    return console.log('Yay')
}
else{
    return
}

}
