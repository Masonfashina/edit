// fetch('./movies.json')
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
// })

//cleaner code for json fetch
fetch('./movies.json')
.then((response)=> response.json())
.then((data)=>console.log(data))

fetch('./test.txt')
.then((response)=> response.text())
.then((data)=>console.log(data))

//fetching from API
fetch('https://api.github.com/users/masonfashina')
.then((response)=> response.json())
.then((data)=> document.querySelector('h1').textContent = data.login)