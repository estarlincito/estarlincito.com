import { Linkdoc } from '@/components/HOC';

//Types
interface Props {
  tags: string[];
}

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <div className='text-sm w-80 flex items-center'>
      <h5 className='font-bold'>Tags:</h5>
      <ul className='flex'>
        {tags.map((tag, id) => (
          <li key={id} className='m-1'>
            <Linkdoc
              href={`/blog/tags/${tag}`}
              target='_self'
              font='font-normal'
              color='sky'
            >
              #{tag}
            </Linkdoc>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
