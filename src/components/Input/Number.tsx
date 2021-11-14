// components
import {InputNumber} from 'antd';

type TProps = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  hasError: boolean;
};

const NumberInput: React.FC<TProps> = ({value, onChange, label, hasError}) => (
  <>
    <p className="label">{label}</p>
    <InputNumber
      className={hasError ? 'error' : ''}
      value={value}
      onChange={(e) => onChange(e)}
    />
  </>
);

export default NumberInput;
