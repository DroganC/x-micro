import { injectGlobal } from '@emotion/css';

export default (cssText: string) => {
  return injectGlobal(cssText);
};
