import React, { FC } from 'react';
import * as Alert from '@/components/ui/alert-dialog';
import {
  SubComponentsProps,
  TContent,
  TModal,
  TTrigger,
} from '@/components/Modal/Modal.types';
import { Button } from '@/components/ui/button';

const Trigger: FC<TTrigger> = ({ children }) => {
  if (!React.isValidElement(children) || children.type !== Button) {
    throw new Error('Modal.Trigger only accepts Button components');
  }
  return (
    <Alert.AlertDialogTrigger asChild>{children}</Alert.AlertDialogTrigger>
  );
};

const Content: FC<TContent> = ({ title, description, children }) => {
  return (
    <Alert.AlertDialogContent>
      <Alert.AlertDialogHeader>
        <Alert.AlertDialogTitle>{title}</Alert.AlertDialogTitle>
        {description && (
          <Alert.AlertDialogDescription>
            {description}
          </Alert.AlertDialogDescription>
        )}
      </Alert.AlertDialogHeader>
      {children}
    </Alert.AlertDialogContent>
  );
};

const Modal: FC<TModal> & SubComponentsProps = ({
  open,
  onOpenChange,
  children,
}) => {
  const childrenArray = React.Children.toArray(children);

  const trigger = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === Modal.Trigger
  );

  const content = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === Modal.Content
  );

  if (!trigger) {
    throw new Error('Modal requires a Modal.Trigger component.');
  }

  if (!content) {
    throw new Error('Modal requires a Modal.Content component.');
  }

  return (
    <Alert.AlertDialog open={open} onOpenChange={onOpenChange}>
      {trigger}
      {content}
    </Alert.AlertDialog>
  );
};

Modal.Trigger = Trigger;
Modal.Content = Content;

export default Modal;
