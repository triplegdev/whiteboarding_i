// 1) logBetween(lowNum, highNum) will return an array from lowNum to highNum, inclusive.

const logBetween = (lowNum, highNum) => {
    const arr = [];
    for (let i = lowNum; i <= highNum; i++) {
        arr.push(i);
    }
    return arr;
};

// console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
// console.log(logBetween(14, 6));  // => []
// console.log(logBetween(4, 6));  // => [4, 5, 6]

// 2) logBetweenStepper(min, max, step) takes in three numbers as parameters. The function should return an array of numbers between min and max at step intervals.

const logBetweenStepper = (min, max, step) => {
    const arr = [];
    for (let i = min; i <= max; i+=step) {
        arr.push(i);
    }
    return arr;
};

// console.log(logBetweenStepper(5, 9, 1)); // => [5, 6, 7, 8, 9]
// console.log(logBetweenStepper(-10, 15, 5)); // => [-10, -5, 0, 5, 10, 15]

// 3) printReverse(min, max) returns an array of all numbers from max to min (exclusive), in reverse order.

const printReverse = (min, max) => {
    const arr = [];
    for (let i = max-1; i > min; i--) {
        arr.push(i);
    }
    return arr;
};

// console.log(printReverse(13, 18)); // => [17, 16, 15, 14]
// console.log(printReverse(90, 94)); // => [93, 92, 91]

// 4) fizzBuzz(max) takes a number and returns an array of every number from 0 to max that is divisible by either 3 or 5, but not both.

const fizzBuzz = (max) => {
    const arr = [];
    for (let i = 0; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) &&
            !(i % 3 === 0 && i % 5 === 0)) {
                arr.push(i);
            }
    }
    return arr;
};

// console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]

// 5) isPrime(number) returns true if number is prime. Otherwise, false. number is a positive integer.

const isPrime = (number) => {
    if (number < 2) return false;

    let count = 2;
    while (count <= Math.sqrt(number)) {
        if (number % count === 0) return false;
        count++;
    }

    return true;
};

// console.log(isPrime(2));  // => true
// console.log(isPrime(10));  // => false
// console.log(isPrime(11));  // => true
// console.log(isPrime(9));  // => false
// console.log(isPrime(2017));  // => true

// 6) maxValue(array) returns the largest value in array. array is an array of numbers.

const maxValue = (array) => {
    if (array.length === 0) return null;

    let largest = -Infinity;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (largest < element) largest = element;
    }

    return largest;
};

// console.log(maxValue([12, 6, 43, 2]));  // => 43
// console.log(maxValue([]));  // => null)
// console.log(maxValue([-4, -10, 0.43]));  // => 0.43

// 7) myIndexOf(array, target) takes in an array of numbers and a target number as arguments. It returns the index value of the target if it is present in the array or -1 if it is not present.

const myIndexOf = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (target === element) return i;
    }
    return -1;
};

// console.log(myIndexOf([1,2,3,4],4)); // => 3
// console.log(myIndexOf([5,6,7,8],2)); // => -1

// 8) factorArray(array, number) takes in an array of numbers and a number and returns an array of all the factors.

const factorArray = (array, number) => {
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (number % element  === 0) arr.push(element);
    }
    return arr;
};

// console.log(factorArray([2,3,4,5,6],20)) // => [2,4,5]
// console.log(factorArray([2,3,4,5,6],35)) // => [5]
// console.log(factorArray([10,15,20,25],5)) // => []

// 9) oddRange(end) takes in a number and returns an array containing all positive odd numbers up to end.

const oddRange = (end) => {
    const arr = [];
    for (let i = 1; i <= end; i+=2) {
        arr.push(i);
    }
    return arr;
};

// console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
// console.log(oddRange(6));  // => [ 1, 3, 5 ]

// 10) reverseHyphenString(string) takes in a hyphenated string and returns the hyphenated string reversed.

const reverseHyphenString = (string) => {
    return string.split('-').reverse().join('-');
};

// console.log(reverseHyphenString("Go-to-the-store")) // => "store-the-to-Go"
// console.log(reverseHyphenString("Jump,-jump-for-joy")) // => "joy-for-jump-Jump,"

// 11) intersect(arr1, arr2) takes in two arrays and returns a new array containing the elements common to both arr1 and arr2.

