import { getMenus } from '@/services/apis/global';
import { makeAutoObservable } from 'mobx';

class Menus {
  menus: any;

  constructor(menuInfo?) {
    makeAutoObservable(this, undefined, { autoBind: true });
    this.menus = menuInfo ?? [];
  }

  *fetchMenus() {
    const menus = yield getMenus();
    this.menus = menus;
  }
}

export default Menus;
