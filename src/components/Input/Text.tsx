// components
import {Input} from 'antd';

type TProps = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  hasError: boolean;
};

const Text: React.FC<TProps> = ({value, onChange, label, hasError}) => (
  <>
    <p className="label">{label}</p>
    <Input
      className={hasError ? 'error' : ''}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </>
);

export default Text;
