import { TbMoodBoy } from 'react-icons/tb';
import BoxChat from './box';
import CopyChat from './copy';

interface HumanProps {
  question: string;
}

const Human = ({ question }: HumanProps) => {
  return (
    <BoxChat>
      <span>
        <TbMoodBoy />
      </span>

      <p>{question}</p>

      <CopyChat text={question} />
    </BoxChat>
  );
};

export default Human;
