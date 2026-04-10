import { useState } from 'react';
import TransactionHeader from '../components/Transactions/TransactionHeader/TransactionHeader';
import TransactionTable from '../components/Transactions/TransactionTable/TransactionTable';
import { mockTransactions } from '../api/api';

export default function TransactionPage() {
  const [searchInput, setSearchInput] = useState('');
  const filteredTransactions = mockTransactions.filter((m) =>
    m.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <main className="py-8 px-10 flex flex-col gap-8">
      <h1 className="font1 text-grey-900">Transactions</h1>
      <section className="bg-white rounded-xl py-6 px-5 md:p-8 flex flex-col gap-6">
        <TransactionHeader
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <TransactionTable transactions={filteredTransactions} />
      </section>
    </main>
  );
}
