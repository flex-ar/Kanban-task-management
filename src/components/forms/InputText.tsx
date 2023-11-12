import type { ChangeEvent } from 'react';

interface Props {
  textarea?: boolean;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
function InputText({
  textarea = false,
  name,
  value,
  placeholder,
  onChange,
}: Props) {
  if (textarea) {
    return (
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        className="w-full rounded-md px-4 py-2 text-sm font-normal outline outline-1 placeholder:italic dark:bg-slate-900 dark:outline-slate-600 dark:hover:outline-sky-400 dark:focus:outline-sky-400"
        onChange={onChange}
      />
    );
  }

  return (
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      className="w-full rounded-md px-4 py-2 text-sm font-normal outline outline-1 placeholder:italic dark:bg-slate-900 dark:outline-slate-600 dark:hover:outline-sky-400 dark:focus:outline-sky-400"
      onChange={onChange}
    />
  );
}

export default InputText;
