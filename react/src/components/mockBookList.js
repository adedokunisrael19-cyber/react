export const mockBookList = ()=> {
    return new Promise((resolve, reject) => {  
        resolve([
            {id: 1, title : "Name of the wind"},
            {id : 2, title : "The wise man's fear"},
            {id : 3, title : "Kafka on the shore"},
            {id : 4, title : "The Man and the Magarita"}

        ])
        reject("Error fetching book list")
    })
}