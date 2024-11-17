import React, { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import UpdateEntityForm from '@/components/UpdateEntity/UpdateEntityForm';
import { TEntity } from '@/components/EntityForm/EntityForm.types';

const UpdateEntity = ({ entity }: TEntity) => {
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
        <UpdateEntityForm onSuccess={oncloseDialog} entity={entity} />
      </Modal.Content>
    </Modal>
  );
};

export default UpdateEntity;
