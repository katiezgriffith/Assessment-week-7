//Sum Zero
let array = [28, 43, -12, 30, 4, 0, 12]

let value = "False"
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = "True"
      } 
    }
  }
}

console.log(value)

//runtime is O(N^2)
//Space O(N2)


//Unique CHars

function hasUniqueChars(string) {
    let array = string.split("");

    let result = {};

    for (let i = 0; i < array.length; i++) {
        if (result[array[i]]) {
            return false;
        } else {
            result[array[i]] = true;
        }
    }
    return true
}

console.log(hasUniqueChars("Moonday"))

//runtime: O(N)
//Space: O(N)


//PANGRAM SENTENCE

const isPangram = (str = '') => {
    str = str.toLowerCase();
    const { length } = str;
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArr = alphabets.split('');
    for(let i = 0; i < length; i++){
       const el = str[i];
       const index = alphaArr.indexOf(el);
       if(index !== -1){
          alphaArr.splice(index, 1);
       };
    };
    return !alphaArr.length;
 };
 console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

 //runtime = O(N)
 //space = O(N)


 //LONGEST WORD

 function findLongestWord(arr) {
    let len = 0
    for (let i = 0; i < arr.length; i++) {
      if( arr[i].length > len) {
        len = arr[i].length
      }
    }
    return len
  }
  
 console.log(findLongestWord(["hi", "hello"]))

 //runtime O(n)
 //space O(n)