const intersect = (arr1, arr2) => {
    const arr = [];
    for (let i = 0; i < arr1.length; i++) {
        const element1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const element2 = arr2[j];
            if (element1 === element2) arr.push(element1);
        }
    }
    return arr;
};

// console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])) // => [ 'b', 'd' ]
// console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])) // => []

// 12) mirrorArray(array) takes in an array as an argument and returns a new array "mirrored"

const mirrorArray = (array) => {
    return [...array, ...array.reverse()];
};

// console.log(mirrorArray([1,2,3]));
//   // => [ 1, 2, 3, 3, 2, 1 ]
// console.log(mirrorArray(['a', 'b', 'c', 'd']));
//   // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

// 13) abbreviate(sentence) takes in a sentence string and returns a new sentence where words longer than 4 characters have their vowels removed. sentence has all lowercase characters.

const abbreviate = (sentence) => {
    const vowels = 'aeiou';
    const newSentence = [];
    let noVowelWord = '';
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > 4) {
            for (let j = 0; j < word.length; j++) {
                const char = word[j];
                if (!vowels.includes(char)) noVowelWord += char;
            }
            newSentence.push(noVowelWord);
            noVowelWord = '';
        }
        else newSentence.push(word);
    }
    return newSentence;
};

// console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
// console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
// console.log(abbreviate('hello world')); // => 'hll wrld'
// console.log(abbreviate('how are you')); // => 'how are you'

// 14) adults(people) takes in an array of person objects. The function returns an array containing the names of those who have an age of 18 or higher.

const adults = (people) => {
    const over17 = [];
    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        if (person.age >= 18) over17.push(person.name);
    }
    return over17;
};

// const ppl = [
//     {name: 'John', age: 20},
//     {name: 'Jim', age: 13},
//     {name: 'Jane', age: 18},
//     {name: 'Bob', age: 7}
//   ];
// console.log(adults(ppl)); // => [ 'John', 'Jane' ]

// 15) countScores(people) takes an array of score objects, people, as its input. A score object, people has two key-value pairs: a name (string) and a score (number). Function returns an object that has key-value pairs where each name is a key and the value is their total score.

const countScores = (people) => {
    const scores = {};
    for (let i = 0; i < people.length; i++) {
        const person = people[i];
        if (!scores[person.name]) scores[person.name] = person.score;
        else scores[person.name] += person.score;
    }
    return scores;
};

// // Example 1:
// const ppl = [
//     { name: "Anthony", score: 10 },
//     { name: "Fred", score : 10 },
//     { name: "Anthony", score: -8 },
//     { name: "Winnie", score: 12 }
//   ];
//   console.log(countScores(ppl)); // => { Anthony: 2, Fred: 10, Winnie: 12 }

//   // Example 2
//   const peeps = [
//     { name: "Anthony", score: 2 },
//     { name: "Winnie", score: 2 },
//     { name: "Fred", score: 2 },
//     { name: "Winnie", score: 2 },
//     { name: "Fred", score: 2 },
//     { name: "Anthony", score: 2 },
//     { name: "Winnie", score: 2 }
//   ];

//   console.log(countScores(peeps)); // => { Anthony: 4, Fred: 4, Winnie: 6 }

// 16) firstNPrimes(n) returns an array of the first n prime numbers

const firstNPrimes = (n) => {
    const primes = [];

    let index = 0;
    while (primes.length < n) {
        if (isPrime(index)) {
            primes.push(index);
            index++;
        }
        else index++;
    }

    return primes;
};

// console.log(firstNPrimes(0));  // => []
// console.log(firstNPrimes(1));  // => [2]
// console.log(firstNPrimes(4));  // => [2, 3, 5, 7]

// 17) peakFinder(array) takes in an array of numbers. It returns an array containing the indices of all the peaks. A peak is an element that is greater than both of its neighbors. If it is the first or last element, it is a peak if it is greater than its one neighbor. Array has a length of at least 2.

const peakFinder = (array) => {
    const indices = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!array[i-1]) {
            if (element > array[i+1]) indices.push(i);
        }
        else if (!array[i+1]) {
            if (element > array[i-1]) indices.push(i);
        }
        else if (element > array[i-1] && element > array[i+1]) indices.push(i);
    }
    return indices;
};

// console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
// console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
// console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]

// 18) divisibleByThreePairSum(array) takes an array of numbers. It returns an array of all the pairs of indices, whose elements sum to a mulitple of three.

