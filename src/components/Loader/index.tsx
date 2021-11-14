// components
import {Spin} from 'antd';

// styles
import './loader.scss';

const Loader: React.FC = () => (
  <div className="loader">
    <Spin size="large" spinning />
  </div>
);

export default Loader;
