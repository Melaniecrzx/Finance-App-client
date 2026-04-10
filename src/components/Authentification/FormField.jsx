export default function FormField({ label, id, error, children }) {
  return (
    <div className="flex flex-col gap-1 font5-bold">
      <label htmlFor={id} className="text-grey-500">
        {label}
      </label>
      {children}
      {error && <p className="text-red text-sm mt-1">{error.message}</p>}
    </div>
  );
}
