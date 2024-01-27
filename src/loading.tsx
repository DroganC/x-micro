import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function Loading() {
  return (
    <div>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
    </div>
  );
}

export default Loading;
