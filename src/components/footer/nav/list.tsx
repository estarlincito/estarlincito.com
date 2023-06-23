import Linkdoc from '@/components/UI/linkdoc';
import Links from '@/types/links';
import Target from '@/types/target';

interface ListProps {
  title: string;
  links: Links[];
  target: Target;
  className?: string;
}

const List = (props: ListProps) => {
  const { title, links, target, className } = props;

  return (
    <div className={className}>
      <h3 className='text-lg font-bold'>{title}</h3>
      <ul className='m-3 text-sm'>
        {links.map(({ route, label }, id) => (
          <li key={id}>
            <Linkdoc href={route} target={target} font='font-normal'>
              {label}
            </Linkdoc>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
