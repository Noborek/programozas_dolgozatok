// 1. sorozatszamitas tetele

let osszeg = 0;
let x = [ 5, 7, 2, 9, 5, 4 ];

for (let i = 0; i < x.length; i++) {
    osszeg = osszeg + x[i];
  }
console.log("az osszeg erteke:"+osszeg);

// 2. eldöntés tétele

var i = 0;
while ( i < x.length && x[i] !== 2){
    i = i+1;
}

if (i < x.length ) {
    let van = true;
    console.log("van benne 2-es");
}
/*for (let i = 0; i < x.length; i++ ) {
    if (x[i] === 2) {
      console.log("van a szamok kozott 2-es");
    }
  }*/

// 3. lineáris keresés tétele
// let x = [5, 7, 2, 9, 5, 4];

var i = 0;
while ( i < x.length && x[i] !== 2){
    i = i+1;
}

let van;
let sorsz;
if (i < x.length ) {
    let van = true;
    console.log("2-es");
}

if (van) {
    sorsz = i;
    console.log ("sorszám: "+sorsz);
}

//4. megszámlálás tétele
 let db = 0;
for ( let i = 0; i < x.length; i++) {
    if ( x [i]%2 === 0) {
        db = db + 1;
    }
}
console.log("a tömbben "+db+" darab páros szám van");

// 5. maximum kivalasztas tetele

let max = 0;
for ( let i=1; i < x.length; i++) {
    if (x[i]>x[max]){
        max = i;
    }
}
console.log("a legnagyobb elem a "+x[max]);

// 6. Buborékrendezés

function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([5, 7, 2, 9, 5, 4]));

/*for ( i = x.length; i >1; i--) {
    for ( let j = 0; j < i-1; j++) {
       if ( x[j] > x [j + 1]) {
        c = x[j];
        x[j] = x [ j + 1 ];
        x [ j + 1 ] = c;
        }
    }
}

console.log(x);*/

// 7. Minimum kiválasztásos rendezés
x = [5, 7, 2, 9, 3];

console.log("a tömb rendezetlenül: "+x);
for ( i = 0; i < (x.length - 1); i++) {
    let min = i;
    for ( j = (i + 1); j < x.length; j++) {
       if ( x[min] > x[j]) {
        min= j;
        }
    }
    c = x[i];
    x[i] = x[min];
    x[min] = c;
}
console.log("a tömb rendezetten: "+x);


// 8. Faktoriális tétel
function factorial (n) {
  if (n == 0) {
    return 1;}
    else {
  return (n * factorial(n-1));
    }
}
console.log("4! = "+factorial(4));


 

 






























