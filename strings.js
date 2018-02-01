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
