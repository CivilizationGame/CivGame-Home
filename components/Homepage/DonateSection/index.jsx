import { Box, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CivGameButton, typesList } from '../../BaseComponents/CivGameButton';

const DonateSection = () => {
  return (
    <Flex
      color='white'
      bgImage={{
        base: 'url("/img/landing-page-donasi-small-darken.png")',
        md: 'url("/img/landing-page-donasi.png")',
      }}
      bgBlendMode='overlay'
      backgroundSize={{ base: 'cover' }}
      backgroundRepeat='no-repeat'
      backgroundPosition={{ base: 'bottom', md: 'bottom' }}
      id='civ-donate'
    >
      <Container maxW='container.lg'>
        <Box
          marginX='auto'
          paddingTop={{ base: '100px', md: '80px' }}
          paddingBottom={{ base: '40px', md: '80px' }}
        >
          {/* TODO: Add background image */}
          <Flex justifyContent='space-between' flex={1}>
            <Box w={{ base: '0%', md: '40%', lg: '45%' }} marginX='auto' />
            <Box w={{ base: '100%', md: '60%', lg: '55%' }} marginX='auto'>
              <Text
                fontSize={['sm', 'md', 'md', 'lg']}
                fontWeight='light'
                textTransform='uppercase'
                letterSpacing='4.5px'
              >
                斗内
              </Text>
              <Text
                fontSize={['2xl', '2xl', '3xl', '4xl']}
                fontWeight='light'
                lineHeight={{ base: '24px', sm: '32px', md: '48px' }}
                marginTop='4'
                marginBottom='8'
              >
                学生团体制作服务器开销好大
                <br />
                <strong>帮帮我们吧！</strong>
              </Text>
              <Text
                fontSize={['lg']}
                fontWeight='light'
                noOfLines={{ base: '5', sm: '3' }}
                marginBottom='14'
              >
                如果给我们斗内的话，（可能）会给你好康的东西的哦~
                比游戏还刺激！（这不就是游戏嘛喂）
              </Text>
              <Flex
                alignItems={{ base: 'left', md: 'center', lg: 'center' }}
                flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
                gridGap={{ base: '4' }}
              >
                <CivGameButton types={typesList.primary} as='a' href='/donate'>
                  斗内我们
                </CivGameButton>
                <CivGameButton
                  as='a'
                  href='https://space.bilibili.com/1803912517/'
                  target='_blank'
                  types={typesList.secondary}
                >
                  BILIBILI
                </CivGameButton>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Flex>
  );
};

export default DonateSection;
