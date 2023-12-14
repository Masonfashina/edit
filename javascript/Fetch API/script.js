// fetch('./movies.json')
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
// })

//cleaner code
fetch('./movies.json')
.then((response)=> response.json())
.then((data)=>console.log(data))
