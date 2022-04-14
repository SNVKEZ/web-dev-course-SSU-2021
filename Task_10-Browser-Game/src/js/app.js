import '../css/style.scss';
window.addEventListener('load',function(){
    
let countUser = document.querySelector('.count-user'),
    countComp = document.querySelector('.count-comp'),
    userField = document.querySelector('.user-field'),
    compField = document.querySelector('.comp-field'),
    sound = document.querySelector('.sound'),
    play = document.querySelector('.play'),
    fields = document.querySelectorAll('.field'),
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
     
     
     compField.classList.add('blink');
     let compFields = compField.querySelectorAll('.field');

     setTimeout(()=>{  
        compField.classList.remove('blink');
        compStep = compFields[Math.floor(Math.random() * 3)].dataset.field;
        compFields[Math.floor(Math.random() * 3)].classList.add('active');
        console.log(compFields);
        
        winner();
     },2000);
     
 }

 function winner(){
     blocked = false;
     let comb = userStep+compStep;
     console.log(comb);
    
 }

 function playGame(){

 }

 play.addEventListener('click', playGame);
 userField.addEventListener('click',choiceUser);

})