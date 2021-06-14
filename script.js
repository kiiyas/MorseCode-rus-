let text = document.getElementById('text');
let toptext = document.getElementById('toptext');
text.textContent = '';
toptext.textContent = '';
let signtmp = [];

let wordtmp = {
  arr: [], //сюда собирается буква, то есть все до нажатия на стрелку
  getWord (arr) {
    let litera;
    if (arr.length == 6 && arr[0] == '1' && arr[1] == '0' && arr[2] == '0' && arr[3] == '0' && arr[4] == '0' && arr[5] == '1') {litera = ' - '};
    if (arr.length == 6 && arr[0] == '0' && arr[1] == '0' && arr[2] == '0' && arr[3] == '0' && arr[4] == '0' && arr[5] == '0') {litera = '. '};
    if (arr.length == 6 && arr[0] == '0' && arr[1] == '0' && arr[2] == '1' && arr[3] == '1' && arr[4] == '0' && arr[5] == '0') {litera = '? '};
    if (arr.length == 5 && arr[0] == '0' && arr[1] == '0' && arr[2] == '1' && arr[3] ==  '0' && arr[4] ==  '1') {litera = '. кнц. '};
    if (arr.length == 2 && arr[0] == '0' && arr[1] == '1') {litera = 'А'};
    if (arr.length == 4 && arr[0] == '1' && arr[1] == '0' && arr[2] == '0' && arr[3] ==  '0') {litera = 'Б'};
    if (arr.length == 3 && arr[0] == '0' && arr[1] == '1' &&  arr[2] == '1') {litera = 'В'};
    if (arr.length == 3 && arr[0] == '1' && arr[1] == '1' && arr[2] == '0') {litera = 'Г'};
    if (arr.length == 3 && arr[0] == '1' && arr[1] == '0' && arr[2] == '0') {litera = 'Д'};
    if (arr.length == 1 && arr[0] == '0') {litera = 'Е'};
    if (arr.length == 2 && arr[0] == '0' && arr[1] == '0') {litera = 'И'};
    if (arr.length == 3 && arr[0] == '1' && arr[1] == '0' && arr[2] == '1') {litera = 'К'};
    if (arr.length == 4 && arr[0] == '0' && arr[1] == '1' && arr[2] == '0' && arr[3] ==  '0') {litera = 'Л'};
    if (arr.length == 2 && arr[0] == '1' && arr[1] == '1') {litera = 'М'};
    if (arr.length == 2 && arr[0] == '1' && arr[1] == '0') {litera = 'Н'};
    if (arr.length == 3 && arr[0] == '1' && arr[1] == '1' && arr[2] == '1') {litera = 'О'};
    if (arr.length == 4 && arr[0] == '0' && arr[1] == '1' && arr[2] == '1' && arr[3] ==  '0') {litera = 'Л'};
    if (arr.length == 3 && arr[0] == '0' && arr[1] == '1' && arr[2] == '0') {litera = 'Р'};
    if (arr.length == 3 && arr[0] == '0' && arr[1] == '0' && arr[2] == '0') {litera = 'С'};
    if (arr.length == 1 && arr[0] == '1') {litera = 'Т'};
    if (arr.length == 3 && arr[0] == '0' && arr[1] == '0' && arr[2] == '1') {litera = 'У'};
    if (arr.length == 4 && arr[0] == '0' && arr[1] == '0' && arr[2] == '1' && arr[3] ==  '0') {litera = 'Ф'};
    if (arr.length == 4 && arr[0] == '0' && arr[1] == '0' && arr[2] == '0' && arr[3] ==  '0') {litera = 'Х'};
    if (arr.length == 4 && arr[0] == '1' && arr[1] == '0' && arr[2] == '1' && arr[3] ==  '0') {litera = 'Ц'};
    if (arr.length == 4 && arr[0] == '1' && arr[1] == '1' && arr[2] == '1' && arr[3] ==  '0') {litera = 'Ч'};
    if (arr.length == 4 && arr[0] == '1' && arr[1] == '1' && arr[2] == '1' && arr[3] ==  '1') {litera = 'Ш'};
    if (arr.length == 4 && arr[0] == '1' && arr[1] == '1' && arr[2] == '0' && arr[3] ==  '1') {litera = 'Щ'};
    if (arr.length == 5 && arr[0] == '1' && arr[1] == '1' && arr[2] == '0' && arr[3] ==  '1' && arr[4] ==  '1') {litera = 'Ъ'};
    if (arr.length == 4 && arr[0] == '1' && arr[1] == '0' && arr[2] == '1' && arr[3] ==  '1') {litera = 'Ы'};
    if (arr.length == 4 && arr[0] == '1' && arr[1] == '0' && arr[2] == '0' && arr[3] ==  '1') {litera = 'Ь'};
    if (arr.length == 5 && arr[0] == '0' && arr[1] == '0' && arr[2] == '1' && arr[3] ==  '0' && arr[4] ==  '0') {litera = 'Э'};
    if (arr.length == 4 && arr[0] == '0' && arr[1] == '0' && arr[2] == '1' && arr[3] ==  '1') {litera = 'Ю'};
    if (arr.length == 4 && arr[0] == '0' && arr[1] == '1' && arr[2] == '0' && arr[3] ==  '1') {litera = 'Я'};

    if (arr.length == 5 && arr[0] == '0' && arr[1] == '1' && arr[2] == '1' && arr[3] ==  '1' && arr[4] ==  '1') {litera = '1'};
    if (arr.length == 5 && arr[0] == '0' && arr[1] == '0' && arr[2] == '1' && arr[3] ==  '1' && arr[4] ==  '1') {litera = '2'};
    if (arr.length == 5 && arr[0] == '0' && arr[1] == '0' && arr[2] == '0' && arr[3] ==  '1' && arr[4] ==  '1') {litera = '3'};
    if (arr.length == 5 && arr[0] == '0' && arr[1] == '0' && arr[2] == '0' && arr[3] ==  '0' && arr[4] ==  '1') {litera = '4'};
    if (arr.length == 5 && arr[0] == '0' && arr[1] == '0' && arr[2] == '0' && arr[3] ==  '0' && arr[4] ==  '0') {litera = '5'};
    if (arr.length == 5 && arr[0] == '1' && arr[1] == '0' && arr[2] == '0' && arr[3] ==  '0' && arr[4] ==  '0') {litera = '6'};
    if (arr.length == 5 && arr[0] == '1' && arr[1] == '1' && arr[2] == '0' && arr[3] ==  '0' && arr[4] ==  '0') {litera = '7'};
    if (arr.length == 5 && arr[0] == '1' && arr[1] == '1' && arr[2] == '1' && arr[3] ==  '0' && arr[4] ==  '0') {litera = '8'};
    if (arr.length == 5 && arr[0] == '1' && arr[1] == '1' && arr[2] == '1' && arr[3] ==  '1' && arr[4] ==  '0') {litera = '9'};
    if (arr.length == 5 && arr[0] == '1' && arr[1] == '1' && arr[2] == '1' && arr[3] ==  '1' && arr[4] ==  '1') {litera = '0'};



    if (arr.length > 0) { 
      if (litera != undefined) {
        toptext.textContent += litera;
      }        
        wordtmp.arr.splice(0, wordtmp.arr.length);      
    }
    
  }
  
}



