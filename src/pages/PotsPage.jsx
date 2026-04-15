import { useState } from 'react';
import { mockPots } from '../api/api';
import PotsCard from '../components/Pots/PotsCard';
import Button from '../components/ui/Button';
import AddNewPot from '../components/Pots/AddNewPot';

export default function PotsPage() {
  const [addNewPotOpen, setAddNewPotOpen] = useState(false);
  const [pots, setPots] = useState(mockPots);

  const handleAdd = (newPot) => {
    setPots([...pots, newPot]);
  };

  const handleEdit = (updatedPot) => {
    setPots(pots.map((p) => (p.id === updatedPot.id ? updatedPot : p)));
  };

  const handleDelete = (id) => {
    setPots(pots.filter((p) => p.id !== id));
  };

  return (
    <main className="py-8 px-10 flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="font1 text-grey-900">Pots</h1>
        <Button onClick={() => setAddNewPotOpen(true)} mode="primary">
          + Add New Pot
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {pots.map((pot) => (
          <PotsCard
            key={pot.id}
            pot={pot}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <AddNewPot
        addNewPotOpen={addNewPotOpen}
        setAddNewPotOpen={setAddNewPotOpen}
        pots={pots}
        onAdd={handleAdd}
      />
    </main>
  );
}
