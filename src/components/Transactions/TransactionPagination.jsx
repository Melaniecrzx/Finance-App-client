import IconChrevonLeft from '../Icon/IconChrevonLeft';
import IconChevronRight from '../Icon/IconChevronRight';

export default function TransactionPagination({ total, page, setPage }) {
  const totalPages = Math.ceil(total / 10);

  return (
    <div className="flex justify-evenly font4-regular text-grey-900">
      <button
        className="flex gap-4 items-center"
        disabled={page === 1}
        onClick={() => setPage((prev) => prev - 1)}
      >
        <IconChrevonLeft />
        Prev
      </button>
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button key={p} onClick={() => setPage(p)}>
            {p}
          </button>
        ))}
      </div>

      <button
        className="flex gap-4 items-center"
        disabled={page * 10 >= total}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
        <IconChevronRight />
      </button>
    </div>
  );
}
