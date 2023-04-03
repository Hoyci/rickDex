import { StyledSpinner } from './styles';
import { ISpinner } from './types';

export default function Spinner({ size = 32 }: ISpinner) {
  return <StyledSpinner size={size} />;
}
