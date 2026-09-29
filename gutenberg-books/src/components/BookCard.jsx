function BookCard({ book }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={book.cover_image}
          alt={book.title}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h2 className="line-clamp-2 text-lg font-bold text-gray-900">
          {book.title}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          {book.authors[0]?.name}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-400">
            {book.download_count.toLocaleString()} reads
          </span>

          <button className="rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-600">
            View
          </button>
        </div>
      </div>

    </article>
  );
}

export default BookCard;