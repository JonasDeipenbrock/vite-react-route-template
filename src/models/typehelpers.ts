import { ReactNode } from 'react';

export type WithChildren = {
    children: NonNullable<ReactNode>;
};

export type Nullable<T> = null | T;
