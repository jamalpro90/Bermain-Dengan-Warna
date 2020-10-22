    // warna merah
const button = document.getElementById('red');

button.onclick = function() {
    document.body.style.backgroundColor = 'red';
    // document.body.setAttribute('class', 'red');
    // document.body.classList.toggle('red');

};


    // warna acak
const buttonRandom = document.createElement('button');
const isiButtonRandom = document.createTextNode('WARNA ACAK');

buttonRandom.appendChild(isiButtonRandom);
buttonRandom.setAttribute('type', 'button');

button.after(buttonRandom);
    // event click
buttonRandom.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    console.log(r);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +',' + b +')';
});



    // slider warna RGB
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

const r = sMerah.value = 255;
const g = sHijau.value = 255;
const b = sBiru.value = 255;

sMerah.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ','+ b +')'
});


sHijau.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
});

sBiru.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
});



    // warna berubah seiring bergeraknya cursor / mouse
document.body.addEventListener('mousemove', function (event) {
    // posisi mouse
    // console.log(event.clientX);
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round(event.clientY / window.innerHeight * 255);

    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',0)';
});


