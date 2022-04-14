import '../css/style.scss';
window.addEventListener('load',function(){
    
let countUser = document.querySelector('.count-user'),
    countComp = document.querySelector('.count-comp'),
    userField = document.querySelector('.user-field'),
    compField = document.querySelector('.comp-field'),
    play = document.querySelector('.play'),
    fields = document.querySelectorAll('.field'),
    res = document.querySelector('.result'),
    userStep, compStep, countU = 0, countC = 0, blocked = false;

 function choiceUser(e){
     if(blocked) return;
     let target = e.target;
     if(target.classList.contains('field')){
         userStep = target.dataset.field;
         fields.forEach(item => item.classList.remove('active','error'));
         target.classList.add('active');
     }
     
     
     choiceComp();
 }



 function choiceComp(){
     blocked = true;     
     let rand = Math.floor(Math.random()*3);
     compField.classList.add('blink');
     let compFields = compField.querySelectorAll('.field');

     setTimeout(()=>{  
        compField.classList.remove('blink');
        compStep = compFields[rand].dataset.field;
        compFields[rand].classList.add('active');
        winner();
     },2000);
     
 }

 function winner(){
     blocked = false;
     let comb = userStep+compStep;
     console.log(comb);
     switch(comb){
        case 'rr':
        case 'ss':
        case 'pp':
             res.innerText = 'Ничья';             
             break;
        
        case 'pr':            
        case 'sp':            
        case 'rs':
            res.innerText = 'Победа';            
            countU++;
            countUser.innerText = countU;
            compField.querySelector('[data-field='+compStep+']').classList.add('error');
            break;

        case 'rp':
        case 'ps':
        case 'sr':
            res.innerText = 'Проигрыш';
            countC++;
            countComp.innerText = countC;
            userField.querySelector('[data-field='+userStep+']').classList.add('error');
            break;
        }

    
 }

 function playGame(){
     countU = countC = 0;
     res.innerText = 'Сделайте выбор';
     countUser.innerText = '0';
     countComp.innerText = '0';
     fields.forEach(item => item.classList.remove('active','error'));
 }

 play.addEventListener('click', playGame);
 userField.addEventListener('click',choiceUser);

})