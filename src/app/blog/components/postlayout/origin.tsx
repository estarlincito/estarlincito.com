import { Link, Strong } from '@radix-ui/themes';

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
          <Link href={url.href} target='_blank'>
            {url.hostname.replaceAll('www.', '')}
          </Link>
        </p>
      )}
    </>
  );
};

export default Origin;
