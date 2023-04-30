import { IconPlus } from '@/components/HOC';
import {
  TbClockFilled,
  TbDiscountCheckFilled,
  TbEyeFilled,
} from 'react-icons/tb';

interface Props {
  check: boolean;
  readingTime: string;
}

const Check: React.FC<Props> = ({ check, readingTime }) => {
  return (
    <ul className='flex flex-row gap-x-5 -order-4'>
      {check === false ? (
        <IconPlus>
          <i className='text-sky-600 dark:text-sky-400'>
            <TbEyeFilled />
          </i>
          <span>En revisión</span>
        </IconPlus>
      ) : (
        <IconPlus>
          <i className='text-sky-600 dark:text-sky-400'>
            <TbDiscountCheckFilled />
          </i>
          <span>Verificado</span>
        </IconPlus>
      )}

      <IconPlus>
        <i className='text-slate-600 dark:text-slate-400'>
          <TbClockFilled />
        </i>
        <span>{readingTime}</span>
      </IconPlus>
    </ul>
  );
};

export default Check;
