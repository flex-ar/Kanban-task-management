import { useCallback, useRef, useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const outsideModalRef = useRef<HTMLDivElement>(null);

  function onOpen() {
    setIsOpen(true);
  }

  const onClose = useCallback(() => setIsOpen(false), []);

  function onToggle() {
    setIsOpen((v) => !v);
  }

  return { isOpen, modalRef, outsideModalRef, onOpen, onClose, onToggle };
};
