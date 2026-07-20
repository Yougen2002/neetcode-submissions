class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        
       while (left < right){
       while (left < right && !this.isAlphaNum(s[left]) ){
       left +=1;
       }
       while (left < right &&  !this.isAlphaNum(s[right])){
        right -= 1;
       }
   
        let x = s[left].toUpperCase();
       let y =  s[right].toUpperCase();

        if (x === y){
            left += 1;
            right += -1;
        }else{
            return false
        }
       }
        return true;
}
isAlphaNum(char){

 if (char  >= "a"  && char <= "z"){
        return true;
    }else if (char  >= "A"  && char <= "Z"){
 return true;
    } else if (char >= "0" && char <="9"){
return true;
    } else{
        return false
    }
}
}