const divisibleByThreePairSum = (array) => {
    const pairs = [];
    for (let i = 0; i < array.length; i++) {
        const first = array[i];
        for (let j = i+1; j < array.length; j++) {
            const second = array[j];
            if ((first + second) % 3 === 0) {
                pairs.push([i,j]);
            }
        }
    }
    return pairs;
};

// const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
// console.log(arr1) // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

// const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
// console.log(arr2) // => [[1, 3]]

// 19) zipArray(arr1, arr2) takes in two arrays and "zips" them together by returning a single 2D-array. Both input arrays have the same length.

const zipArray = (arr1, arr2) => {
    const zip = [];
    for (let i = 0; i < arr1.length; i++) {
        zip.push([arr1[i], arr2[i]]);
    }
    return zip;
};

// const a1 = ['a', 'b', 'c', 'd'];
// const a2 = [10, 20, 30, 40];

// const result = zipArray(a1, a2);
// console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

// 20) twoDimensionalTotal(array) takes in a 2D array of numbers and returns the total sum of all elements.

const twoDimensionalTotal = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        const subArray = array[i];
        for (let j = 0; j < subArray.length; j++) {
            const element = subArray[j];
            sum += element;
        }
    }
    return sum;
};

// const arr1 = [
//     [5, 2, 5, 3],
//     [12, 13],
//   ];

//   console.log(twoDimensionalTotal(arr1));  // => 40

//   const arr2 = [
//     [2],
//     [1, 9],
//     [1, 1, 1]
//   ]

//   console.log(twoDimensionalTotal(arr2));  // => 15

// 21) countInnerElement(arr) takes in a 2-D array of elements. Each element of arr is a sub array that contains multiple elements. The number of elements contained in each sub array are not the same. Each sub array contains at least one element. It returns an object that counts how many times each element in each sub array repeats.

const countInnerElement = (arr) => {
    const elementCount = {};
    for (let i = 0; i < arr.length; i++) {
        const subArray = arr[i];
        for (let j = 0; j < subArray.length; j++) {
            const num = subArray[j];
            if (!elementCount[num]) {
                elementCount[num] = 1;
            }
            else elementCount[num]++;
        }
    }
    return elementCount;
};

// const arr1 = [
//     [1, 2, 4, 5],
//     [2, 7, 4],
//     [1, 4, 5, 2, 7]
//   ]

//   console.log(countInnerElement(arr1))  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

//   const arr2 = [
//     ['a','b','c','d'],
//     ['a','b'],
//     ['a','c','d','a']
//   ]

//   console.log(countInnerElement(arr2))  // => {a: 4, b: 2, c: 2, d: 2}

// 22) twoDiff(array) takes an array of numbers, returns a 2-D array, where each of the sub array are indices of the two numbers such that their difference is 2. If there are no such numbers, return an empty array.

const twoDiff = (array) => {
    const pairs = [];
    for (let i = 0; i < array.length; i++) {
        const first = array[i];
        for (let j = i+1; j < array.length; j++) {
            const second = array[j];
            if (Math.abs(first - second) === 2) {
                pairs.push([i,j]);
            }
        }
    }
    return pairs;
};


// console.log(twoDiff([2, 3, 4, 6, 1, 7]))  // => [[0, 2], [1, 4], [2, 3]]
// console.log(twoDiff([0, 2, 4, 3, 5]))  // => [[0, 1], [1, 2], [3,4]]
// console.log(twoDiff([]))  // => []

// 23) arrayDiff(arr1, arr2) takes in two arrays. The function returns a new array, containing the elements of arr1 that are not also in arr2. Both arrays have unique elements. Both arrays have unique elements.

const arrayDiff = (arr1, arr2) => {
    const arr = [];
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        if (!arr2.includes(element)) arr.push(element);
    }
    return arr;
};

// const array1 = [1, 23, 2, 43, 3, 4]
// const array2 = [3, 23]
// console.log(arrayDiff(array1, array2))  // => [1, 2, 43 ,4]

// const array3 = ['a', 'ab', 'c', 'd', 'c']
// const array4 = ['d']
// console.log(arrayDiff(array3, array4))  // => ['a', 'ab', 'c', 'c']

// 24) valueCounter(obj, val) takes in an object and a value, the function returns the number of times val repeasts as a value in obj.

