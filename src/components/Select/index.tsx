import React from 'react';
import { Select as StyledSelect } from './styles';

import capitalize from '../../utils/capitalize';

interface ISelect {
  defaultOption: string;
  options: string[];
  value: string;
  dispatcher: (value: string) => void;
}

export default function Select({
  defaultOption,
  options,
  value,
  dispatcher,
}: ISelect) {
  return (
    <StyledSelect
      value={value}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        dispatcher(event.target.value)
      }
    >
      <option value="">{capitalize(defaultOption)}</option>
      {options.map((optionValue) => (
        <option key={optionValue} value={optionValue}>
          {capitalize(optionValue)}
        </option>
      ))}
    </StyledSelect>
  );
}
