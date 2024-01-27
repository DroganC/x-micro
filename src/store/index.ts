import { makeAutoObservable } from 'mobx';
import Layout from './modules/layout';
import Menus from './modules/menus';
import User from './modules/user';
class Global {
  user: User = new User();
  menus: Menus = new Menus();
  layout: Layout = new Layout();

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  *inital(render) {
    yield this.user.fetchUser();
    yield this.menus.fetchMenus();
    return render();
  }
}

export default new Global();
