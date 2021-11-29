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

//runtime is O(2)


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

//runtime: O(n)


