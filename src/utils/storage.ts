/*
 * @Author: Droganc
 * @Date: 2023-11-01 21:05:20
 * @LastEditTime: 2023-11-01 21:20:56
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/src/utils/storage.ts
 */
class LocalStorage {
  storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  //   获取ietem
  getItem(key: string) {
    let item: any = this.storage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (error) {
      return item;
    }
  }

  getItems(keys: string[]) {
    return keys.map((key) => this.getItem(key));
  }

  setItem(key: string, data: any) {
    if (typeof data === 'string') {
      return this.storage.setItem(key, data);
    }
    return this.storage.setItem(key, JSON.stringify(data));
  }

  setItems(options: Record<string, any> = {}) {
    for (let key in options) {
      if (options.hasOwnProperty(key)) this.setItem(key, options[key]);
    }
  }

  removeItem(key: string) {
    return this.storage.removeItem(key);
  }

  clear() {
    return this.storage.clear();
  }
}

export const Session = (window['Session'] ??= new LocalStorage(sessionStorage));
export const Local = (window['Local'] ??= new LocalStorage(localStorage));
