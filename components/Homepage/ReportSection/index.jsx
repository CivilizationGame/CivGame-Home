import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { CivGameButton, typesList } from '../../BaseComponents/CivGameButton';
import CivGameDropdown from '../../BaseComponents/CivGameDropdown';

const ServerOptions = [
  {
    value: 'Vanilla',
    label: '生存',
  },
  {
    value: 'SkyBlock',
    label: '空岛',
  },
];

const ReportTypeOptions = [
  {
    value: 'Cheat',
    label: '开挂',
  },
  {
    value: 'Grief',
    label: '偷窃',
  },
  {
    value: 'Bug',
    label: '漏洞',
  },
  {
    value: 'Other',
    label: '其他',
  },
];

const ReportSection = () => {
  return (
    <Flex
      color='white'
      bgImage={{
        base: 'url("/img/landing-page-laporan-small.png")',
        md: 'url("/img/landing-page-laporan.png")',
      }}
      backgroundSize={{ base: 'cover' }}
      backgroundRepeat='no-repeat'
      backgroundPosition={{ base: 'bottom', md: 'center' }}
      id='civ-report'
    >
      <Container maxW='container.lg'>
        <Box
          width={{ base: '100%', md: '50%' }}
          paddingY={{ base: '40px', md: '80px' }}
        >
          <Text
            fontSize={['sm', 'md', 'md', 'lg']}
            fontWeight='light'
            textTransform='uppercase'
            letterSpacing='4.5px'
          >
            举报
          </Text>
          <Text
            fontSize={['2xl', '2xl', '3xl', '4xl']}
            marginTop='4'
            marginBottom='8'
            lineHeight={{ base: '24px', sm: '32px', md: '48px' }}
          >
            开挂、偷家、网暴……{' '}
            <strong>举报！</strong>
          </Text>
          <FormControl>
            <FormLabel color='#ADADAD' fontWeight='light'>
              涉事类型
            </FormLabel>
            <CivGameDropdown id='report-type' options={ReportTypeOptions} />
          </FormControl>
          <FormControl marginTop='4'>
            <FormLabel color='#ADADAD' fontWeight='light'>
              涉事服务器
            </FormLabel>
            <CivGameDropdown id='report-server' options={ServerOptions} />
          </FormControl>
          <FormControl marginTop='4'>
            <FormLabel color='#ADADAD' fontWeight='light'>
              涉事用户名
            </FormLabel>
            <Input
              required
              id='report-username'
              placeholder='请输入涉事玩家的 Minecraft 用户名'
              backgroundColor='#24242980'
              _focus={{ outline: 'none' }}
            ></Input>
          </FormControl>
          <FormControl marginTop='4'>
            <FormLabel color='#ADADAD' fontWeight='light'>
              具体情况
            </FormLabel>
            <Textarea
              id='report-description'
              rows='5'
              placeholder='请尽量概述得全面、具体'
              backgroundColor='#24242980'
              resize='none'
              _focus={{ outline: 'none' }}
            />
          </FormControl>
          <CivGameButton
            mt='4'
            ml={{ base: 'auto', md: '4' }}
            width={{ base: '100%', md: 'fit-content' }}
            types={typesList.primary}
            disabled
          >
            举报
          </CivGameButton>
        </Box>
      </Container>
    </Flex>
  );
};

export default ReportSection;
