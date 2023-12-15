/*
 * @Author: Droganc
 * @Date: 2023-10-28 16:07:52
 * @LastEditTime: 2023-10-28 16:18:44
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/plugin.ts
 */
import { IApi } from 'umi';

export default (api: IApi) => {
  // 增加错误处理
  api.addHTMLHeadScripts(() => {
    return `
        window.addEventListener('error', function (event) {
            if (
            event.message &&
            String(event.message).includes('chunk') &&
            String(event.message).includes('falied')
            ) {
            window.location.replace(window.location.href);
            }
        });


        // function zoom() {
        //   const body = document.body;
        //   const ratio = String(1 / window.devicePixelRatio);
        //   body.style.setProperty('zoom', ratio);
        //   body.style.setProperty('--zoom', ratio);
        //   return ratio;
        // }

        // window.onload = function(){
        //   zoom();
        //   const style = document.createElement("style");
        //   const cssText = 'div[data-echarts] canvas { zoom: calc(1 / var(--zoom)); transform: scale(var(--zoom)); transform-origin:0 0;}  a {color:red}';
        //   style.appendChild(document.createTextNode(cssText));
        //   document.head.appendChild(style);
        // };
        // window.onresize = zoom;
    `;
  });
};
