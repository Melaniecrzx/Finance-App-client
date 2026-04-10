export default function TransactionRow({ values }) {
  return (
    <tr className="border-b border-grey-100">
      <td className="text-grey-900 font4-bold text-left py-3 flex items-center gap-4">
        <img
          src={values.avatar}
          className="h-10 w-10 rounded-full"
          alt="avatar transaction"
        />{' '}
        {values.name}
      </td>
      <td className="text-grey-500 font5-regular text-left">
        {values.category}
      </td>
      <td className="text-grey-500 font5-regular text-left">
        {new Date(`${values.date}`).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}
      </td>
      <td
        className={`font4-bold text-right ${values.amount < 0 ? 'text-grey-900' : 'text-green'}`}
      >
        {values.amount < 0
          ? `-$${(values.amount / -1).toFixed(2)}`
          : `+$${values.amount.toFixed(2)}`}
      </td>
    </tr>
  );
}
