import { Linkdoc } from '@/components/HOC';

const Copyright = () => {
  const date = new Date();
  const currentgeYear = date.getFullYear();
  const buildYear = 2023;
  const ownYears = `${buildYear}-${currentgeYear}`;

  return (
    <p className='text-sm mt-5'>
      &nbsp; Copyright © {buildYear === currentgeYear ? buildYear : ownYears}
      &nbsp;
      <Linkdoc href='/' target='_self'>
        Estarlincito
      </Linkdoc>
    </p>
  );
};

export default Copyright;
