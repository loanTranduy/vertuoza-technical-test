import { useForm } from 'react-hook-form';
import {
  createFormSchema,
  EntityType,
  TFormSchema,
  TonSuccess,
} from '@/components/CreateEntity/CreateEntity.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@apollo/client';
import { CREATE_ENTITY } from '@/app/lib/graphql/mutation';
import { GET_ENTITIES } from '@/app/lib/graphql/queries';
import { toast } from '@/hooks/use-toast';

const useCreateEntity = () => {
  const [createEntity] = useMutation(CREATE_ENTITY);
  const form = useForm<TFormSchema>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      industry: '',
      contactEmail: '',
      type: EntityType.CONTACT,
    },
  });
  const selectedType = form.watch('type');

  const onSubmitInputs = async (data: TFormSchema) => {
    const filteredDataType = () => {
      if (data.type === EntityType.CONTACT) {
        return {
          email: data.email,
          phone: data.phone,
        };
      } else if (data.type === EntityType.COMPANY) {
        return {
          industry: data.industry,
          contactEmail: data.contactEmail,
        };
      }
    };

    const input = {
      entityType: data.type.toUpperCase(),
      name: data.name,
      ...filteredDataType(),
    };

    try {
      await createEntity({
        variables: { input },
        refetchQueries: [{ query: GET_ENTITIES }],
      });
      toast({
        variant: 'success',
        title: `${data.name} added successfully`,
      });
      form.reset();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: `${error}`,
      });
    }
  };

  const onSubmit = (onSuccess: TonSuccess['onSuccess']) => {
    return form.handleSubmit((data: TFormSchema) => {
      onSubmitInputs(data);
      onSuccess();
    });
  };

  return {
    form,
    selectedType,
    onSubmit,
  };
};

export default useCreateEntity;
