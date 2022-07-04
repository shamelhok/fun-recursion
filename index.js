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

module.exports={factorial, sum,  reverseString, countSpaces, sumDigits}

console.log(parseInt(''))
console.log(NaN.toString())