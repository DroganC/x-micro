/*
 * @Author: Droganc
 * @Date: 2023-11-01 21:41:58
 * @LastEditTime: 2023-11-01 21:42:02
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/src/components/Layouts/Sider/index.tsx
 */

import store from '@/store';
import cx from 'classnames';
import { observer } from 'mobx-react-lite';
import Expand from './Expand';
import { SiderWrapper } from './styled';

function Sider() {
  return (
    <SiderWrapper className={cx({ expand: store.layout.isExpand })}>
      {/* <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
        items={items2}
      /> */}
      12
      <Expand />
    </SiderWrapper>
  );
}

export default observer(Sider);
