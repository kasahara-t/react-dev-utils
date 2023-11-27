export type UUID = string;

export type UUIDType = 'v1' | 'v3' | 'v4' | 'v5';

export type UUIDGenerateHandler = (type: UUIDType, name?: string, namespace?: string) => () => void;
