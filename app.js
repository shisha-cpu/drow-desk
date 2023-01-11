




for (let index = 0; index < 2444; index++) {
  const div = document.createElement("div");
div.classList.add('block');
const desk = document.querySelector('.desk');
desk.append(div);
}
//Заполнение 

let bloks = document.querySelectorAll('.block')
for (let block of bloks){
 block.addEventListener('mouseover',()=>{
  
  block.classList.add('active')

}
)
}

function clear(){
  for (let block of bloks){
     block.classList.remove('active')
     block.classList.remove('red')
     block.classList.remove('blue')
     block.classList.remove('green')
     block.classList.remove('orange')   ///Очистка 
    }
   }


document.querySelector('.btn').addEventListener('click',()=>{
  clear()
})


let block = document.querySelector('.block')
// for (block of bloks){

// block.style.classList = '.blue'
// }
// function clearColor(){
//   block.classList.remove('red')
//   block.classList.remove('blue')
//   block.classList.remove('green')///не работает ф-ция!!!!!!
//   block.classList.remove('orange')
// }
document.querySelector('.blue').addEventListener('click',()=>{

for (let block of bloks){
  block.addEventListener('mouseover',()=>{
    block.classList.remove('red')
    block.classList.remove('blue')
    block.classList.remove('green')
    block.classList.remove('orange')
   block.classList.add('blue')
 
 })}
})

document.querySelector('.red').addEventListener('click',()=>{
 
  for (let block of bloks){
    block.addEventListener('mouseover',()=>{
      block.classList.remove('red')
      block.classList.remove('blue')
      block.classList.remove('green')
      block.classList.remove('orange')
     block.classList.add('red')
   
   })}
  })
  document.querySelector('.green').addEventListener('click',()=>{
 
    for (let block of bloks){
      block.addEventListener('mouseover',()=>{
        block.classList.remove('red')
        block.classList.remove('blue')
        block.classList.remove('green')
        block.classList.remove('orange')
       block.classList.add('green')
     
     })}
    })
    document.querySelector('.orange').addEventListener('click',()=>{
 
      for (let block of bloks){
        block.addEventListener('mouseover',()=>{
          block.classList.remove('red')
          block.classList.remove('blue')
          block.classList.remove('green')
          block.classList.remove('orange')
         block.classList.add('orange')
       
       })}
      })
document.querySelector('.delet').addEventListener('click',()=>{
  for (let block of bloks){
    block.addEventListener('mouseover',()=>{
     
     block.classList.remove('active')
     block.classList.remove('red')
     block.classList.remove('blue')
     block.classList.remove('green')
     block.classList.remove('orange')
   }
   )
   }
})