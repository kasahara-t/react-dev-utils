import { v4 as uuidv4, v1 as uuidv1, v3 as uuidv3, v5 as uuidv5 } from 'uuid';
import { UUID, UUIDType } from '../models/UUID';

export interface UUIDOptions {
  name?: string;
}

const defaultOptions: UUIDOptions = {
  name: 'default-name',
};

export const generateUUID = (type: UUIDType, options?: UUIDOptions): UUID => {
  const mergedOptions = { ...defaultOptions, ...options };

  switch (type) {
    case 'v1':
      return uuidv1();
    case 'v3':
      return uuidv3(mergedOptions.name!, uuidv3.DNS);
    case 'v4':
      return uuidv4();
    case 'v5':
      return uuidv5(mergedOptions.name!, uuidv5.DNS);
    default:
      throw new Error(`Unknown UUID type: ${type}`);
  }
};
