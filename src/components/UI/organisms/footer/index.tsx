import clsx from 'clsx';
import Nav from './nav';

const Footer = () => {
  return (
    <footer
      className={clsx(
        'p-5 md:p-16',
        'border-t-[1px] border-gray-300 dark:border-gray-800',
        'bg-gray-50 dark:bg-inherit'
      )}
    >
      <Nav />
    </footer>
  );
};

export default Footer;
