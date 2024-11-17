import React, { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import CreateEntityForm from '@/components/CreateEntity/CreateEntityForm';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';

const UpdateEntity = () => {
  const [open, setOpen] = useState(false);
  const oncloseDialog = () => {
    setOpen(false);
  };
  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Trigger>
        <Button variant="outline" size="icon" ariaLabel={'update entity'}>
          <Pencil />
        </Button>
      </Modal.Trigger>
      <Modal.Content
        title="Modify entity information"
        description="This changes cannot be undone"
      >
        <CreateEntityForm onSuccess={oncloseDialog} />
      </Modal.Content>
    </Modal>
  );
};

export default UpdateEntity;
