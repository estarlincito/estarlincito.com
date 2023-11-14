// 'use client';
import { Blockquote, Em, Strong } from '@radix-ui/themes';

interface Highlight {
  title: string;
  quote: string;
  author: string;
  url: string;
}

const Highlight = () => {
  // const [highlight, sethighlights] = useState({} as Highlight);
  // const url =
  //   'https://raw.githubusercontent.com/estarlincito/iDB/quotes/data_es.json';

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await fetch(url);
  //       const highlights: Highlight[] = await res.json();
  //       const random = Math.floor(Math.random() * highlights.length);
  //       sethighlights(highlights[random]);
  //     } catch (error) {
  //       throw new Error(`May the ${url} is wrong`);
  //     }
  //   })();
  // }, []);

  return (
    <Blockquote>
      {/* {highlight.quote}
      <br />
      {highlight.author === '...' ? null : (
        <Text as='span' weight='bold'>
          -{highlight.author}-
        </Text>
      )} */}

      <Em>
        Si tus planes no gustan, si tus sueños no encajan en moldes ajenos,
        hazlo: <Strong>vete solo.</Strong>
      </Em>
    </Blockquote>
  );
};

export default Highlight;
