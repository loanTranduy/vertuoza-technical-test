'use client';
import React, { useState } from 'react';
import CreateEntityForm from '@/components/CreateEntity/CreateEntityForm';
import Modal from '@/components/Modal/Modal';

const CreateEntity = () => {
  const [open, setOpen] = useState(false);
  const oncloseDialog = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onOpenChange={setOpen}
      actionAriaLabel="Add Entity"
      actionLabel="Add Entity"
      description="Insert information below"
      title="Add Entity"
    >
      <CreateEntityForm onSuccess={oncloseDialog} />
    </Modal>
  );
};

export default CreateEntity;
