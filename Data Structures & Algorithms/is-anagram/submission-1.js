class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
 

    if (s.length != t.length){
        return false;
    }

            let checkequal = new Map();

            for (let i = 0; i < s.length;i++){
              checkequal.set(s[i], (checkequal.get(s[i]) || 0) +1);
            }

            for (let j = 0; j < t.length; j++){
              checkequal.set(t[j], (checkequal.get(t[j]) || 0 ) -1); 
            }

            for (let count of checkequal.values()) {
                if (count !== 0) return false;
            }
            return true;
    }
}
