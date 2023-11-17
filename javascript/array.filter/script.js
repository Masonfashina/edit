// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// console.log(evenNumbers);


const companies = [
    {name:'company one', category: 'finance', start: 1981, end: 2000},
    {name:'company two', category: 'auto', start: 1982, end: 2002},
    {name:'company three', category: 'retail', start: 1998, end: 2008},
    {name:'company four', category: 'technology', start: 1989, end: 2006},
    {name:'company five', category: 'finance', start: 2009, end: 2022},
    {name:'company six', category: 'finance', start: 1996, end: 2008},
    {name:'company seven', category: 'auto', start: 1982, end: 2009},
    {name:'company eight', category: 'retail', start: 1988, end: 2004},
    {name:'company nine', category: 'technology', start: 2017, end: 2020}
]
const retailCompanies = companies.filter((companies) => companies.category ==='retail')

console.log(retailCompanies)

const autoCompanies = companies.filter((companies) => companies.category === 'auto')

console.log(autoCompanies)

const techCompanies = companies.filter((companies) => companies.category === 'technology')

console.log(techCompanies)

//get companies that started in or after 1980 and ended in or before 2005


const targetCompanies = companies.filter((companies) => companies.start >= 1980 && companies.end <= 2005)

console.log(targetCompanies)