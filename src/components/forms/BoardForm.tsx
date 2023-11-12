import { randomId } from '../../utils';
import Button from '../buttons/Button';
import CrossButton from '../buttons/CrossButton';
import { type Input, useForm } from '../../hooks/useForm';
import { IconAddTask } from '../icons';
import FormContainer from './FormContainer';
import InputText from './InputText';
import { boards } from '../../data.json';

interface Props {
  title: string;
  textButton: string;
  boardId?: number;
  onSubmit: (inputs: Input[]) => void;
}
function BoardForm({ title, textButton, boardId, onSubmit }: Props) {
  const board =
    boardId === undefined
      ? { name: '', columns: [{ name: '' }, { name: '' }] }
      : boards[boardId];

  const columnsValues = board.columns.map(({ name }) => ({
    id: randomId('col'),
    value: name,
  }));

  const { inputs, onChange, addInput, deleteInput } = useForm([
    { id: 'name', value: board.name },
    ...columnsValues,
  ]);

  const colInputs = inputs.slice(1);

  return (
    <FormContainer onSubmit={() => onSubmit(inputs)}>
      <p>{title}</p>
      <div>
        <p className="mb-3 text-sm">Board Name</p>
        <InputText
          name={inputs[0].id}
          value={inputs[0].value}
          placeholder="e.g. Web Design"
          onChange={onChange}
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm">Board Columns</p>
        {colInputs.map(({ id, value }) => (
          <div key={id} className="flex gap-2">
            <InputText
              name={id}
              value={value}
              placeholder="e.g. Todo..."
              onChange={onChange}
            />
            <CrossButton
              onClick={() => {
                if (colInputs.length > 2) deleteInput(id);
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
