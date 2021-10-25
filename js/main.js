const ul = document.querySelector('ul.box')

for (let i = 1; i <= 100; i++){

    let boxe
    if (i % 15 == 0){
        boxe = `<li class="boxs red">fizzbuzz</li>`;
    } else if (i % 3 == 0){
        boxe = `<li class="boxs green">fizz</li>`;
    } else if ( i % 5 == 0){
        boxe = `<li class="boxs yellow">buzz</li>`;
    }  else {
        boxe = `<li class="boxs">${i}</li>`;
    }
    
    ul.innerHTML += boxe
}