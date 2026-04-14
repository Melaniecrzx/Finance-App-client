import { mockPots } from '../api/api';
import PotsCard from '../components/Pots/PotsCard';

export default function PotsPage() {
  return (
    <main className="py-8 px-10 flex flex-col gap-8">
      <h1 className="font1 text-grey-900">Pots</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockPots.map((pot) => (
          <PotsCard key={pot.id} pot={pot} />
        ))}
      </div>
    </main>
  );
}
