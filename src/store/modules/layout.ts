import { makeAutoObservable } from 'mobx';

class Layout {
  isExpand = true;

  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  toggleExpand() {
    this.isExpand = !this.isExpand;
  }
}

export default Layout;
