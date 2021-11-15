import {Button} from 'antd';

// declarations
import {FilterTypes} from 'declarations';

type TProps = {
  value: FilterTypes;
  onChange: (value: FilterTypes) => void;
  options: {label: string; value: FilterTypes}[];
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
