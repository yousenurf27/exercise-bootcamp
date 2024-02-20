const titleToNumber = (s) => {
    const charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    let result = 0;
    let pow = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const charNum = charList.findIndex((data) => data === s[i]) + 1;

        result += charNum * Math.pow(charList.length, pow);

        pow++;
    }

    return result;
}

console.log(titleToNumber("AA"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZB"));
console.log(titleToNumber("ZZ"));
console.log(titleToNumber("AAB"));

console.log("\n");

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one

const findSingleOne = (nums) => {
    const seen = {};

    for (const num of nums) {
        seen[num] = seen[num] ? seen[num] + 1 : 1;
    }

    for (const key in seen) {
        if (seen[key] == 1) return key;
    }
}

console.log(findSingleOne([3, 3, 1]));
console.log(findSingleOne([4, 2, 2, 1, 1]));
console.log(findSingleOne([4]));

console.log("\n");

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const isAnagram = (s, t) => {
    const collectCharS = {}, collectCharT = {};

    for (const sChar of s) {
        collectCharS[sChar] = collectCharS[sChar] ? collectCharS[sChar] + 1 : 1;
    }

    for (const tChar of t) {
        collectCharT[tChar] = collectCharT[tChar] ? collectCharT[tChar] + 1 : 1;
    }
    
    for (const sChar in collectCharS) {
        if (collectCharS[sChar] !== collectCharT[sChar]) {
            return false;
        }
    }

    return true;
}

const isAnagramV2 = (s, t) => s.split("").sort().join("") === t.split("").sort().join("");

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

console.log(isAnagramV2("anagram", "nagaram"));
console.log(isAnagramV2("rat", "car"));

console.log("\n");

// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n) {
    if (n <= 2) return n;

    let prev = 1;
    let current = 2;

    for (let i = 3; i <= n; i++) {
        const temp = current;
        current = prev + current;
        prev = temp;
    }

    return current;
}

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(6));