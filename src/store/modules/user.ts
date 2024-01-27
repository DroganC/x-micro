/*
 * @Author: Droganc
 * @Date: 2023-11-01 20:52:38
 * @LastEditTime: 2023-11-01 20:53:10
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/src/store/modules/userStore.ts
 */

import { getUserInfo } from '@/services/apis/global';
import { makeAutoObservable } from 'mobx';

class User {
  user: any;

  constructor(userInfo?) {
    makeAutoObservable(this, undefined, { autoBind: true });
    this.user = userInfo;
  }

  *fetchUser() {
    const user = yield getUserInfo();
    this.user = user;
  }
}

export default User;
