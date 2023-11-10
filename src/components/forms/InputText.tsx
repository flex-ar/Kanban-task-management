import type { ChangeEvent } from 'react';

interface Props {
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
function InputText({ name, value, placeholder, onChange }: Props) {
  return (
    <input
      name={name}
      value={value}
      className="w-full rounded-md px-4 py-2 text-sm font-normal outline outline-1 placeholder:italic dark:bg-slate-900 dark:outline-slate-600 dark:hover:outline-sky-400 dark:focus:outline-sky-400"
      placeholder={placeholder}
      type="text"
      onChange={onChange}
    />
  );
}

export default InputText;
