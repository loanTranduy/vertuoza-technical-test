'use client';
import React from 'react';
import InputTextWithLabel from '@/components/inputs/InputTextWithLabel';
import { Form } from '@/components/ui/form';
import { TTextInputs } from '@/components/CreateEntity/CreateEntity.types';
import { Button } from '@/components/ui/button';
import useCreateEntity from '@/components/CreateEntity/CreateEntity.hook';

const textInputs: TTextInputs[] = [
  { name: 'name', label: 'Name *' },
  { type: 'Contact', name: 'email', label: 'Email *' },
  { type: 'Contact', name: 'phone', label: 'Phone' },
  { type: 'Company', name: 'industry', label: 'Industry *' },
  { type: 'Company', name: 'contactEmail', label: 'Email' },
];

const CreateEntityForm = () => {
  const { form, selectedType } = useCreateEntity();
  const renderInputs = () => {
    return textInputs
      .filter((textInput) => !textInput.type || textInput.type === selectedType)
      .map((textInput) => (
        <InputTextWithLabel
          key={textInput.name}
          name={textInput.name}
          label={textInput.label}
          control={form.control}
        />
      ));
  };

  return (
    <div>
      <Form {...form}>
        <form>
          <div className="grid gap-4">
            {renderInputs()}
            <Button type="submit" ariaLabel={'Add new entity'}>
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateEntityForm;
