import React from 'react';
import {
  Flex,
  Container,
  Box,
  SimpleGrid,
  Image,
  Text,
  Stack,
  Link,
  Button,
  useToast,
} from '@chakra-ui/react';
import copy from 'copy-to-clipboard';

import { CivGameButton, typesList } from '../CivGameButton';
import CivGameToast from '../CivGameToast';

const Footer = () => {
  const toast = useToast();
  return (
    <>
      <Flex color='white' bg='#822440'>
        <Container maxW='container.lg'>
          <Box marginX='auto' paddingY={{ base: '40px', md: '80px' }}>
            <SimpleGrid
              templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
              spacing={8}
            >
              <Flex
                alignItems='flex-start'
                justifyContent='space-between'
                flexDirection='column'
              >
                <Box>
                  <Flex alignItems='center'>
                    <Image
                      src='/img/logo.svg'
                      width='56px'
                      height='56px'
                      marginLeft='-2'
                      marginRight='2'
                    />
                    <Box>
                      <Text
                        fontSize={['lg']}
                        fontWeight='light'
                        as='a'
                        href='/'
                      >
                        我的世界 <strong>文明游戏</strong>
                      </Text>
                    </Box>
                  </Flex>
                  <Text fontSize='sm' fontWeight='light' marginY='4'>
                  文明游戏 是一个很棒的我的世界服务器。
                  从社会模拟出发，致力为玩家提供一个有趣的游戏体验。
                  </Text>
                </Box>
                <CivGameButton
                  types={typesList.link}
                  onClick={(e) => {
                    e.preventDefault();
                    copy('mc.chroma-gaming.xyz');
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
                  加入我们 &#129122;
                </CivGameButton>
              </Flex>
              <Stack align={'flex-start'}>
                <Text fontWeight='bold' fontSize={'lg'} marginBottom='4'>
                  导航
                </Text>
                <Link href={'/#civ-gamemode'} fontSize='sm' fontWeight='light'>
                  游戏模式
                </Link>
                <Link href={'/#civ-donate'} fontSize='sm' fontWeight='light'>
                  斗内
                </Link>
                <Link href={'/#civ-help'} fontSize='sm' fontWeight='light'>
                  帮助
                </Link>
                <Link href={'/#civ-report'} fontSize='sm' fontWeight='light'>
                  举报
                </Link>
              </Stack>
              <Flex
                alignItems='flex-start'
                justifyContent='space-between'
                flexDirection='column'
              >
                <Stack align={'flex-start'} marginBottom='4'>
                  <Text fontWeight='bold' fontSize={'lg'} marginBottom='4'>
                    独乐乐不如众乐乐
                  </Text>
                  <Text fontSize='sm' fontWeight='light'>
                    想找新朋友一起玩？想和管理切磋询问？
                    万物皆有可能，欢迎加入我们的聊天群！
                  </Text>
                </Stack>
                <CivGameButton
                  types={typesList.secondary}
                  as='a'
                  href='https://discord.chroma-gaming.xyz'
                  target='_blank'
                >
                  加入聊天群
                </CivGameButton>
              </Flex>
            </SimpleGrid>
          </Box>
        </Container>
      </Flex>
      {/* 用爱发电 */}
      <Flex color='white' bg='#561226'>
        <Container maxW='container.lg'>
          <Box paddingY='20px'>
            <Text fontSize={['sm', 'sm']} align='center' fontWeight='light'>
              Made with ❤️ by Civilization Game
              <br />
              Built by YaoSiQian
            </Text>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default Footer;
