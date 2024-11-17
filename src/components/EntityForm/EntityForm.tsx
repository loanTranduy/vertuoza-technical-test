'use client';
import React, { FC } from 'react';
import InputTextWithLabel from '@/components/inputs/InputTextWithLabel';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import InputRadioGroup from '@/components/inputs/InputRadioGroup';
import { AlertDialogCancel as ButtonCancel } from '@/components/ui/alert-dialog';
import {
  EntityType,
  SubmitType,
  TEntityForm,
  TTextInputs,
  types,
} from '@/components/EntityForm/EntityForm.types';

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

const EntityForm: FC<TEntityForm> = ({
  withTypes,
  onSubmitType,
  handleOnSubmit,
  form,
  selectedType,
}) => {
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
        <form onSubmit={handleOnSubmit}>
          <div className="grid gap-12">
            <div className="grid gap-4">
              {withTypes && (
                <InputRadioGroup
                  inputsradio={types}
                  title={'type'}
                  control={form.control}
                />
              )}
              {renderInputs()}
            </div>
            <div className="flex justify-between">
              <ButtonCancel>Cancel</ButtonCancel>
              <Button type="submit" ariaLabel={`Add new ${selectedType}`}>
                {onSubmitType === SubmitType.UPDATE ? 'Update' : 'Add new'}{' '}
                {selectedType}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EntityForm;
