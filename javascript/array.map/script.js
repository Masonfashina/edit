const numbers = [1,2,3,4,5];

// const doubledNumbers = numbers.map ((number) => number * 2)

// console.log(doubledNumbers)

const companies = [
  { name: "company one", category: "finance", start: 1981, end: 2000 },
  { name: "company two", category: "auto", start: 1982, end: 2002 },
  { name: "company three", category: "retail", start: 1998, end: 2008 },
  { name: "company four", category: "technology", start: 1989, end: 2006 },
  { name: "company five", category: "finance", start: 2007, end: 2022 },
  { name: "company six", category: "finance", start: 1996, end: 2008 },
  { name: "company seven", category: "auto", start: 1982, end: 2009 },
  { name: "company eight", category: "retail", start: 2001, end: 2004 },
  { name: "company nine", category: "technology", start: 2017, end: 2020 },
];

//create an array of company names

const companyNames = companies.map((company) => company.name);

console.log(companyNames);

//create an array with just company and category

const companyInfo = companies.map((company)=> {
    return { name: company.name,
         category: company.category}
}

);

console.log(companyInfo)

//create an array of each company in operational length

// const companyLength = companies.map ((company) => company.end - company.start)

// console.log(companyLength)

//create an array of each company name and operational length

const companiesinfo = companies.map((company) => {
    return {name: company.name,
        length: company.end-company.start + ' years'
}
});

console.log(companiesinfo)

//chain map methods

const squareAndDouble = numbers
.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt * 2);

console.log(squareAndDouble)