const valueCounter = (obj, val) => {
    let count = 0;
    for (const name in obj) {
        if (obj[name] === val) count++;
    }
    return count;
};

// const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
// console.log(valueCounter(obj1, 'Anne'))  // => 3

// const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
// console.log(valueCounter(obj2, 88))  // => 0

// const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
// console.log(valueCounter(pairs, 'Roman'))  // => 2

// 25) elementCount(array) returns an object. Each key corresponds to an element in the array and the value corresponds to how many times that element appears in the array.

const elementCount = (array) => {
    const obj = {};
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (!obj[element]) obj[element] = 1;
        else obj[element]++;
    }
    return obj;
};

// console.log(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 }
// console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }

// 26) nextTwoPrimes(num) takes in a number and returns the next two prime numbers greater than num.

const nextTwoPrimes = (num) => {
    const nextTwoPrimes = [];

    let next = num+1;
    while (nextTwoPrimes.length < 2) {
        if (isPrime(next)) nextTwoPrimes.push(next);
        next++;
    }
    return nextTwoPrimes;
};

// console.log(nextTwoPrimes(2));  // => [ 3, 5 ]
// console.log(nextTwoPrimes(3));  // => [ 5, 7 ]
// console.log(nextTwoPrimes(7));  // => [ 11, 13 ]
// console.log(nextTwoPrimes(8));  // => [ 11, 13 ]
// console.log(nextTwoPrimes(20));  // => [ 23, 29 ]
// console.log(nextTwoPrimes(97));  // => [ 101, 103 ]

// 27) pairProduct(arr, num) accepts an array of numbers, arr, and a target number, num. It returns pairs of indices whose elements multiply to num. No pair should appear twice in the result.

const pairProduct = (arr, num) => {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]*arr[j] === num) pairs.push([i,j]);
        }
    }
    return pairs;
};

// console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
// console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
// console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]

// 28) twoDimensionalSize(array) takes in a 2-D-array as an argument. The function returns the total number of elements in the 2-D-array.

const twoDimensionalSize = (array) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        const subArray = array[i];
        for (let j = 0; j < subArray.length; j++) {
            const element = array[j];
            count++;
        }
    }
    return count;
};


// const arr1 = [
//     [1, 2, 3],
//     [4, 5],
//     [6, 7, 8, 9]
//   ];
//   console.log(twoDimensionalSize(arr1));  // => 9

//   const arr2 = [
//     ['a'],
//     ['b', 'c', 'd', 'e']
//   ];
//   console.log(twoDimensionalSize(arr2));  // => 5

// 29) longWordCount(string) takes in a string and returns the number of words longer than 7 characters.

const longWordCount = (string) => {
    const sentence = string.split(' ');
    let over7Chars = 0;
    for (let i = 0; i < sentence.length; i++) {
        const word = sentence[i];
        if (word.length > 7) over7Chars++;
    }
    return over7Chars;
};

// console.log(longWordCount(""));  // => 0
// console.log(longWordCount("short words only"));  // => 0
// console.log(longWordCount("one reallylong word"));  // => 1
// console.log(longWordCount("two reallylong words inthisstring"));  // => 2
// console.log(longWordCount("allwordword longwordword wordswordword"));  // => 3
// console.log(longWordCount("seventy schfifty five"));  // => 1

// 30) factorial(n) returns the factorial of the number n. For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24.

const factorial = (n) => {
    let factorial = n;
    for (let i = n-1; i > 1; i--) {
        factorial *= i;
    }
    return factorial;
};

// console.log(factorial(1));  // => 1
// console.log(factorial(4));  // => 24
// console.log(factorial(5));  // => 120
// console.log(factorial(10));  // => 3628800

// 31) lcm(num1, num2) returns the lowest number which is a multiple of both num1 and num2.

const lcm = (num1, num2) => {
    let start;
    if (num1 < num2) start = num1;
    else start = num2;

    for (let i = start; i <= num1*num2; i++) {
        if (i % num1 === 0 && i % num2 === 0) return i;
    }
};

// console.log(lcm(2, 3));  // => 6
// console.log(lcm(6, 10));  // => 30
// console.log(lcm(24, 26));  // => 312

// 32) hipsterfyWord(word) takes in a string and returns the string with the last vowel removed. 'y' is not a vowel.

