import type { GenerateMetadataTypes } from '@estarlincito/utils';

interface Instances {
  title: string;
  description: string;
  images: [
    GenerateMetadataTypes['Images'],
    ...GenerateMetadataTypes['Images'][],
  ];
}

export default Instances;
