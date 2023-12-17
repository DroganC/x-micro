/*
 * @Author: Droganc
 * @Date: 2023-10-28 15:14:22
 * @LastEditTime: 2023-10-28 17:13:24
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/.fatherrc.ts
 */

import { defineConfig } from 'father';

export default defineConfig({
  umd: {
    entry: {
      './scripts/react': {},
      './scripts/vendors': {
        externals: {
          react: 'var window.React',
          'react-dom': 'var window.ReactDOM',
          dayjs: 'var window.dayjs',
        },
      },
    },
    output: {
      path: './public/vendor',
    },
  },
});
