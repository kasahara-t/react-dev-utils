import { ulid } from 'ulid';
import { ULID } from '../models/ULID';

export const generateULID = (): ULID => {
  return ulid();
};
