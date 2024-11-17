import CreateEntity from '@/components/CreateEntity/CreateEntity';
import TableEntities from '@/components/TableEntities/TableEntities';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import MobileWarning from '@/components/MobileWarning/MobileWarning';

export default function Home() {
  return (
    <>
      <div className="sm:block hidden">
        <Card className="bg-card rounded-xl border-none overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between p-8">
            <CardTitle>Your Entities</CardTitle>
            <CreateEntity />
          </CardHeader>
          <TableEntities />
        </Card>
      </div>
      <MobileWarning />
    </>
  );
}
