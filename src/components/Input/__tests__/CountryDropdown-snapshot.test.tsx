import renderer from 'react-test-renderer';

// components
import CountryDropdown from 'components/Input/CountryDropdown';

// constants
import COUNTRIES from 'constants/countries';

const countryEntries = Object.entries(COUNTRIES);

describe('CountryDropdown component - snapshots', () => {
  const value = countryEntries[0][0].toUpperCase();

  it('mathches snapshot when hasError is false', () => {
    expect(
      renderer
        .create(<CountryDropdown value={value} onChange={jest.fn()} />)
        .toJSON()
    ).toMatchSnapshot();
  });

  it('mathches snapshot when hasError is true', () => {
    expect(
      renderer
        .create(<CountryDropdown value={value} hasError onChange={jest.fn()} />)
        .toJSON()
    ).toMatchSnapshot();
  });
});
