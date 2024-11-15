import { z } from 'zod';

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const createFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(phoneRegex, 'Invalid Number!'),
  industry: z
    .string()
    .min(2, { message: 'Industry must contain at least 2 characters' })
    .optional(),
  contactEmail: z.string().email(),
  type: z.enum(['Contact', 'Company'], {
    message: 'You must select a client type.',
  }),
});

export type TFormSchema = z.input<typeof createFormSchema>;

export type TTextInputs = {
  type?: 'Contact' | 'Company';
  name: keyof TFormSchema;
  label: string;
  required?: boolean;
};
