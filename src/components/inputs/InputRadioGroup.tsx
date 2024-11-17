import React from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Control, FieldValues, Path } from 'react-hook-form';

type TInputRadioGroup<T extends FieldValues> = {
  control: Control<T>;
  inputsradio: string[];
  title: Path<T>;
};

const InputRadioGroup = <T extends FieldValues>({
  control,
  title,
  inputsradio,
}: TInputRadioGroup<T>) => {
  return (
    <FormField
      control={control}
      name={title}
      render={({ field }) => {
        return (
          <FormItem>
            {title && <FormLabel className="capitalize">{title}</FormLabel>}
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                {inputsradio.map((inputradio, index) => (
                  <FormItem
                    key={index}
                    className="flex items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem value={inputradio} />
                    </FormControl>
                    <FormLabel className="font-normal capitalize">
                      {inputradio}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default InputRadioGroup;
