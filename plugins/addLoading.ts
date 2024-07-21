import { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyHTML(($) => {
    $('#root').html(`<div>loading</div>`);
    return $;
  });
};