const hipsterfyWord = (word) => {
    const vowels = 'aeiou';
    for (let i = word.length - 1; i >= 0; i--) {
        const char = word[i];
        if (vowels.includes(char.toLowerCase())) return word.slice(0, i).concat(word.slice(i+1));
    }
};

// console.log(hipsterfyWord('proper')) // => 'propr'
// console.log(hipsterfyWord('tonic')) // => 'tonc'
// console.log(hipsterfyWord('PANTHER')) // => 'PANTHR'
// console.log(hipsterfyWord('BACKWARDS')) // => 'BACKWRDS'

// 33) hipsterfy(sentence) takes a string containing several words as input. Removes the last vowel from each word. 'y' is not a vowel.

const hipsterfy = (sentence) => {
    const vowels = 'aeiou';
    const words = sentence.split(' ');
    let newSentence = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = word.length - 1; j >= 0; j--) {
            const char = word[j];
            if (vowels.includes(char.toLowerCase())) {
                newSentence.push(word.slice(0, j).concat(word.slice(j+1)));
                break;
            }
            if (j === 0) newSentence.push(word);
        }
    }
    return newSentence.join(' ');
};

// console.log(hipsterfy("proper"));  // => "propr"
// console.log(hipsterfy("proper tonic panther"));  // => "propr tonc panthr"
// console.log(hipsterfy("towel flicker banana"));  // => "towl flickr banan"
// console.log(hipsterfy("runner anaconda"));  // => "runnr anacond"
// console.log(hipsterfy("turtle cheeseburger fries"));  // => "turtl cheeseburgr fris"

// 34) objectToString(count) takes in a char count object and returns a string representing the counts of each character.

const objectToString = (count) => {
    let counts = '';
    for (let char in count) {
        for (let i = 0; i < count[char]; i++) {
            counts += char;
        }
    }
    return counts;
};

// console.log(objectToString({ a : 2, b: 4, c: 1 })) // => 'aabbbbc'
// console.log(objectToString({ b: 1, o: 2, t: 1 })) // => 'boot'

// 35) shortestWord(sentence) returns the shortest word of a sentence. The words of the sentence all have different lengths.

const shortestWord = (sentence) => {
    const words = sentence.split(' ');
    let shortest = words[0];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (shortest.length > word.length) shortest = word;
    }
    return shortest;
};

// console.log(shortestWord('app academy is cool')) // => 'is'
// console.log(shortestWord('programming bootcamp')) // => 'bootcamp'

// 36) greatestCommonFactor(num1, num2) returns the largest number that divides both num1 and num2;

const greatestCommonFactor = (num1, num2) => {
    let start;
    if (num1 < num2) start = num1;
    else start = num2;
    for (let i = start; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) return i;
    }
};

// console.log(greatestCommonFactor(15, 25)) // => 5
// console.log(greatestCommonFactor(16, 24)) // => 8
// console.log(greatestCommonFactor(7, 11)) // => 1

// 37) isPassing(assessments) takes in an array of assessment objects. The function returns true if the average assessment score is at least 70 and returns fasle otherwise.

const isPassing = (assessments) => {
    let total = 0;
    for (let i = 0; i < assessments.length; i++) {
        const assessment = assessments[i];
        total += assessment.score;
    }
    return total/assessments.length > 70;
};

// const assessments1 = [
//     { number: 1, score: 60 },
//     { number: 2, score: 90 },
//     { number: 3, score: 80 },
//     { number: 4, score: 100 },
//     { number: 5, score: 85 }
//   ];

//   console.log(isPassing(assessments1)) // => true
//   const assessments2 = [
//     { number: 1, score: 60 },
//     { number: 2, score: 20 },
//     { number: 3, score: 45 }
//   ];

//   console.log(isPassing(assessments2)) // => false

// 38) valueConcat(array, obj) takes in an array and object. The function returns a new array where each element is concatenated with it's corresponding value from the object.

const valueConcat = (array, obj) => {
    const arr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (obj[element]) arr.push(element.concat(obj[element]));
        else arr.push(element);
    }
    return arr;
};

// const arr = ['alex', 'maurice', 'meagan', 'ali'];
// const obj = { alex: 'bronca', ali: 'harris' }
// console.log(valueConcat(arr, obj)) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

// console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })) // => [ 'a', 'b2', 'c3' ]

