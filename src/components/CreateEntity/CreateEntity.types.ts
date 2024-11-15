import { z } from 'zod';

export enum EntityType {
  CONTACT = 'Contact',
  COMPANY = 'Company',
}

export type TTextInputs = {
  type?: 'Contact' | 'Company';
  name: keyof TFormSchema;
  label: string;
  required?: boolean;
};

const emptyStringToUndefined = z.literal('').transform(() => undefined);

export function asOptionalField<T extends z.ZodTypeAny>(schema: T) {
  return schema.optional().or(emptyStringToUndefined);
}

export const createFormSchema = z
  .object({
    type: z.enum([EntityType.CONTACT, EntityType.COMPANY]),
    name: z.string().min(2, 'Min 2 characters'),
    email: asOptionalField(z.string().email()),
    phone: asOptionalField(z.string().min(10, 'Min 10 characters')),
    contactEmail: asOptionalField(z.string().email('Invalid email format')),
    industry: asOptionalField(z.string().min(2)),
  })
  .refine(
    (data) => (data.type === EntityType.COMPANY ? !!data.industry : true),
    {
      message: 'Min 2 characters',
      path: ['industry'],
    }
  )
  .refine((data) => (data.type === EntityType.CONTACT ? !!data.email : true), {
    message: 'Invalid email format',
    path: ['email'],
  });

export type TFormSchema = z.infer<typeof createFormSchema>;
