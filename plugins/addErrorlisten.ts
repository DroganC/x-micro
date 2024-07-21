import { IApi } from 'umi';

export default (api: IApi) => {
  api.addHTMLHeadScripts(() => {
    return `
        window.addEventListener('error', function (event) {
            if (
                event.message &&
                String(event.message).toLowerCase().includes('chunk') &&
                String(event.message).toLowerCase().includes('falied')
            ) {
                window.location.replace(window.location.href);
            }
        });
        `;
  });
};