// 39) threeInARow(arr) takes in an array of numbers and returns true if the array contains 3 of the same number consecutively and false otherwise.

const threeInARow = (arr) => {
    let count3 = 1;
    let currentVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        if (count3 === 3) return true;
        else if (currentVal === element) count3++;
        else {
            currentVal = element;
            count3 = 1;
        }
    }
    return false;
};

// console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));  // => true;
// console.log(threeInARow([10, 9, 20, 33, 3, 3]));  // => false;

// 40) variableNameify(words) takes an array of words. The function returns a string representing the variable name obtained by combining the words and capitalizing them in mixCased style.

const variableNameify = (words) => {
    let camelCased = words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        let capitalized = word[0].toUpperCase();
        for (let j = 1; j < word.length; j++) {
            const char = word[j];
            capitalized += char.toLowerCase();
        }
        camelCased += capitalized;
    }
    return camelCased;
};

// console.log(variableNameify(['is', 'prime'])) // => 'isPrime'
// console.log(variableNameify(['remove', 'last', 'vowel'])) // => 'removeLastVowel'
// console.log(variableNameify(['MaX', 'VALUE'])) // => 'maxValue'

// 41) threeIncreasing(arr) takes in an array of numbers and returns true if the array contains 3 consecutive numbers in increasing order and returns false otherwise.

const threeIncreasing = (arr) => {
    let count3 = 1;
    let currentVal = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        if (count3 === 3) return true;
        else if (currentVal < element && element - currentVal === 1) {
            currentVal = element;
            count3++;
        }
        else {
            currentVal = element;
            count3 = 1;
        }
    }
    return false;
};

// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));  // => true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));  // => false

// 42) reverse2D(array) takes in a 2D array of strings. The function returns a string representing the elements of the array in reverse order.

const reverse2D = (array) => {
    let reversed = '';
    for (let i = array.length - 1; i >= 0; i--) {
        const subArray = array[i];
        // console.log(subArray);
        for (let j = subArray.length - 1; j >= 0; j--) {
            const element = subArray[j];
            reversed += element;
        }
    }
    return reversed;
};

// const arr1 = [
//     ['a', 'b', 'c', 'd'],
//     ['e', 'f'],
//     ['g', 'h', 'i']
//   ];

//   console.log(reverse2D(arr1)) // => 'ihgfedcba'
//   const arr2 = [
//     ['Julian', 'Matt', 'Mike'],
//     ['Oscar', 'Patrick']
//   ];
//   console.log(reverse2D(arr2)) // => 'PatrickOscarMikeMattJulian'

// 43) reverb(word) takes in a word string and returns the word with all characters after the last vowel repeated.

const reverb = (word) => {
    const vowels = 'aeiou';
    for (let i = word.length - 1; i >= 0; i--){
        const char = word[i];
        if (vowels.includes(char)) return word.concat(word.slice(i));
    }
    return word;
};

// console.log(reverb('running'));  // => 'runninging'
// console.log(reverb('wild'));  // => 'wildild'
// console.log(reverb('debugged'));  // => 'debuggeded'
// console.log(reverb('my'));  // => 'my'

// 44) countRepeats(string) takes in a string and returns the number of letters that appear more than once in the string. The string contains only lowercase letters. Count is the number of letters that repeat, not the number of times they repeat in the string.

const countRepeats = (string) => {
    let letters = '';
    let repeats = '';
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (!letters.includes(char)) letters += char;
        else if (!repeats.includes(char)) repeats += char;
    }
    return repeats.length;
};

// console.log(countRepeats('calvin')); // => 0
// console.log(countRepeats('caaaalvin')); // => 1
// console.log(countRepeats('pops')); // => 1
// console.log(countRepeats('mississippi')); // => 3
// console.log(countRepeats('hellobootcampprep')); // => 4

// 45) pairsToString(arr) takes in an array of pairs. The function returns a string corresponding to the pairs.

const pairsToString = (arr) => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        const subArr = arr[i];
        for (let j = 0; j < subArr[1]; j++) {
            str += subArr[0];
        }
    }
    return str;
};

// const array1 = [
//     ['a', 3],
//     ['b', 1],
//     ['c', 2]
//   ];
//   console.log(pairsToString(array1));  // => 'aaabcc'

//   const array2 = [
//     ['f', 1],
//     ['o', 2],
//     ['d', 1],
//     ['!', 1]
//   ];
//   console.log(pairsToString(array2));  // => 'food!'

