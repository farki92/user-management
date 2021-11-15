// components
import CountryDropdown from 'components/Input/CountryDropdown';
import Text from 'components/Input/Text';
import NumberInput from 'components/Input/Number';

// styles
import './inputs.scss';

const INPUT_COMPONENTS = {
  text: Text,
  number: NumberInput,
  countryDropdown: CountryDropdown
};

type TProps = {
  type: string;
  value: string;
  onChange: (date: string) => void;
  label?: string;
  hasError?: boolean;
  placeholder?: string;
};

const Input: React.FC<TProps> = ({type, ...rest}) => {
  const Component = INPUT_COMPONENTS[type];
  return (
    <div className="input">{Component ? <Component {...rest} /> : null}</div>
  );
};

export default Input;
