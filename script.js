//Question: Write a function isPalindrome(str) that checks if a given string is a palindrome. The function should ignore spaces, punctuation, and capitalization.



// function isPalindrome(str) {
//     var nopunctuation = str.replace(/\W/g, "");
//     var nospaces = nopunctuation.replace(/\s/g, "");
//     var finalstring = nospaces;

//     var len = finalstring.length;
//     for (var i = 0; i < Math.floor(len / 2); i++) {
//         if (finalstring[i] !== finalstring[len - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome(""))



//Question:write a function deepClone(obj) to create a deep copy of an object ,handling nested objects and arrays




// function deepClone(src, deep) {
//     var ret, index;

//     if (toString.call(src) == "[object Array]") {
//         ret = src.slice();
//         if (deep) {
//             index = ret.length;
//             while (index--) {
//                 ret[index] = clone(ret[index], true);
//             }
//         }
//     }
//     else {
//         ret = src.constructor ? new src.constructor() : {};
//         for (var prop in src) {
//             ret[prop] = deep
//                 ? clone(src[prop], true)
//                 : src[prop];
//         }
//     }
//     return ret;
// }




//Question:write a function safeParse(jsonStrings) that safely parses a JSON string and returns the object if vaild or an error message if valid.




// function safeParse() {
//     const json = '{"result":valid, "count":40}';
//     const obj = JSON.parse(json);

//     console.log(obj.count);
//     console.log(obj.result);

// }



//Question:write a function findTwoSums(nums, target) that returns the indices of the two numbers in the array nums that add up to the target.



// var findTwoSums = function (nums, target) {
//     for (let i = 0; i <= nums.length; i++) {
//         for (let j = 0; j <= nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// };



//Question:write a function counter() that returns an object with two functions, increment and decrement, to increment or decrement a counter value.The counter value should be private and not directly accessible.






//Question:Implement a function uniqueValues(arr) that takes an array and returns a new array with only the unique value,preserving the original order.



// var uniqueValues = ['a', 'b', 'c', 'd', 'a', 'c'],
//     deduper = {};
// uniqueValues.forEach(function (item) {
//     deduper[item] = null;
// });
// var dedupedArray = Object.keys(deduper);

// console.log(dedupedArray)



//Question:write a function fetchData(urls) that take an array of URLs and fetches data from each URL using fetch. Ensure the function waits for all requests to complete before returning the results in an array.


// async function fetchData(urls) {

//     if (!Array.isArray(urls)) {
//         throw new Error("Input must be an array of URLs");
//     }
//     const fetchPromises = urls.map(async (url) => {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(`Error fetching ${url}: ${response.statusText}`);
//             }
//             return await response.json();
//         } catch (error) {
//             return { error: error.message };
//         }
//     });


//     return Promise.all(fetchPromises);
// }












