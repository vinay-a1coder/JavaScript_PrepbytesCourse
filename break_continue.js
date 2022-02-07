// continue statement

// for(let i = 1;i<10;i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }

// break statement

// for(let i = 1;i<10;i++){
//     if(i==5){
//         break;
//     }
//     console.log(i);
// }


// HomeWork --> Star Pattern

let n = 3;
let sp = " ";
for(i=1;i<=n;i++){
    for(j=1;j<=n-i;j++){
        console.log(" ",sp);
        console.log("*",i);
    }
}