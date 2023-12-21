const getUsers = async () =>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!res.ok){
            console.log('An error occured')
        }

        const data = await res.json()

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

getUsers()