import { useParams } from "react-router-dom"

function BookDetails(){

    const id = useParams();
    
    return(
        <div>
            <h1>Book Details</h1>
        </div>
    )
}


export default BookDetails