// array for btn values
const colors = ['yellow', 'green', 'blue', '#f15025', 'rgba(125,125, 125, 0.5)']

const btn = document.getElementById('btn');

// event listener
btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * colors.length);
    
    // select body and change bk color
    const body = document.body
    body.style.backgroundColor = colors[random]

    console.log(random)

})