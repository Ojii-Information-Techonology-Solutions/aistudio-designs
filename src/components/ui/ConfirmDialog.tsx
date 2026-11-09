import React from 'react';
import { Dialog } from './Dialog';
import { Button } from './Button';
import { AlertTriangle, Info, CheckCircle2, ShieldAlert } from 'lucide-react';

export interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'danger' | 'primary' | 'luxury-gold';
  isLoading?: boolean;
  icon?: 'warning' | 'info' | 'danger';
  id?: string;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'primary',
  isLoading = false,
  icon = 'warning',
  id = 'confirm-dialog'
}) => {
  const iconMap = {
    warning: <AlertTriangle className="w-6 h-6 text-[#C5A059]" />,
    danger: <ShieldAlert className="w-6 h-6 text-[#801524]" />,
    info: <Info className="w-6 h-6 text-[#1A1A1A]" />
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      id={id}
      showCloseButton={!isLoading}
      footer={
        <>
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
            disabled={isLoading}
            id={`${id}-cancel-btn`}
          >
            {cancelLabel}
          </Button>
          <Button
            variant={variant === 'danger' ? 'danger' : variant === 'luxury-gold' ? 'luxury-gold' : 'primary'}
            size="sm"
            onClick={onConfirm}
            isLoading={isLoading}
            id={`${id}-confirm-btn`}
          >
            {confirmLabel}
          </Button>
        </>
      }
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#F2F0ED] border border-[#E5E1DA] shrink-0">
          {iconMap[icon]}
        </div>
        <div className="space-y-1">
          <h4 className="font-serif text-lg font-light text-[#1A1A1A]">{title}</h4>
          <p className="text-xs text-gray-500 font-sans leading-relaxed">{description}</p>
        </div>
      </div>
    </Dialog>
  );
};

export interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  buttonText?: string;
  id?: string;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  isOpen,
  onClose,
  title,
  message,
  type = 'info',
  buttonText = 'Acknowledge',
  id = 'alert-dialog'
}) => {
  const typeMap = {
    info: {
      icon: <Info className="w-6 h-6 text-[#1A1A1A]" />,
      badge: 'Information Notice',
      btnVariant: 'primary' as const
    },
    success: {
      icon: <CheckCircle2 className="w-6 h-6 text-[#165834]" />,
      badge: 'Action Completed',
      btnVariant: 'primary' as const
    },
    warning: {
      icon: <AlertTriangle className="w-6 h-6 text-[#C5A059]" />,
      badge: 'Attention Required',
      btnVariant: 'luxury-gold' as const
    },
    error: {
      icon: <ShieldAlert className="w-6 h-6 text-[#801524]" />,
      badge: 'Security / Process Alert',
      btnVariant: 'danger' as const
    }
  };

  const current = typeMap[type];

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      size="sm"
      id={id}
      footer={
        <Button
          variant={current.btnVariant}
          size="sm"
          onClick={onClose}
          id={`${id}-ack-btn`}
          fullWidth
        >
          {buttonText}
        </Button>
      }
    >
      <div className="text-center py-2 space-y-3">
        <div className="w-12 h-12 mx-auto bg-[#F2F0ED] border border-[#E5E1DA] flex items-center justify-center">
          {current.icon}
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] text-gray-500 font-medium block">
          {current.badge}
        </span>
        <h4 className="font-serif text-xl font-light text-[#1A1A1A]">{title}</h4>
        <p className="text-xs text-gray-600 font-sans leading-relaxed max-w-xs mx-auto">
          {message}
        </p>
      </div>
    </Dialog>
  );
};
