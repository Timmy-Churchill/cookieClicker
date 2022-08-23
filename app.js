
const btn = document.querySelector('button');
let counter = 0;

btn.onclick = () => {
    counter ++;
    let msg = `You clicked the button: you now have done ${counter}`;
    alert(msg);
}
