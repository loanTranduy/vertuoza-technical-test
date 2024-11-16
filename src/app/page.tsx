import CreateEntity from '@/components/CreateEntity/CreateEntity';
import TableEntities from '@/components/TableEntities/TableEntities';

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <CreateEntity />
      <TableEntities />
    </main>
  );
}
