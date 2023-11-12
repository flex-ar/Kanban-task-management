import { useState, type ChangeEvent } from 'react';

export type Input = { id: string; value: string };
export const useForm = (initialState: Input[]) => {
  const [inputs, setInputs] = useState(initialState);

  function onChange({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = target;
    setInputs(
      inputs.map((i) => {
        return i.id === name ? { id: name, value } : i;
      })
    );
  }

  function addInput(input: Input) {
    setInputs(inputs.concat(input));
  }

  function deleteInput(id: string) {
    setInputs(inputs.filter((i) => i.id !== id));
  }

  return { inputs, onChange, addInput, deleteInput };
};
