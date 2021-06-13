//What I will learn:
/* 
 * DOM manipulation
 * Control Structures
 * Arrays
 * Array.forEach()
 * JavaScript CSS Manipulation
 * eventListener
 */

(function() {
    const pictures = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28"
    ];

    const buttons = document.querySelectorAll('.btn');
    
    const imgDiv = document.querySelector('.img-container');

    let counter = 0;

    buttons.forEach( function(button){
        button.addEventListener('click', function(e) {
            if (button.classList.contains('btn-left')){
                counter--;
                if (counter < 0) {
                    counter = pictures.length -1
                }
                imgDiv.style.background = `url('img/${pictures[counter]}.jpg') center/cover`;
            }
            if (button.classList.contains('btn-right')){
                counter++
                if (counter > pictures.length -1) {
                    counter = 0;
                }
                imgDiv.style.background = `url('img/${pictures[counter]}.jpg') center/cover`;
            }
        })
    })
}) ();