window.addEventListener('keydown', (event) => {

  if (event.code == 'ArrowRight' || event.code == 'Numpad6') {
    console.log('wordtmp.arr' + wordtmp.arr);
    wordtmp.getWord(wordtmp.arr);    
    } else {
    signtmp.push(event.repeat);
    console.log('signtmp' + signtmp)
  }

});
  


window.addEventListener('keyup', (event) => {

  if (event.code == 'Backspace') {
    toptext.textContent = toptext.textContent.slice(0, toptext.textContent.length - 1);
  } else if (event.code == 'ArrowRight' || event.code == 'Numpad6' || event.code == 'F5' || event.code == 'KeyR' || event.key == 'Shift' || event.key == 'Control') {
    console.log('wordtmp.arr' + wordtmp.arr);    
  } else if (signtmp.includes(true)) {
    wordtmp.arr.push('1');
    text.textContent += '-';
  } else {
    wordtmp.arr.push('0');
    text.textContent += '.';
  }
  signtmp.splice(0, signtmp.length);
})






/*
window.addEventListener('keydown', (event) => {

  //console.log(event.type, event.code)

  if (event.code == 'ArrowRight' || event.code == 'Numpad6') {
    console.log(wordtmp.arr);
    wordtmp.getWord(wordtmp.arr);    
    //wordtmp.arr.splice(0, wordtmp.arr.length);
  }

  if (event.code == 'KeyC') {
    wordtmp.arr.push('0');        
    text.textContent += '.';      
  } else if (event.code == 'Space') { 
    wordtmp.arr.push('1');
    text.textContent += '-';
  } 
  
});
*/
//в старой версии точкой была клавиша С, пробелом - спэйс