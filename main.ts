// Indexing of an Array alaways start from zero:
let names: string[] = ["Affan","Ali","Mubasshir","Zain","Zakir"];   
console.log(`How are you my friend,${names[0]}`);
console.log(`How are you my friend,${names[1]}`);
console.log(`How are you my friend,${names[2]}`);
console.log(`How are you my friend,${names[4]}`);

// Methods of an Array :

 let Test : string[] = ["ALi","Bilal"];

// 1) Pop:           //=> Pop always remove last elements of an array
Test.pop();
Test.pop();
console.log(Test);

// 2) Push :         => Push always add last element of an array
Test.push("Sufiyan");
console.log(Test);

// 3) Unshift :   => Unshift always add first position of an array
Test.unshift("Fareed");
 console.log(Test);   

// 4) Shift:       => Shift always remove first element of an array
console.log(Test.shift());
console.log(Test);

// 5) Slice :     => use to make a copy of an original array
console.log(Test.slice().reverse());
console.log(Test);

// 6) Splice :      (Pop,Push,Unshift,Shift)
let Test2 = ["Zubair","Moiz","Kashif","Daniyal","Hamza"];
Test2.splice(3,0,"Zulfiqar");
console.log(Test2);

// Length :             => It shows quantity of elements in array

 let myFriend = ["Zain","Sufiyan","Ali","Shahzil","Waqar"];
 console.log(myFriend.length);













