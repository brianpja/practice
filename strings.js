function caps(str) {
  let retStr = '';
  const arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    const smallStr = arr[i];
    const capStr = smallStr[0].toUpperCase() + smallStr.slice(1);
    retStr += capStr + ' ';
  }
  return retStr.trim();
}


caps('galvanize web development immersive')
caps('WDI resident role');

//takes out adjacent characters if they are the same
//and then checks the whole string again
function super_reduced_string(s){

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            s = s.slice(0, i) + s.slice(i+2);
            i = -1;
        }
    }
    if (s.length) {
        return s;
    }
    else {
        return 'Empty String'
    }
}


//returns number of words in a camelcase String
function camelcase(s) {
    let count = 1;
    for (let i = 0; i < s.length; i ++) {
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
           count++;
        }
    }
    return count;
}
