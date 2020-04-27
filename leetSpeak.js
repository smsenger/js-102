
//Changes some letters into alternative characters.         
var obj = {
    A : '4',
    B : 'B',
    C : 'C',
    D : 'D',
    E : '3',
    F : 'F',
    G : '6',
    H : '#',
    I : '1',
    J : 'J',
    K : 'K',
    L : 'L',
    M : 'M',
    N : 'N',
    O : '0',
    P : 'P',
    Q : 'Q',
    R : 'R',
    S : '5',
    T : '7',
    U : 'U',
    V : 'V',
    W : 'W',
    X : 'X',
    Y : 'Y',
    Z : '2'
  }

  
  function toLeetSpeak (str){
    let arr = str.toUpperCase().split('');
    for (var i in arr){
      arr[i] = obj[arr[i]];
    }
    return arr.join('');
  }
  
  console.log(toLeetSpeak('Leet'));
