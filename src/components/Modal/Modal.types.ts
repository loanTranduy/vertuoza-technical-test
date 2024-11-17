import { FC, ReactElement, ReactNode } from 'react';
import { ButtonProps } from '@/components/ui/button';

export type TModal = {
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
};

export type TTrigger = {
  children: ReactElement<ButtonProps>;
};

export type TContent = {
  title: string;
  description?: string;
  children: ReactNode;
};

export type SubComponentsProps = {
  Content: FC<TContent>;
  Trigger: FC<TTrigger>;
};
