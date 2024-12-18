import React from 'react';
import EntityForm from '@/components/EntityForm/EntityForm';
import useCreateEntity from '@/components/CreateEntity/CreateEntity.hook';
import {
  SubmitType,
  TonSuccess,
} from '@/components/EntityForm/EntityForm.types';

const CreateEntityForm = ({ onSuccess }: TonSuccess) => {
  const { form, selectedType, onCreate } = useCreateEntity();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(onSuccess)();
  };

  return (
    <EntityForm
      form={form}
      handleOnSubmit={handleOnSubmit}
      withTypes
      onSubmitType={SubmitType.CREATE}
      selectedType={selectedType}
    />
  );
};

export default CreateEntityForm;
