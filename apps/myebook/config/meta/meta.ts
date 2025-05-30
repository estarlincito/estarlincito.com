import { ObjectUtils, throwAppError } from '@estarlincito/utils';

// eslint-disable-next-line no-restricted-imports
import type { Instances } from '../types/instances';

export class Meta {
  private static readonly instances: Instances[] = [];
  constructor(private readonly metadata: Instances) {
    if (Meta.instances.find((item) => item.title)) {
      throwAppError(
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
