import {render, fireEvent} from 'utils/testingLibrary';

// components
import Text from 'components/Input/Text';

describe('Text component', () => {
  it('changes value on onChange event', () => {
    const newValue = 'test2';
    const onChange = jest.fn();
    const {getByCssSelector} = render(
      <Text value="test" onChange={onChange} />
    );

    const input = getByCssSelector('.ant-input');
    expect(input).toHaveValue('test');

    fireEvent.change(input, {target: {value: newValue}});
    expect(onChange).toHaveBeenCalledWith(newValue);
  });
});
