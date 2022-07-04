function factorial(num){
    if (num ===0){
        return 1
    }
    
    return num* factorial(num-1)
}

function sum(num){
    if(num ===1){
        return 1
    }
    return num +sum(num-1)
}

function reverseString(str){
 
    if (str.length ===0){
        return ''
    }
    return str[str.length-1] + reverseString(str.slice(0,-1))
  

}

function countSpaces(str){
    if(str.length===0){
        return 0
    }
    if(str[str.length-1] ===' '){
        return 1 + countSpaces(str.slice(0,-1))
    } else{
        return countSpaces(str.slice(0,-1))
    }   
}

function sumDigits(num){
    if(num<10){
        return num
    }
    let str= num.toString()
    let sum = 0
    let array = str.split('')
    array.forEach(char=>{
        sum+= parseInt(char)
    })
    return sumDigits(sum)
}

function fibonacci(num){
    if (num === 1) {
        return 0
    }
    if (num === 2) {
        return 1
    }
    return fibonacci(num-1) + fibonacci(num-2)
}

function deepTotals(arr) {
    let total = 0
    if (arr === []) {
        return 0
    }
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object'){
            total += deepTotals(arr[i])
        }
        if(typeof arr[i] === 'number') {
            total += arr[i]
        }
    }
    return total
}

function deepIncludes(arr, value) {
    if (arr === []) {
        return false
    }
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object'){
           return deepIncludes(arr[i], value)
        }
        if(arr.includes(value)) {
            return true
        }
    }
    return false
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] === value){
    //     console.log('true')
    //     return true
    //   }
    //   if (typeof(arr[i]) === 'object') return deepIncludes(arr[i], value)
    // }
}

function countObjects(obj){
    let count =1
    for (key in obj){
        if(typeof(obj[key])==='object'){
            count += countObjects(obj[key])
        }
    }
    return count
}

function deepFreeze(obj){
    Object.freeze(obj)
    for(key in obj){
      if(typeof(obj[key])==='object'){
        deepFreeze(obj[key])
      }
    }
}

function analyzeArray(str,array,tempIndex=''){
    let path= str +'.'+ tempIndex
    // let index2;
    for(index in array){
        
        path +='.'+index
        //console.log(tempIndex, 'is temp index')
        
        // index2 = index
        //console.log(index, 'this is the idex')
        if(Array.isArray(array[index])){
            tempIndex= index
         path+= analyzeArray(str,array[index],tempIndex)
        }else{

        console.log(path +`: ${array[index]}`)
    }
       // return index
    }
    // return index2
    
    
    // if (array.length=0){
    //     return str
    // }
    // if(Array.isArray(array[0])){
    //     return analyzeArray(array.slice(1))+ 
    // }

}

const arr = ["carrot", ["car", "boat", "plane"], "turtle", ["house"]];
analyzeArray("jimbo", arr);

module.exports={factorial, sum,  reverseString, countSpaces, sumDigits,
    fibonacci, deepTotals, deepIncludes, countObjects, deepFreeze}
