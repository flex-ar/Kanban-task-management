import { IconCross } from '../icons';
import Button from './Button';

interface Props {
  onClick: () => void;
}
function CrossButton({ onClick }: Props) {
  return (
    <Button
      variant="ghost"
      className="rounded-full dark:hover:fill-red-500"
      onClick={onClick}
    >
      <span className="flex w-9 items-center justify-center">
        <IconCross />
      </span>
    </Button>
  );
}

export default CrossButton;
