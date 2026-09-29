import { useEffect, useState } from "react";
import styles from "./BookList.module.css";
import { mockBookList } from "../components/mockBookList";

const BookList  = () => {

	const [books, setBooks] = useState([]);
	const [newBooK, setNewBook] = useState("");
	const [search, setSearch] = useState("");

	console.log(newBooK)

	useEffect(()=>{
		const fetchBooks = async ()=> {
				try{
					const data = await mockBookList();
					setBooks(data);
					console.log(data);
				}
				catch(error){
					console.log(error);
				}

		};

		fetchBooks();
	},[]);
		

		const deleteBook = (id) => {
			let filteredBooks = books.filter((book) => book.id !== id);
			setBooks(filteredBooks)
		}

		function addBook(event){
			event.preventDefault();

			if(!newBooK.trim()){
				alert("add book title")
				return;
			} 
			setBooks((prev)=> [...prev, {id: books.length + 1, title: newBooK}]);
		}

	



  return (
   <div className={styles.wrapper}>
	    <header>
	    	<div className={styles.pageBanner}>
	    		<h1 className={styles.title}> Book Collections</h1>
          <p>Books</p>
          <form className={styles.searchBooks}>
            <input type="text" placeholder="Search books..." value={search} onChange={(event) => setSearch(event.target.value)} />
          </form>
	    	</div>
	    </header>
	    <div className={styles.bookList}>
	    	<h2 className={styles.title}>Books to Read</h2>
	    	<ul>
	    		{books.map((book, index)=>(
	    			<li key={index}>
	    				<span className={styles.name}>{book.title}</span>
						<span onClick={()=> deleteBook(book.id)} className={styles.delete}>delete</span>
	    			</li>
	    		))}
	    	</ul>
	    </div>
	    <form onSubmit={addBook} className={styles.addBook}>
	    	<input type="text" value={newBooK} onChange={(event)=> setNewBook(event.target.value)} placeholder="Add a book..." />
	    	<button>Add</button>
	    </form>
    </div>
  ); 
};

export default BookList;
