const Pagination = ({ page, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    const start = Math.max(1, page - 2);
    const end = Math.min(totalPages, page + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-12">
      <div className="flex items-center gap-1 rounded-full bg-white shadow px-2 py-2">
        {/* PREV */}
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="px-3 py-2 rounded-full text-sm
          disabled:text-gray-300 disabled:cursor-not-allowed
          hover:bg-gray-100"
        >
          ←
        </button>

        {/* PAGE NUMBERS */}
        {getPages().map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition
              ${
                p === page
                  ? "bg-pink-600 text-white shadow"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            {p}
          </button>
        ))}

        {/* NEXT */}
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="px-3 py-2 rounded-full text-sm
          disabled:text-gray-300 disabled:cursor-not-allowed
          hover:bg-gray-100"
        >
          →
        </button>
      </div>
    </div>
  );
};
export default Pagination;
