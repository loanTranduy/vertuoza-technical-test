import { ReactNode } from 'react';

export type TModal = {
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  title: string;
  description: string;
  actionAriaLabel: string;
  actionLabel: string;
};
