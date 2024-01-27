import { getUserInfo } from '@/services/apis/global';
import { makeAutoObservable } from 'mobx';
class Global {
  user;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  *inital(render) {
    this.user = yield getUserInfo();
    return render();
  }
}

export const globalStore = new Global();
