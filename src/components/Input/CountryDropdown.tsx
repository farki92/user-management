import {useEffect} from 'react';

// components
import {Select} from 'antd';

const {Option} = Select;

// constants
import COUNTRIES from 'constants/countries';

type TProps = {
  value: string;
  onChange: (value: string) => void;
  label: string;
  hasError: boolean;
};

const countryEntries = Object.entries(COUNTRIES);

const CountryDropdown: React.FC<TProps> = ({
  value,
  onChange,
  label,
  hasError
}) => {
  useEffect(() => {
    if (!value) {
      onChange(countryEntries[0][0].toUpperCase());
    }
  }, [value]);

  return (
    <>
      <p className="label">{label}</p>
      <Select
        className={hasError ? 'error' : ''}
        onChange={(value) => {
          onChange(
            countryEntries
              .reduce((acc, [key, value]) => ({...acc, [value]: key}), {})
              [value].toUpperCase()
          );
        }}
        value={COUNTRIES[value.toLowerCase()]}
      >
        {countryEntries.map(([key, value]) => (
          <Option key={key} value={value}>
            {value}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default CountryDropdown;
