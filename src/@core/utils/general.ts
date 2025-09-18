import { INavLink } from '../types/general';

export const findNodeByKey = <T extends object = any>(
  data: Array<T & { subs: any[] }>,
  key: string,
) => {
  if (!data) return null;
  var result: T | null = null;
  data.forEach((item) => {
    if (item[key]) {
      result = item;
      return;
    } else {
      if (item.subs && !result) {
        result = findNodeByKey(item.subs, key);
        if (result) return;
      }
    }
  });
  return result;
};



export const generateUniqId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const findNavByPath = (navLinks: INavLink[], path: string) => {
  if (!navLinks || !path) return null;
  let result = null;
  navLinks.forEach((nav) => {
    if (nav.path === path) {
      result = nav;
      return;
    } else if (nav.subs) {
      const subResult = findNavByPath(nav.subs, path);
      if (subResult) {
        result = subResult;
        return;
      }
    }
  });
  return result;
};


export const delayTime = (ms:number)=> new Promise(resolve => setTimeout(resolve, ms));