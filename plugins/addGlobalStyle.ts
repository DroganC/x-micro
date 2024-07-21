import { IApi } from 'umi';

export default (api: IApi) => {
  api.addHTMLLinks(() => [
    {
      rel: 'stylesheet',
      href: './normalize.css',
    },
  ]);
};
