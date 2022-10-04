import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const HelpItem = ({ children }) => {
  return (
    <Box
      width={{ base: '100%', md: 'sm', lg: 'md' }}
      bg='rgba(255, 255, 255, 0.1)'
      borderRadius='14px'
      padding={1}
    >
      <Flex alignItems='center' gridGap='4' height='100%' padding='12px'>
        {children}
      </Flex>
    </Box>
  );
};

const HelpSection = () => {
  return (
    <Flex
      color='white'
      bgImage={{ base: 'url("/img/landing-page-bantuan.png")' }}
      backgroundSize={{ base: 'cover' }}
      backgroundRepeat='no-repeat'
      backgroundPosition='center'
      id='civ-help'
    >
      <Container maxW='container.lg'>
        <Box marginX='auto' paddingY={{ base: '40px', md: '80px' }}>
          <Flex
            justifyContent='space-between'
            flexDirection={{ base: 'column', md: 'row' }}
            flex={1}
          >
            <Box w={{ base: '100%', md: '40%' }}>
              <Text
                fontSize={['sm', 'md', 'md', 'lg']}
                fontWeight='light'
                textTransform='uppercase'
                letterSpacing='4.5px'
              >
                帮助
              </Text>
              <Text
                fontSize={['2xl', '2xl', '3xl', '4xl']}
                fontWeight='bold'
                marginTop='4'
                marginBottom='8'
                lineHeight={{ base: '24px', sm: '32px', md: '48px' }}
              >
                你有事吗？
              </Text>
              <Text
                fontSize={['md']}
                fontWeight='light'
                noOfLines={{ base: '7', sm: '4' }}
              >
                别担心，欢迎加入我们的聊天群来获得帮助！
                如果有问题或建议的话，请大胆地提出来！
              </Text>
            </Box>
            <Box w={{ base: '100%', md: '60%' }} mt={{ base: 5, md: 0 }}>
              <VStack spacing={6} align='stretch' alignItems='flex-end'>
                <HelpItem>
                  <Box flexShrink={0}>
                    <Image src='/img/ic-sound.svg' />
                  </Box>
                  <Text fontSize={['md']} fontWeight='light'>
                    <strong>
                      官方{' '}
                      <Link
                        href='https://jq.qq.com/?k=1jpOkEM0'
                        target='_blank'
                      >
                        <Text as='u'>聊天群</Text>
                      </Link>
                    </strong>
                    ，欢迎咨询！
                  </Text>
                </HelpItem>
                <HelpItem>
                  <Box flexShrink={0}>
                    <Image src='/img/ic-book.svg' />
                  </Box>
                  <Text fontSize={['md']} fontWeight='light'>
                    <strong>
                      参考{' '}
                      <Link href='/wiki'>
                        <Text as='u'>Wiki</Text>
                      </Link>
                    </strong>
                    ，基础知识不求人！
                  </Text>
                </HelpItem>
                <HelpItem>
                  <Box flexShrink={0}>
                    <Image src='/img/ic-file.svg' />
                  </Box>
                  <Text fontSize={['md']} fontWeight='light'>
                    <strong>
                      有{' '}
                      <Link href='#'>
                        <Text as='u'>建议</Text>
                      </Link>
                    </strong>
                    ？来向管理说句话！
                  </Text>
                </HelpItem>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Flex>
  );
};

export default HelpSection;
