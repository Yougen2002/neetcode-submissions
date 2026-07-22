class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagram = new Map();
        for (let str of strs){
           let key  =  str.split("").sort().join();
           if (!anagram.has(key)){
            anagram.set(key, []);

           }
           anagram.get(key).push(str);
        }
        return Array.from(anagram.values());
       
    }
}
