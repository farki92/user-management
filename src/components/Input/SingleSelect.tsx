import {Button} from 'antd';

// declarations
import {OrderTypes} from 'declarations';

type TProps = {
  value: OrderTypes;
  onChange: (value: OrderTypes) => void;
  options: {label: string; value: OrderTypes}[];
};

const SingleSelect: React.FC<TProps> = ({options, onChange, value}) => (
  <>
    {options.map((option) => (
      <Button
        key={option.value}
        type={value === option.value ? 'primary' : 'default'}
        onClick={() => {
          onChange(option.value);
        }}
      >
        {option.label}
      </Button>
    ))}
  </>
);

export default SingleSelect;
