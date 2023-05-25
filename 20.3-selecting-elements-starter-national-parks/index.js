//SANITY CHECK

/*
NOTES:
- document.querySelector() --> to select the first element on the page that matches the query
- document.querySelectorAll() --> to select all elements on the page that matches the query

*/
const firstPark = document.querySelector("section")
console.log(firstPark)

// setTimeout(()=>{
//     firstPark.style.backgroundColor="blue"
// },1.0000)
// 1. Select the first h1 selector
const h1 = document.querySelector("h1")//get back an arrayish thing called node list
// 2. Select all h1 selectors
const allh1 = document.querySelectorAll("h1")
// 3. Select the first section with the class of park-display
const pkdis = document.querySelector('.park-display')
// 4. Select the first established date value
const firstValue = document.querySelector('.value')
// 5. Select all the established date values
const allEst = document.querySelectorAll('.establish-display .value')
// 6. Select all the area values
const area = document.querySelectorAll('.area-display .value')
// 7. Write a statement that will find the Grand Canyon national park element by its ID.
const gcnp = document.querySelector('#gcnp')
// 8. Write a statement that will find the element containing the established date for the Grand Canyon national park.
const gcnpEst= document.querySelector('#gcnp  establish-display .value')
