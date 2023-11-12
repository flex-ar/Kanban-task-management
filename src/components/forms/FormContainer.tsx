import type { FormEvent, ReactNode } from 'react';

interface Props {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}
function FormContainer({ onSubmit, children }: Props) {
  return (
    <form
      className="flex max-h-[80vh] flex-col gap-6 overflow-auto px-3 text-lg font-bold"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(event);
      }}
    >
      {children}
    </form>
  );
}

export default FormContainer;
