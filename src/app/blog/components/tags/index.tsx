import Title from '@/components/UI/title';
import Template from './Template';
import TasgList from './tagsList';

const TagsLayout = () => {
  return (
    <Template>
      <Title text='Tags' />
      <TasgList />
    </Template>
  );
};

export default TagsLayout;
