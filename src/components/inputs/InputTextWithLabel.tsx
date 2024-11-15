import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control, FieldValues, Path } from 'react-hook-form';

type TInputTextWithLabel<T extends FieldValues> = {
  placeholder?: string;
  control: Control<T>;
  name: Path<T>;
  label: string;
};

const InputTextWithLabel = <T extends FieldValues>({
  label,
  name,
  placeholder,
  control,
}: TInputTextWithLabel<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <FormControl>
              <Input
                {...field}
                id={name}
                placeholder={placeholder}
                value={field.value as string}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default InputTextWithLabel;
