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

/*
Lightning Exercise: Add another section sibling to the current one and use object dot notation to display each company's city. Use square bracket notation to display the state code. Use dynamic square bracket notation to add the zip code. 
*/
businesses.forEach(business => {
    outEl.innerHTML += `
      <h2>${business.companyName}</h2>
      <section>
        ${business.addressFullStreet}
      </section>
      <section>
        ${business.addressCity}
      </section>
      <section>
      ${business["addressStateCode"]} ${business['addressZipCode']}
    </section>
    `
    outEl.innerHTML += "<hr/>"
  });