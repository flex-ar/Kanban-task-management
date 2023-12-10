import { createBoard, createColumn, randomId } from '../../utils';
import Button from '../buttons/Button';
import CrossButton from '../buttons/CrossButton';
import { type Input, useForm } from '../../hooks/useForm';
import { IconAddTask } from '../icons';
import FormContainer from './FormContainer';
import InputText from './InputText';
import type { Board, Column } from '../../types';

interface Props {
  title: string;
  textButton: string;
  board?: Board;
  columns?: Column[];
  onSubmit: (inputs: Input[]) => void;
}
function BoardForm({
  title,
  textButton,
  board = createBoard(),
  columns = [createColumn(), createColumn()],
  onSubmit,
}: Props) {
  const initialStateForm: Input[] = [
    { id: board.id, value: board.name },
  ].concat(
    columns.map((col) => ({
      id: col.id,
      value: col.name,
    }))
  );

  const { inputs, onChange, addInput, deleteInput } = useForm(initialStateForm);
  const [boardInput, ...columnInputs] = inputs;

  return (
    <FormContainer onSubmit={() => onSubmit(inputs)}>
      <p>{title}</p>
      <div>
        <p className="mb-3 text-sm">Board Name</p>
        <InputText
          name={boardInput.id}
          value={boardInput.value}
          placeholder="e.g. Web Design"
          onChange={onChange}
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm">Board Columns</p>
        {columnInputs.map(({ id, value }) => (
          <div key={id} className="flex gap-2">
            <InputText
              name={id}
              value={value}
              placeholder="e.g. Todo..."
              onChange={onChange}
            />
            <CrossButton
              onClick={() => {
                if (columnInputs.length > 2) deleteInput(id);
              }}
            />
          </div>
        ))}
        <Button
          variant="secondary"
          className="flex items-center justify-center gap-1 rounded-full py-2 text-sm"
          onClick={() => addInput({ id: randomId('col'), value: '' })}
        >
          <span>
            <IconAddTask />
          </span>
          Add New Column
        </Button>
      </div>
      <Button type="submit" className="rounded-full py-2 text-sm">
        {textButton}
      </Button>
    </FormContainer>
  );
}

export default BoardForm;
