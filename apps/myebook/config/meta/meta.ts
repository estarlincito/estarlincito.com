import { handleError, ObjectUtils } from '@estarlincito/utils';
import type Instances from 'config/types/instances';

class Meta {
  private static readonly instances: Instances[] = [];
  constructor(private readonly metadata: Instances) {
    if (Meta.instances.find((item) => item.title)) {
      handleError(
        'This item already exists in the instances of Meta config/meta/meta.ts',
      );
    }

    Meta.instances.push(
      ObjectUtils.freeze({
        description: this.metadata.description,
        images: this.metadata.images,
        title: this.metadata.title,
      }),
    );
  }

  get meta() {
    return Meta.instances;
  }
}

export default Meta;
