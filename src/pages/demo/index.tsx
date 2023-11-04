/*
 * @Author: Droganc
 * @Date: 2023-10-28 15:57:15
 * @LastEditTime: 2023-11-01 20:15:52
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/src/pages/demo/index.tsx
 */

import { Button } from 'antd';
import styles from './index.less';

function Demo() {
  return (
    <div className={styles.demo}>
      <Button type="primary">awqe</Button>
      demo 1<i className="fa-solid fa-user"></i>2
      <i className="fa-solid fa-user"></i>3
      <i className="fa-regular fa-user"></i>4
      <i className="fa-light fa-user"></i>5
      <i className="fa-duotone fa-user"></i>6<i className="fa-thin fa-user"></i>
      7<i className="fa-sharp fa-solid fa-user"></i>8
      <i className="fa-sharp fa-regular fa-user"></i>9
      <i className="fa-sharp fa-light fa-user"></i>
      10
      <i className="fa-brands fa-github-square"></i>
    </div>
  );
}

export default Demo;
