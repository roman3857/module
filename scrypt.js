// console.log("hello");

import array from "./js/data.js";

import { findBiggestNumber, findAvarage } from "./js/arrayFunctions.js";

import { makeMarkup } from "./js/makemarkup.js";

const listElement = document.querySelector(".list");

const list = makeMarkup(array);
console.log(findBiggestNumber(array));
console.log(findAvarage(array));
console.log(list);

listElement.innerHTML = list;
