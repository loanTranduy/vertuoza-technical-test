'use client';
import React from 'react';
import InputTextWithLabel from '@/components/inputs/InputTextWithLabel';
import { Form } from '@/components/ui/form';
import {
  EntityType,
  TTextInputs,
} from '@/components/CreateEntity/CreateEntity.types';
import { Button } from '@/components/ui/button';
import useCreateEntity from '@/components/CreateEntity/CreateEntity.hook';
import InputRadioGroup from '@/components/inputs/InputRadioGroup';

const types = [EntityType.CONTACT, EntityType.COMPANY];

const textInputs: TTextInputs[] = [
  { name: 'name', label: 'name', required: true },
  { type: EntityType.CONTACT, name: 'email', label: 'email', required: true },
  { type: EntityType.CONTACT, name: 'phone', label: 'phone' },
  {
    type: EntityType.COMPANY,
    name: 'industry',
    label: 'industry',
    required: true,
  },
  { type: EntityType.COMPANY, name: 'contactEmail', label: 'email' },
];

const CreateEntityForm = () => {
  const { form, selectedType, onSubmit } = useCreateEntity();
  const renderInputs = () => {
    return textInputs
      .filter((textInput) => !textInput.type || textInput.type === selectedType)
      .map((textInput) => (
        <InputTextWithLabel
          key={textInput.name}
          name={textInput.name}
          label={textInput.label}
          control={form.control}
          required={textInput.required}
        />
      ));
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <InputRadioGroup
              inputsradio={types}
              title={'type'}
              control={form.control}
            />
            {renderInputs()}
            <Button type="submit" ariaLabel={`Add new ${selectedType}`}>
              Add new {selectedType}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateEntityForm;
