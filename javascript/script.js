const arrDifficoltà = [100,81,49];
console.log(arrDifficoltà);

let i = 0;
const playButton = document.querySelector('.btn');



function playDiff() {
    return diff = document.getElementById('selezione').value;
};

function play () {
    playDiff();
    let square;
    const containerMain = document.querySelector('.gridContainer');
    for(let index = 1; index <= arrDifficoltà[diff]; index++) {
        square = document.createElement('div');
        square.innerHTML = index;
        square.classList.add('square');

        containerMain.append(square);
    };

    console.log(arrDifficoltà[diff]);
    console.log(diff);
};

playButton.addEventListener('click', play);








