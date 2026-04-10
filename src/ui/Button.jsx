export default function Button({ mode, text }) {
  return (
    <button
      className={`rounded-lg py-4 font4-bold cursor-pointer ${mode === 'primary' ? 'bg-grey-900 text-white' : 'bg-beige-500'}`}
    >
      {text}
    </button>
  );
}
