export default function Button({ mode, children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg py-4 font4-bold cursor-pointer ${mode === 'primary' ? 'bg-grey-900 text-white' : 'bg-beige-50'} ${className}`}
    >
      {children}
    </button>
  );
}
