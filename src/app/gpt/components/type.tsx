import clsx from 'clsx';

const Type = () => {
  return (
    <select
      required
      name='type'
      className={clsx('p-3 rounded-sm', 'dark:text-black')}
    >
      <option value='spelling'>Spelling</option>
      <option value='fix'>Fix</option>
      <option value='this in Spanish'>This in Spanish</option>
      <option value='this in English'>This in English</option>
      <option value=''>None</option>
    </select>
  );
};

export default Type;
