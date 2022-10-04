import { Box, Container, Flex, Text, useToast } from '@chakra-ui/react';
import copy from 'copy-to-clipboard';
import React from 'react';
import { CivGameButton, typesList } from '../../BaseComponents/CivGameButton';
import CivGameToast from '../../BaseComponents/CivGameToast';

const BannerSection = () => {
  const toast = useToast();
  return (
    <>
      <Flex
        color='white'
        bgImage={{
          base: 'url("/img/landing-page-banner-small.png"), linear-gradient(rgba(21,21,31,0.2),rgba(21,21,31,0))',
          md: 'url("/img/landing-page-banner.png"), linear-gradient(rgba(21,21,31,0.2),rgba(21,21,31,0))',
        }}
        bgBlendMode='overlay'
        backgroundSize={{ base: 'cover' }}
        backgroundRepeat='no-repeat'
        backgroundPosition={{ base: 'center', md: 'center' }}
        id='civ-home'
      >
        <Container maxW='container.lg'>
          <Box
            paddingTop={{ base: '100px', md: '160px' }}
            paddingBottom={{ base: '40px', md: '80px' }}
            width={{ base: '100%', md: '55%' }}
          >
            <Text
              fontSize={{ base: '44px', md: '6xl' }}
              fontWeight='light'
              lineHeight={{ base: '56px', sm: '64px' }}
            >
              想开始你的冒险吗？
              <br />
              <strong>在 文明游戏 中获得更多乐趣</strong>
            </Text>
            <Box
              fontSize='lg'
              fontWeight='light'
              marginBottom='12'
              marginTop='6'
            >
              无论你有怎样的游玩模式和目的{' '}
              <Text display={{ base: 'inline', lg: 'inline-block' }}>
                文明游戏都会给你一个精彩绝伦的游戏体验
              </Text>
            </Box>
            <CivGameButton
              types={typesList.primary}
              width={{ base: '100%', md: 'fit-content' }}
              onClick={() => {
                copy('719375858');
                toast({
                  duration: 1500,
                  position: 'top-right',
                  render: () => {
                    return (
                      <CivGameToast
                        title='QQ群号已复制'
                        subtitle='719375858'
                      />
                    );
                  },
                });
              }}
            >
              黑喂狗！
            </CivGameButton>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default BannerSection;
