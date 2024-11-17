import { z } from 'zod';
import { EntityType } from '@/components/EntityForm/EntityForm.types';

const emptyStringToUndefined = z.literal('').transform(() => undefined);

export function asOptionalField<T extends z.ZodTypeAny>(schema: T) {
  return schema.optional().or(emptyStringToUndefined);
}

export type TFormSchema = z.infer<typeof formSchema>;

export const typeSchema = z.enum([EntityType.CONTACT, EntityType.COMPANY]);
const nameMessage = 'Min 2 characters';
const emailMessage = 'Invalid email format';
export const formSchema = z
  .object({
    id: asOptionalField(z.string()),
    type: asOptionalField(typeSchema),
    name: z.string().min(2, nameMessage),
    email: asOptionalField(z.string().email()),
    phone: asOptionalField(z.string().min(10, 'Min 10 characters')),
    contactEmail: asOptionalField(z.string().email(emailMessage)),
    industry: asOptionalField(z.string().min(2)),
    __typename: asOptionalField(typeSchema),
  })
  .refine(
    (data) => (data.type === EntityType.COMPANY ? !!data.industry : true),
    {
      message: nameMessage,
      path: ['industry'],
    }
  )
  .refine((data) => (data.type === EntityType.CONTACT ? !!data.email : true), {
    message: emailMessage,
    path: ['email'],
  });
