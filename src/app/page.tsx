import CreateEntity from '@/components/CreateEntity/CreateEntity';
import TableEntities from '@/components/TableEntities/TableEntities';

export default function Home() {
  return (
    <div className="">
      <main className="flex gap-10">
        <CreateEntity />
        <TableEntities />
      </main>
    </div>
  );
}
