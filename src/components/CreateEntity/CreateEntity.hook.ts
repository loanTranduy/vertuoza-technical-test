import { useForm } from 'react-hook-form';
import {
  createFormSchema,
  TFormSchema,
} from '@/components/CreateEntity/CreateEntity.types';
import { zodResolver } from '@hookform/resolvers/zod';

const useCreateEntity = () => {
  const form = useForm<TFormSchema>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      type: 'Contact',
    },
  });
  const selectedType = form.watch('type');
  return {
    form,
    selectedType,
  };
};

export default useCreateEntity;