// 46) countAdjacentSums(arr, n) takes an array and number. It counts the number of times that two adjacent numbers in an array add up to n.

const countAdjacentSums = (arr, n) => {
    let count = 0;
    let curr = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const next = arr[i];
        if (curr + next === n) count++;
        curr = next;
    }
    return count;
};

// console.log(countAdjacentSums([1, 5, 1], 6)) // => 2
// console.log(countAdjacentSums([7, 2, 4, 6], 7)) // => 0
// console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)) // => 3

// 47) signFlipCount(nums) takes in an array of numbers as arguments. The function returns the number of times adjacent numbers in the array switch signs from positive to negative or vice versa. The number 0 is neither positive or negative.

const signFlipCount = (nums) => {
    let count = 0;
    let curr = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const next = nums[i];
        if ((curr > 0) ^ (next > 0)) count++;
        curr = next;
    }
    return count;
};

// console.log(signFlipCount([5, 6, 10, 3])); // => 0
// console.log(signFlipCount([-12, 0, -3, -5])); // => 0
// console.log(signFlipCount([-12, 10, -3, -5])); // => 2
// console.log(signFlipCount([1, -2, -3, -4])); // => 1
// console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3

// 48) powerSequence(base, length) takes in two numbers, base and length. The function returns an array containing a power sequence with the given length. The length is at least 1.

const powerSequence = (base, length) => {
    const powers = [];
    for (let i = 1; i <= length; i++) {
        powers.push(Math.pow(base, i))
    }
    return powers;
};

// console.log(powerSequence(3, 4));  // => [ 3, 9, 27, 81 ]
// console.log(powerSequence(2, 6));  // => [ 2, 4, 8, 16, 32, 64 ]
// console.log(powerSequence(8, 3));  // => [ 8, 64, 512 ]

// 49) collapseString(str) takes in a string as an argument. The function returns the string where 'streaks' of consecutive characters are collapsed to a single character.

const collapseString = (str) => {
    let collapsed = str[0];
    let curr = str[0];
    for (let i = 1; i < str.length; i++) {
        const next = str[i];
        if (curr === next) continue;
        else {
            collapsed += next;
            curr = next;
        }
    }
    return collapsed;
};

// console.log(collapseString('apple')); // => 'aple'
// console.log(collapseString('AAAaalviiiiin!!!')); // => 'Aalvin!'
// console.log(collapseString('hello   app academy')); // => 'helo ap academy'

// 50) oddWordsOut(sentence) takes in a sentence string and returns the sentence where words with an odd number of characters are removed.

const oddWordsOut = (sentence) => {
    const words = sentence.split(' ');
    const newSentence = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length % 2 === 0) newSentence.push(word);
    }
    return newSentence.join(' ');
};

// console.log(oddWordsOut('go to the store and buy milk'));  // => 'go to milk'
// console.log(oddWordsOut('what is the answer'));  // => 'what is answer'

// 51) mindPsAndQs(str) accepts a string of uppercase letters. The function should return the length of the longest consecutive streak of the letters 'P' and 'Q';

const mindPsAndQs = (str) => {
    let longest = 0;
    const pq = 'PQ';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const curr = str[i];
        if (pq.includes(curr)) {
            count++;
            longest = count;
        }
        else {
            if (longest < count) longest = count;
            count = 0;
        }
    }
    return longest;
};

// console.log(mindPsAndQs('BOOTCAMP'));  // => 1
// console.log(mindPsAndQs('APCDQQPPC'));  // => 4
// console.log(mindPsAndQs('PQPQ'));  // => 4
// console.log(mindPsAndQs('PPPXQPPPQ'));  // => 5

// 52) commonPrimeFactors(num1, num2) takes in two numbers as arguments and returns an array of all prime factors that are common between the two numbers. A factor is a number that divides another number without resulting in a remainder.

const commonPrimeFactors = (num1, num2) => {
    let end;
    if (num1 < num2) end = num1;
    else end = num2;
    const primeFactors = [];
    for (let i = 2; i <= end; i++) {
        if (num1 % i === 0 && num2 % i === 0 && isPrime(i)) primeFactors.push(i);
    }
    return primeFactors;
};

