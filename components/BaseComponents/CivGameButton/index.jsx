import { Button } from '@chakra-ui/react';
import React from 'react';

const typesList = {
  primaryFlat: 'primaryFlat',
  primary: 'primary',
  secondary: 'secondary',
  link: 'link',
};

const CivGameButton = ({ types, children, ...rest }) => {
  const typesMap = {
    [typesList.primary]: () => <Primary />,
    [typesList.secondary]: () => <Secondary />,
    [typesList.link]: () => <Link />,
    [typesList.primaryFlat]: () => <PrimaryFlat />,
  };

  const PrimaryFlat = () => (
    <Button
      {...rest}
      color='white'
      size='lg'
      backgroundColor='#F0375B'
      borderRadius='8px'
      width={{ base: '100%', md: 'fit-content' }}
      _focus={{ outline: 'none' }}
      _active={{ bg: '#F0375B', color: 'white' }}
      _hover={{
        color: '#F0375B',
        bg: 'white',
        _disabled: { bg: '#242429', color: '#606060' },
      }}
      _disabled={{
        backgroundColor: '#242429',
        color: '#606060',
      }}
    >
      {children}
    </Button>
  );

  const Primary = () => {
    return (
      <Button
        {...rest}
        color='white'
        size={['lg']}
        backgroundColor='#F0375B'
        boxShadow='0px 0px 0px 12px rgba(240, 55, 91, 0.25)'
        transition='all 0.3s ease-in-out'
        borderRadius='8px'
        _hover={{
          boxShadow: '0px 0px 0px 12px #F0375B',
          _disabled: {
            boxShadow: '0px 0px 0px 12px rgba(36, 36, 41, 0.5)',
          },
        }}
        _focus={{ outline: 'none' }}
        _active={{
          boxShadow: '0px 0px 0px 12px #F0375B',
        }}
        _disabled={{
          boxShadow: '0px 0px 0px 12px rgba(36, 36, 41, 0.5)',
          backgroundColor: '#242429',
          color: '#606060',
        }}
      >
        {children}
      </Button>
    );
  };

  const Secondary = () => {
    return (
      <Button
        {...rest}
        color='white'
        size={['lg']}
        backgroundColor='transparent'
        borderRadius='8px'
        border='2px solid #F0375B'
        _hover={{ bg: '#E7BAC2', borderColor: '#F0375B' }}
        _active={{ bg: '#F0375B' }}
        _focus={{ outline: 'none' }}
        width={{ base: '100%', md: 'fit-content' }}
      >
        {children}
      </Button>
    );
  };

  const Link = () => {
    return (
      <Button
        {...rest}
        colorScheme='white'
        variant='link'
        _focus={{ outline: 'none' }}
      >
        {children}
      </Button>
    );
  };

  return typesMap[types]();
};

export { CivGameButton, typesList };
