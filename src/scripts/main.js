console.log(businesses)
const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"

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
const manufacturingBusinesses = businesses.filter(business => {
    let inManufacturing = false;
    if (business.companyIndustry === "Manufacturing") {
        inManufacturing = true;
    }
    return inManufacturing;
})

manufacturingBusinesses.forEach(business => {
    outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
    </section>
  `
    outEl.innerHTML += "<hr/>" 
});