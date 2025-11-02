export interface PropsI {
  title: string;
}

export interface EmitsI {
  (evt: 'prev'): void;
  (evt: 'next'): void;
}
