const one = document.getElementById('one');
const button = document.getElementById('button')



function randomColor(){
let c = '#'
for(let i=0;i<6;i++){
    c+= (Math.random() * 16 | 0).toString(16);
}
return c
}

button.addEventListener('click',randomColor())
one.color = randomColor()
