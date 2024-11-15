'use client';
import React from 'react';
import InputTextWithLabel from '@/components/inputs/InputTextWithLabel';
import { Form } from '@/components/ui/form';
import { TTextInputs } from '@/components/CreateEntity/CreateEntity.types';
import { Button } from '@/components/ui/button';
import useCreateEntity from '@/components/CreateEntity/CreateEntity.hook';
import InputRadioGroup from '@/components/inputs/InputRadioGroup';

const textInputs: TTextInputs[] = [
  { name: 'name', label: 'Name', required: true },
  { type: 'Contact', name: 'email', label: 'email', required: true },
  { type: 'Contact', name: 'phone', label: 'phone' },
  { type: 'Company', name: 'industry', label: 'industry', required: true },
  { type: 'Company', name: 'contactEmail', label: 'email' },
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
          required={textInput.required}
        />
      ));
  };

  const types = ['Contact', 'Company'];

  return (
    <div>
      <Form {...form}>
        <form>
          <div className="grid gap-4">
            <InputRadioGroup
              inputsradio={types}
              title={'type'}
              control={form.control}
            />
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
