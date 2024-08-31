import Title from '@/components/UI/title';
import TasgList from './tagsList';
import Template from './template';

const TagsLayout = () => {
  return (
    <Template>
      <Title text='Tags' />
      <TasgList />
    </Template>
  );
};

export default TagsLayout;
