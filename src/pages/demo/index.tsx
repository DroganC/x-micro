import { Button } from 'antd';
import { observer } from 'mobx-react-lite';

function Demo() {
  return (
    <div>
      <Button type="primary">xxxxx星期五xxxxxxx</Button>
    </div>
  );
}

export default observer(Demo);
