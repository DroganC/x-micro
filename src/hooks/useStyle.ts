/*
 * @Author: Droganc
 * @Date: 2023-11-01 21:27:41
 * @LastEditTime: 2023-11-01 21:28:26
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/src/hooks/useStyle.ts
 */
import { theme } from 'antd';

function useStyle() {
  return theme.useToken();
}

export default useStyle;
