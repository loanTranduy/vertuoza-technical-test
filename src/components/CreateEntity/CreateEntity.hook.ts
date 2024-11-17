import { useForm } from 'react-hook-form';
import {
  formSchema,
  TFormSchema,
} from '@/components/CreateEntity/CreateEntity.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@apollo/client';
import { CREATE_ENTITY } from '@/app/lib/graphql/mutation';
import { GET_ENTITIES } from '@/app/lib/graphql/queries';
import { toast } from '@/hooks/use-toast';
import {
  EntityType,
  TonSuccess,
} from '@/components/EntityForm/EntityForm.types';

const useCreateEntity = () => {
  const [createEntity] = useMutation(CREATE_ENTITY);
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
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
      entityType: data.type && data.type.toUpperCase(),
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

  const onCreate = (onSuccess: TonSuccess['onSuccess']) => {
    return form.handleSubmit(async (data: TFormSchema) => {
      await onSubmitInputs(data);
      onSuccess();
    });
  };

  return {
    form,
    selectedType,
    onCreate,
  };
};

export default useCreateEntity;
