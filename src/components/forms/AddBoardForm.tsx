import { randomId } from '../../utils';
import Button from '../buttons/Button';
import CrossButton from '../buttons/CrossButton';
import InputText from './InputText';
import { IconAddTask } from '../icons';
import { useForm } from '../hooks/useForm';

function AddBoardForm() {
  const { inputs, onChange, addInput, deleteInput } = useForm([
    { id: 'name', value: '' },
    { id: randomId('col'), value: '' },
    { id: randomId('col'), value: '' },
  ]);
  const colInputs = inputs.slice(1);

  return (
    <form
      className="flex max-h-[80vh] flex-col gap-6 overflow-auto px-3 text-lg font-bold"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(inputs);
      }}
    >
      <p>Add New Board</p>
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
        Create New Board
      </Button>
    </form>
  );
}

export default AddBoardForm;