// console.log(commonPrimeFactors(12, 50));  // => [ 2 ]
// console.log(commonPrimeFactors(6, 24));  // => [ 2, 3 ]
// console.log(commonPrimeFactors(11,22));  // => [ 11 ]
// console.log(commonPrimeFactors(45, 60));  // => [ 3, 5 ]

// 53) splitHalfArray(array) takes in an array as an argument and returns two halves of that array split in the middle. If the array has an odd number of elements, then the middle element should be excluded.

const splitHalfArray = (array) => {
    const half = Math.floor(array.length / 2);
    if (array.length % 2 === 0) return [array.slice(0, half), array.slice(half)];
    else return [array.slice(0, half), array.slice(half+1)];
};

// console.log(splitHalfArray([1, 2, 3, 4, 5]));
//   // => [ [ 1, 2 ], [ 4, 5 ] ]

// console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
//   // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

// 54) threeUniqueVowels(string) takes in a string and returns true if the string contains at least three different vowels.

const threeUniqueVowels = (string) => {
    const vowels = 'aeiou';
    let inString = '';
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (vowels.includes(char) && !inString.includes(char)) inString += char
    }
    return inString.length >= 3
};

// console.log(threeUniqueVowels('delicious'));  // => true
// console.log(threeUniqueVowels('the bootcamp'));  // => true
// console.log(threeUniqueVowels('bootcamp'));  // => false
// console.log(threeUniqueVowels('dog'));  // => false
// console.log(threeUniqueVowels('go home'));  // => false

// 55) vowelShift(sentence) takes in a sentence string. The function returns a new sentence, where every vowel is replaced with the next vowel in the alphabet.

const vowelShift = (sentence) => {
    const vowels = 'aeiou';
    let newSentence = '';
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (vowels.includes(char)) {
            newSentence += vowels[(vowels.indexOf(char) + 1) % 5];
        }
        else newSentence += char;
    }
    return newSentence;
};

// console.log(vowelShift('bootcamp'));  // => 'buutcemp'
// console.log(vowelShift('hello world'));  // => 'hillu wurld'
// console.log(vowelShift('on the hunt'));  // => 'un thi hant'

// 56) hasSymmetry(array) takes in an array. The function returns true if the array has symmetry, false otherwise. For an array to have symmetry, it is the same forwards and backwards.

const hasSymmetry = (array) => {
    return JSON.stringify(array) === JSON.stringify(array.reverse());
};

// console.log(hasSymmetry([1, 2, 3, 3, 2, 1])) // => true
// console.log(hasSymmetry([1, 2, 3, 3, 4, 1])) // => false
// console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])) // => true
// console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])) // => false

// 57) evenSumArray(array) takes in an array of numbers and returns a new array where each num is replaced with the sum of all even numbers less than or equal to that num.

const evenSumArray = (array) => {
    const sumArray = new Array(array.length).fill(0);
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        for (let j = 0; j <= element; j+=2) {
            sumArray[i] += j;
        }
    }
    return sumArray;
};

// console.log(evenSumArray([6, 7, 5])) // => [ 12, 12, 6 ]
// console.log(evenSumArray([2, 8, 3, 5])) // => [ 2, 20, 2, 6 ]

// 58) numsToWords(numString) takes in a string representing a number. The function returns a new string where each digit character is replaced with it's "word" representation. The input string only conains numeric characters.

const numsToWords = (numString) => {
    const numObj = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine"
    }
    const numArr = numString.split('');
    let numberStr = '';
    for (let i = 0; i < numArr.length; i++) {
        const number = numArr[i];
        numberStr += numObj[number];
    }
    return numberStr;
};

// console.log(numsToWords('42')) // => 'FourTwo'
// console.log(numsToWords('123')) // => 'OneTwoThree'
// console.log(numsToWords('159598')) // => 'OneFiveNineFiveNineEight'

// 59) moreDotLessDash(str) takes in a string and returns true if the string contains more dots ('.') than dashes ('-'), false otherwise.

const moreDotLessDash = (str) => {
    let dots = 0;
    let dashes = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '.') dots++;
        else if (char === '-') dashes++;
    }
    return dots > dashes;
};

// console.log(moreDotLessDash('2-D arrays are fun. I think.'));  // => true
// console.log(moreDotLessDash('.-.-.'));  // => true
// console.log(moreDotLessDash('.-'));  // => false
// console.log(moreDotLessDash('..--'));  // => false
