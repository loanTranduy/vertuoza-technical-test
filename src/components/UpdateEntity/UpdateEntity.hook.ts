import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@apollo/client';
import { UPDATE_ENTITY } from '@/app/lib/graphql/mutation';
import { GET_ENTITIES } from '@/app/lib/graphql/queries';
import { toast } from '@/hooks/use-toast';
import {
  TEntity,
  EntityType,
  TonSuccess,
} from '@/components/EntityForm/EntityForm.types';
import {
  formSchema,
  TFormSchema,
} from '@/components/CreateEntity/CreateEntity.types';

const useUpdateEntity = ({ entity }: TEntity) => {
  const [updateEntity] = useMutation(UPDATE_ENTITY);
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...(entity ?? {}),
      name: entity?.name ?? '',
      email: entity?.email ?? '',
      phone: entity?.phone ?? '',
      industry: entity?.industry ?? '',
      contactEmail: entity?.contactEmail ?? '',
    },
  });

  const selectedType = form.watch('__typename');

  const onSubmitInputs = (data: TFormSchema) => {
    const filteredDataType = () => {
      if (data.__typename === EntityType.CONTACT) {
        return {
          email: data.email,
          phone: data.phone,
        };
      } else if (data.__typename === EntityType.COMPANY) {
        return {
          industry: data.industry,
          contactEmail: data.contactEmail,
        };
      }
    };

    const input = {
      id: form.getValues('id'),
      entityType: data.__typename && data.__typename.toUpperCase(),
      name: data.name,
      ...filteredDataType(),
    };
    updateEntity({
      variables: { input },
      refetchQueries: [{ query: GET_ENTITIES }],
    });
    toast({
      variant: 'success',
      title: `${data.name} saved successfully`,
    });
  };

  const onUpdate = (onSuccess: TonSuccess['onSuccess']) => {
    return form.handleSubmit(async (data: TFormSchema) => {
      await onSubmitInputs(data);
      onSuccess();
    });
  };

  return {
    form,
    selectedType,
    updateEntity,
    onUpdate,
  };
};

export default useUpdateEntity;
