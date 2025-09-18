export type TOption = {
  label: string;
  value: string | number;
};

export type TThemeMode = 'dark' | 'light';

export enum EThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
}

export enum ESortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
  None = '',
}

export enum ELanguage {
  KR = 'kr',
  EN = 'en',
  VI = 'vi',
}

export type TQueryPagination = {
  pageNo: number;
  pageSize: number;
  pageOffset?: number;
  sortBy: string;
  sortDirection: ESortDirection;
  searchKeyword?: string;
};

export type TMeta = {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalRows: number;
};

export type PayloadType<T> = T extends (...args: infer P) => Promise<[Error] | [undefined, T]>
  ? P
  : never;

export interface IObjLang {
  en: string;
  vi: string;
  ko: string;
}
export interface IFileInfo {
  fileId: string;
  fileName: string;
  fileSize: string;
  fileUrl: string;
  fileType: string;
}

export interface INavLink {
  title: string;
  path?: string;
  subs?: INavLink[];
  icon?: string;
  id: string;
}
