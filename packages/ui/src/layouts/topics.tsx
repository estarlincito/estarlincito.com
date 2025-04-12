import { DataList } from '@radix-ui/themes';

import { SubTitle } from '@/components/ui/sub-title.jsx';

interface TopicsProps {
  topics: {
    label: string;
    value: string;
    key: number;
  }[];
}

export const Topics = ({ topics }: TopicsProps) => (
  <DataList.Root orientation={{ initial: 'vertical', sm: 'horizontal' }}>
    <SubTitle content='Topics Covered' mt='5' />
    {topics.map(({ key, label, value }) => (
      <DataList.Item key={key}>
        <DataList.Label minWidth='88px'>{label}</DataList.Label>
        <DataList.Value>{value}</DataList.Value>
      </DataList.Item>
    ))}
  </DataList.Root>
);
