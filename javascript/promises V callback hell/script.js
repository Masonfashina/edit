function getData(endpoint, cb){
    const xhr = new XMLHttpRequest


xhr.open('GET', endpoint);

xhr.onreadystatechange =function(){
    if(xhr.onreadystatechange === 4 && this.status === 200){
        cb(JSON.parse(this.responseText))
    }
}

setTimeout(()=>{
    xhr.send();
}, Math.floor(Math.random() * 3000)+ 1000)
}
const moviesPromise = getData('./movies.json');
const actorsPromise = getData('./actors.json');
const directorsPromise = getData('./directors.json');
