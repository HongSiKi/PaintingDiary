import { snakeCaseToCamelCase } from '../utils/stringUtil';

const convertObjectWithCamelCase = (obj: any): any => {
  if (typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(convertObjectWithCamelCase);
  }

  const newObj: Record<string | number | symbol, any> = {};

  Object.entries(obj).forEach(([rawKey, value]) => {
    const key = snakeCaseToCamelCase(rawKey);
    newObj[key] = convertObjectWithCamelCase(value);
  });

  return newObj;
};

const customFetch = (url: string, options: any = {}) => {
  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => convertObjectWithCamelCase(json));
};

export default customFetch;
