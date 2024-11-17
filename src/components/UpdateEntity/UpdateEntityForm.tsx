import React from 'react';
import EntityForm from '@/components/EntityForm/EntityForm';
import useUpdateEntity from '@/components/UpdateEntity/UpdateEntity.hook';
import {
  SubmitType,
  TEntity,
  TonSuccess,
} from '@/components/EntityForm/EntityForm.types';

const UpdateEntityForm = ({ onSuccess, entity }: TonSuccess & TEntity) => {
  const { form, onUpdate, selectedType } = useUpdateEntity({ entity: entity });

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onUpdate(onSuccess)();
  };
  return (
    <EntityForm
      form={form}
      handleOnSubmit={handleOnSubmit}
      onSubmitType={SubmitType.UPDATE}
      selectedType={selectedType}
    />
  );
};

export default UpdateEntityForm;
