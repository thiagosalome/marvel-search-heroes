import React from 'react';

import FooterStyle from './styles';

const Footer: React.FC = () => {
  return (
    <FooterStyle>
      © {new Date().getFullYear()} Marvel Search Heroes
    </FooterStyle>
  )
}

export default Footer;