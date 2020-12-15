import React from 'react';

import ToggleButtonStyle from './styles';

type ToggleButtonProps = {
  active: boolean;
  onClick: () => void
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onClick, active }: ToggleButtonProps) => {
  return (
    <ToggleButtonStyle onClick={onClick} active={active}>
      <span />
    </ToggleButtonStyle>
  )
}

export default ToggleButton;