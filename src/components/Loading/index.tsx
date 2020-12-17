import React from 'react';

// Assets
import LoadingImage from 'src/images/loading.gif'

// Styles
import LoadingStyles from './styles';

type LoadingProps = {
  message: string
}

const Loading: React.FC<LoadingProps> = ({ message }: LoadingProps) => {
  return (
    <LoadingStyles>
      <img src={LoadingImage} alt={message} title={message} />
      <p>{message}</p>
    </LoadingStyles>
  )
}

export default Loading;