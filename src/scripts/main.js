console.log(businesses)
const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"
// ==================== FOREACH() ========================
// businesses.forEach(business => {
//   outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//   `
//   outEl.innerHTML += "<hr/>"
// });

/*Lightning Exercise: Add another section sibling to the current one and use object dot notation to display each company's city. Use square bracket notation to display the state code. Use dynamic square bracket notation to add the zip code.*/
// businesses.forEach(business => {
//     outEl.innerHTML += `
//       <h2>${business.companyName}</h2>
//       <section>
//         ${business.addressFullStreet}
//       </section>
//       <section>
//         ${business.addressCity}
//       </section>
//       <section>
//       ${business["addressStateCode"]} ${business['addressZipCode']}
//     </section>
//     `
//     outEl.innerHTML += "<hr/>"
//   });
// ==================== FILTER() ========================
// Array to contain all the New York businesses
// const newYorkBusinesses = businesses.filter(business => {
//     console.log(business.addressStateCode)
//     let inNewYork = false
//     if (business.addressStateCode === "NY") {
//         inNewYork = true
//     }
//     return inNewYork
// })

// console.log(newYorkBusinesses);
// newYorkBusinesses.forEach(business => {
//     outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//   `
//     outEl.innerHTML += "<hr/>"
// });
/*
Lightning Exercise: Use filter() to create another array named manufacturingBusinesses that will contain all businesses in the manufacturing industry. Display those to the DOM.
*/

// const manufacturingBusinesses = businesses.filter(business => {
//     let inManufacturing = false;
//     if (business.companyIndustry === "Manufacturing") {
//         inManufacturing = true;
//     }
//     return inManufacturing;
// })

// manufacturingBusinesses.forEach(business => {
//     outEl.innerHTML += `
//     <h2>${business.companyName}</h2>
//     <section>
//       ${business.addressFullStreet}
//     </section>
//   `
//     outEl.innerHTML += "<hr/>"
// });

/*Lightning Exercise: Instead of just returning the purchasing agent object, return a new object that has the full name of the purchasing agent, the company name, and the phone number. The data structure is shown below. Use that new data structure to display the agent with their company and phone number */

outEl.innerHTML += "<h1>Purchasing Agents</h1>";
// ==================== MAP ========================
/*
    Using map(), you extract the purchasing agent object
    from each business and store it in a new array
*/
// const agents = businesses.map(business => {
//     return{
//         "fullName": `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
//         "company": business.companyName,
//         "phoneNumber": business.phoneWork
//     }
// })

// console.table(agents)

// agents.forEach(agent => {
//   outEl.innerHTML += `<h1>${agent.fullName}</h1>`;
//   outEl.innerHTML += `<h3>${agent.company}</h3>`;
//   outEl.innerHTML += `<h3>${agent.phoneNumber}</h3>`;
//   outEl.innerHTML += "<hr/>";
// });

// ==================== FIND() ========================
// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundBusiness = businesses.find(
//                 business =>
//                     business.companyName.includes(keyPressEvent.target.value) // the includes() does the partial matching
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundBusiness.companyName}
//                 </h2>
//                 <section>
//                 ${foundBusiness.addressFullStreet}

//                 </section>
//                 <section>
//                 ${foundBusiness.addressCity},
//                 ${foundBusiness.addressStateCode}
//                 ${foundBusiness.addressZipCode}
//                 </section>
//             `;
//         }
//     });
/*
Lightning Exercise 1: Refactor your code to search for purchasing agents instead. If the search text is found in the first name of any purchasing agent, show that agent.
*/
// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             const foundAgent = businesses.find(
//                 agent =>
//                     agent.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) // the includes() does the partial matching
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundAgent.companyName}
//                 </h2>
//                 <section>
//                 ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}
//                 </section>
//             `;
//         }
//     });
/*
Lightning Exercise 2: Refactor your code so that if the search text is found in the first name, or last name, of any purchasing agent, show that agent.
*/
// document
//     .querySelector("#companySearch")
//     .addEventListener("keypress", keyPressEvent => {
//         if (keyPressEvent.charCode === 13) {
//             /* WHEN  USER PRESSES ENTER, FIND MATCHING BUSINESS */
//             // the includes() does the partial matching
//             const foundAgent = businesses.find(agent =>
//                 agent.purchasingAgent.nameFirst.includes(keyPressEvent.target.value) || agent.purchasingAgent.nameLast.includes(keyPressEvent.target.value)
//             );

//             outEl.innerHTML = `
//                 <h2>
//                 ${foundAgent.companyName}
//                 </h2>
//                 <section>
//                 ${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}
//                 </section>
//             `;
//         }
//     });


// ============================== PRACTICE ========================
/*
Use the filter method to get all the big spenders in the main array into a new one.
*/
// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {
    return business.orders.find(order => order > 9000)
})
console.log(bigSpenders)