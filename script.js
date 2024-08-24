const box = document.querySelector('.box') ;
const items = document.querySelectorAll('.box-items') ;
const player1 = document.querySelector('.player-1') ;
const player2 = document.querySelector('.player-2') ;
const container = document.querySelector('.container') ;


let counter = 0 ;
let flag = true ;
window.onload = function() {
     player1.style.backgroundColor = "#18a22e" ;
     player2.style.backgroundColor = "#ed4732" ;
    
    //  counter = 0  ;
    //  flag = 0 ;

};
let power = true ;
if(power === true){
    console.log(power) ;
    items.forEach((item)=>{
        item.addEventListener('click' , ()=>{
            if(power){
                mark(item) ; 
            }
        })
    }) ;
    
    function mark(item){
         if(item.innerHTML === ""){
            if(flag === true){
                item.innerHTML = "O" ;
                player2.style.backgroundColor = "#18a22e" ;
                player1.style.backgroundColor = "#ed4732" ;
                flag = !(flag) ;
                counter++ ;
            }
            else if(flag === false){
               item.innerHTML = "X" ;
               player1.style.backgroundColor = "#18a22e" ;
               player2.style.backgroundColor = "#ed4732" ;
               flag = !(flag) ;
               counter++ ;
       
            }
            check() ;
         }
        //  item.removeEventListener('click', mark);
    }
    
    function result(txt , lists){
         const winner = document.createElement('div') ;
         winner.setAttribute('class' ,  'winner') ;
         const congras = document.createElement('div') ;
         congras.setAttribute('class' , 'congras') ;
         congras.innerHTML = "congratulations" ;
         const winnerPlayer = document.createElement('div') ;
         winnerPlayer.setAttribute('class' , 'winnerPlayer') ;
         console.log("entered inside result function ") ;
         if(txt === "tie"){
            console.log("match tied") ;
            congras.innerHTML = "ohh no"
            winnerPlayer.innerHTML = "Match tied" ;
         }
         else if(txt === 'O'){
            console.log("player 1 won")
             winnerPlayer.innerHTML = "player 1 Won" ;
         }
         else{
             console.log("player 2 won ") ;
             winnerPlayer.innerHTML = "player 2 Won" ;
         }
         winner.appendChild(congras) ;
         winner.appendChild(winnerPlayer) ;

         console.log(lists) ;
         if(txt !== "tie"){
            lightUp(lists) ; // i will illuminate these zero and cross :)
        
         }
         setTimeout(()=>{
              container.appendChild(winner) ; 
    
         } , 1000) ;

        console.log(winnerPlayer , container) ;
        
        // container.appendChild(winner) ;
        power = false ;
        return ;
    
    }

    function lightUp(lists){
        console.log(lists);
        console.log("light up entered") ;
        for(let i = 0 ; i < lists.length ; i++){
             let pick = lists[i] ;
             console.log("List[i]" , pick);
             if(pick.innerHTML === 'O'){
                 pick.style.color = '#08a5e3' ;
                 pick.style.fontSize = '1.4rem' ;
             }
             else if(pick.innerHTML === 'X'){
                pick.style.color =   '#08a5e3';
                pick.style.fontSize = '1.4rem' ;
            }

        }
        return ;
    }
    
    function check(){
        console.log("entered inside check function ") ;
    
        let checker = false ;
        let list = [] ;
    
        let div1 = document.querySelector('.item-1') ;
        let div2 = document.querySelector('.item-2') ;
        let div3 = document.querySelector('.item-3') ;
    
        let a = div1.innerHTML ;
        let b = div2.innerHTML ;
        let c = div3.innerHTML ;
    
        if(a !== "" && b !== "" && c !== "" && a === b && b === c && c===a){
            list.push(div1) ;
            list.push(div2);
            list.push(div3) ;
             result(a , list) ;
             return ;
        }
    
         list = [] ; 

         div1 = document.querySelector('.item-4') ;
         div2 = document.querySelector('.item-5') ;
         div3 = document.querySelector('.item-6') ;
    
         a = div1.innerHTML ;
         b = div2.innerHTML ;
         c = div3.innerHTML ;
    
         if(a !== "" && b !== "" && c !== "" && a === b && b === c && c===a){
            list.push(div1) ;
            list.push(div2);
            list.push(div3) ;
            result(a , list) ;
            return ;
       }

        list = [] ;
        div1 = document.querySelector('.item-7') ;
         div2 = document.querySelector('.item-8') ;
         div3 = document.querySelector('.item-9') ;
    
         a = div1.innerHTML ;
         b = div2.innerHTML ;
         c = div3.innerHTML ;
    
         if(a !== "" && b !== "" && c !== "" && a === b && b === c && c===a){
            list.push(div1) ;
            list.push(div2);
            list.push(div3) ;
             result(a , list) ;
            return ;
       }
         list = [] ;
         div1 = document.querySelector('.item-1') ;
         div2 = document.querySelector('.item-4') ;
         div3 = document.querySelector('.item-7') ;
    
         a = div1.innerHTML ;
         b = div2.innerHTML ;
         c = div3.innerHTML ;
    
         if(a !== "" && b !== "" && c !== "" && a === b && b === c && c===a){
            list.push(div1) ;
            list.push(div2);
            list.push(div3) ;
            result(a , list) ;
            return ;
       }
       list = [] ;
        div1 = document.querySelector('.item-2') ;
         div2 = document.querySelector('.item-5') ;
         div3 = document.querySelector('.item-8') ;
    
         a = div1.innerHTML ;
         b = div2.innerHTML ;
         c = div3.innerHTML ;
    
         if(a !== "" && b !== "" && c !== "" && a === b && b === c && c===a){
            list.push(div1) ;
            list.push(div2);
            list.push(div3) ;
             result(a , list) ;
            return ;
       }
       list = [] ;
        div1 = document.querySelector('.item-3') ;
         div2 = document.querySelector('.item-6') ;
         div3 = document.querySelector('.item-9') ;
    
         a = div1.innerHTML ;
         b = div2.innerHTML ;
         c = div3.innerHTML ;
    
         if(a !== "" && b !== "" && c !== "" && a === b && b === c && c===a){
            list.push(div1) ;
            list.push(div2);
            list.push(div3) ;
             result(a , list) ;
            return ;
       }
         list = [] ;
         div1 = document.querySelector('.item-1') ;
         div2 = document.querySelector('.item-5') ;
         div3 = document.querySelector('.item-9') ;
    
         a = div1.innerHTML ;
         b = div2.innerHTML ;
         c = div3.innerHTML ;
    
         if(a !== "" && b !== "" && c !== "" && a === b && b === c && c===a){
            list.push(div1) ;
            list.push(div2);
            list.push(div3) ;
             result(a , list) ;
            return ;
       }
        list = [] ; 

        div1 = document.querySelector('.item-3') ;
         div2 = document.querySelector('.item-5') ;
         div3 = document.querySelector('.item-7') ;
    
         a = div1.innerHTML ;
         b = div2.innerHTML ;
         c = div3.innerHTML ;
    
         if(a !== "" && b !== "" && c !== "" && a === b && b === c && c===a){
            list.push(div1) ;
            list.push(div2);
            list.push(div3) ;
            result(a , list) ;
            return ;
       }
    
    
        if(counter === 9){
            result("tie") ;
            return ;
        }
    
    }


}


