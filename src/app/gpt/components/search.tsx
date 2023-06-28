import clsx from 'clsx';

const Search = () => {
  return (
    <input
      required
      type='text'
      name='search'
      placeholder='Write here'
      className={clsx('p-8 rounded-sm outline-none', 'dark:text-black')}
    />
  );
};

export default Search;
