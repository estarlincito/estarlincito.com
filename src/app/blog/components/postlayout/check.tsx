import IconPlus from '@/components/UI/iconplus';
import clsx from 'clsx';
import {
  TbClockFilled,
  TbDiscountCheckFilled,
  TbEyeFilled,
} from 'react-icons/tb';

interface CheckProps {
  check: boolean;
  readingTime: string;
  className: string;
}

const Check = (props: CheckProps) => {
  return (
    <ul
      className={clsx(
        'flex flex-row gap-x-5',
        props.className && props.className
      )}
    >
      {props.check === false ? (
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
        <span>{props.readingTime}</span>
      </IconPlus>
    </ul>
  );
};

export default Check;
