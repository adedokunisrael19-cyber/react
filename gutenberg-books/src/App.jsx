import { useEffect, useState } from "react";
import  BookCard  from "./components/BookCard";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const url =
        "https://project-gutenberg-free-books-api1.p.rapidapi.com/books";

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":'af699b8ac1msh971dce55b0ce1ebp1b4d5fjsnab8edf6799a5',
          "x-rapidapi-host":
            "project-gutenberg-free-books-api1.p.rapidapi.com",
        },
      };
2
      const response = await fetch(url, options);

      const data = await response.json();

      console.log(data);

      setBooks(data.results);
    };

    fetchBooks();
  }, []);

   return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-blue-600">
        Gutenberg Books
      </h1>

      <p className="mt-4 text-gray-600">
        Number of books: {books.length}
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}
      </div>
    </div>
  );
}
export default App;