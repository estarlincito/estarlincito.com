import Linkdoc from '@/components/UI/linkdoc';
import Strong from '../mdxcontent/strong';

interface OriginProps {
  origin: string;
}
const Origin = (props: OriginProps) => {
  const url = props.origin === '' ? null : new URL(props.origin);

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
