export interface HeaderPropsI {
  title: string;
}

export interface HeaderEmitsI {
  (evt: 'prev'): void;
  (evt: 'next'): void;
}
