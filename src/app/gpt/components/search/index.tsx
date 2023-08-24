import { Box } from '@radix-ui/themes';
import Styled from '../../gpt.module.scss';
import Formsearch from './form';

const Search = () => {
  return (
    <Box className={Styled.box}>
      <Formsearch />
    </Box>
  );
};

export default Search;
