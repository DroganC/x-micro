import { http } from '..';

export const getUserInfo = () => {
  return http.get({
    url: 'https://jsonplaceholder.typicode.com/users/1',
  });
};

export const getMenus = () => {
  return http.get({
    url: 'https://jsonplaceholder.typicode.com/posts',
  });
};
