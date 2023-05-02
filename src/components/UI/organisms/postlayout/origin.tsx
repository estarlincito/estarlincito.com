import { Linkdoc } from '@/components/HOC';
import Strong from './post/strong';

interface Props {
  origin: string;
}

const Origin: React.FC<Props> = ({ origin }) => {
  const url = origin === '' ? null : new URL(origin);

  return (
    <>
      {url === null ? null : (
        <p>
          <Strong>Fuente original:</Strong>{' '}
          <Linkdoc href={url.href} target='_blank' color='sky'>
            {url.hostname.replaceAll('www.', '')}
          </Linkdoc>
        </p>
      )}
    </>
  );
};

export default Origin;
