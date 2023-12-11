function getData(endpoint, cb){
    const xhr = new XMLHttpRequest


xhr.open('GET', endpoint);

xhr.onreadystatechange =function(){
    if(xhr.onreadystatechange === 4 && this.status === 200){
        cb(JSON.parse(this.responseText))
    }
}

setTimeout(()=>{
xhr.send()
},Math.floor(math.random()*3000)+ 1000)
}

getData('./movies.json', (data)=>{
    console.log(data);
    getData('./a')
})