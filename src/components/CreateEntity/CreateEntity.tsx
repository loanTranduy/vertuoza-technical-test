'use client';
import React, { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import { Button } from '@/components/ui/button';
import CreateEntityForm from '@/components/CreateEntity/CreateEntityForm';

const CreateEntity = () => {
  const [open, setOpen] = useState(false);
  const oncloseDialog = () => {
    setOpen(false);
  };
  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Trigger>
        <Button ariaLabel="Add entity">Add Entity</Button>
      </Modal.Trigger>
      <Modal.Content description="Insert information below" title="Add Entity">
        <CreateEntityForm onSuccess={oncloseDialog} />
      </Modal.Content>
    </Modal>
  );
};

export default CreateEntity;
