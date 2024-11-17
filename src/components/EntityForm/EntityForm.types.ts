import { TFormSchema } from '@/components/CreateEntity/CreateEntity.types';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';

export type TTextInputs = {
  type?: 'Contact' | 'Company';
  name: keyof TFormSchema;
  label: string;
  required?: boolean;
};

export type TEntity = {
  entity?: TFormSchema;
};

export type TEntityForm = {
  withTypes?: boolean;
  onSubmitType?: SubmitType;
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
  form: ReturnType<typeof useForm<TFormSchema>>;
  selectedType?: EntityType;
} & TEntity;

export enum EntityType {
  CONTACT = 'Contact',
  COMPANY = 'Company',
}

export const types = [EntityType.CONTACT, EntityType.COMPANY];

export enum SubmitType {
  CREATE = 'Create',
  UPDATE = 'Update',
}

export type TonSuccess = {
  onSuccess: () => void;
};
