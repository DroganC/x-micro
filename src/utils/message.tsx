/*
 * @Author: Droganc
 * @Date: 2023-11-01 21:03:17
 * @LastEditTime: 2023-11-01 21:05:12
 * @LastEditors: Droganc
 * @Description:
 * @FilePath: /x-micro/src/utils/message.tsx
 */
import { App } from 'antd';
import { MessageInstance } from 'antd/es/message/interface';
import { ModalStaticFunctions } from 'antd/es/modal/confirm';
import { NotificationInstance } from 'antd/es/notification/interface';

let message: MessageInstance;
let notification: NotificationInstance;
let modal: Omit<ModalStaticFunctions, 'warn'>;

export const useAppMessage = () => {
  const staticFunction = App.useApp();
  modal = staticFunction.modal;
  notification = staticFunction.notification;
  message = staticFunction.message;

  return null;
};

export { message, notification, modal };
