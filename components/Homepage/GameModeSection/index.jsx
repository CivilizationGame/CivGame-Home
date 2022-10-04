import {
  Box,
  Container,
  keyframes,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const fadeIn = keyframes`
  0% { opacity:0; }
  100% { opacity:1; }
`;

const GameCardMapValue = [
  {
    image: '/img/landing-page-skyblock.png',
    title: '空岛生存',
    subtitle: 'RPG',
    description:
      '不只是《一千零一个刷石夜》！在不同的岛屿里逐步升级，构建自己的家！',
  },
  {
    image: '/img/landing-page-survival.png',
    title: '起源生存',
    subtitle: '原版',
    description:
      '不再是高版本纯原版生存！与小伙伴们一起完成NPC任务，购买物资，建立领地！',
  },
  {
    image: '/img/landing-page-minigame.png',
    title: '小游戏',
    subtitle: '基于独特插件',
    description:
      '不仅是烂掉牙的床战！原创游戏模式填补你的寂寞！',
  },
];

const GameCardItem = (props) => {
  return (
    <>
      <Box>
        <Box flexShrink={0}>
          <Image
            src={props.image}
            width='100%'
            css={{ filter: 'saturate(0%)' }}
            _hover={{ filter: 'saturate(100%)' }}
          />
        </Box>
        <Text
          fontSize={['md']}
          fontWeight='light'
          marginTop='8'
          marginBottom='4'
        >
          <strong>{props.title}</strong> | {props.subtitle}
        </Text>
        <Text
          fontSize={['md']}
          fontWeight='light'
          noOfLines={{ base: '5', sm: '4' }}
        >
          {props.description}
        </Text>
      </Box>
    </>
  );
};

const GameModeSection = () => {
  const [serverRank, setServerRank] = useState(0);
  const [vote, setVote] = useState(0);
  const [playerOnline, setPlayerOnline] = useState(0);
  const [maxPlayer, setMaxPlayer] = useState(0);
  const [changeContent, setChangeContent] = useState(false);

  const fetchData = async () => {
    const result = await Axios({
      url: '/api/server',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setServerRank(result.data.rank ?? 0);
    setVote(result.data.votes ?? 0);
    setPlayerOnline(result.data.players ?? 0);
    setMaxPlayer(result.data.maxplayers ?? 0);
  };

  useEffect(() => {
    fetchData();

    setInterval(() => {
      fetchData();
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setChangeContent(!changeContent);
    }, 3000);
  }, [changeContent]);

  return (
    <Flex color='white' bg='#15151F' id='civ-gamemode'>
      <Container maxW='container.lg'>
        <Box marginX='auto' paddingY={{ base: '40px', md: '80px' }}>
          <Text
            fontSize={['sm', 'md', 'md', 'lg']}
            fontWeight='light'
            textTransform='uppercase'
            letterSpacing='4.5px'
          >
            游戏模式
          </Text>
          <Flex
            marginTop='4'
            alignItems='center'
            flexWrap='wrap'
            justifyContent='space-between'
          >
            <Box>
              <Text
                fontSize={['2xl', '2xl', '3xl', '4xl']}
                fontWeight='light'
                lineHeight={{ base: '24px', sm: '32px', md: '48px' }}
              >
                <strong>那些<s>乱七八糟</s>各种各样的游戏们</strong>
                <br />
                看看这个吧家人们
              </Text>
            </Box>
            <Box
              w={{ base: '100%', md: 'fit-content' }}
              mt={{ base: 6, md: 0 }}
            >
              <Flex
                justifyContent={{ base: 'flex-end', md: 'flex-start' }}
                animation={`${fadeIn} 3s infinite`}
                flexDirection={{ base: 'row-reverse', sm: 'row' }}
              >
                <Box>
                  <Text
                    fontSize={['sm', 'md']}
                    fontWeight='semibold'
                    textAlign={{ base: 'left', md: 'right' }}
                  >
                    {changeContent
                      ? `服务器评分 ${serverRank}`
                      : `${playerOnline} 玩家在线`}
                  </Text>
                  <Text
                    fontSize={['sm']}
                    fontWeight='light'
                    textAlign={{ base: 'left', md: 'right' }}
                  >
                    {changeContent
                      ? `${vote} 投票数`
                      : `最大支持 ${maxPlayer} 玩家`}
                  </Text>
                </Box>
                <Box flexShrink={0}>
                  <Image
                    src={
                      changeContent
                        ? '/img/ic-arrow-up.svg'
                        : 'img/ic-peoples.svg'
                    }
                    ml={{ base: '0', md: '4' }}
                    mr={{ base: '4', md: '0' }}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
          <SimpleGrid marginTop='14' columns={{ base: 1, md: 3 }} spacing='7'>
            {GameCardMapValue.map((item, index) => (
              <GameCardItem key={index} {...item} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Flex>
  );
};

export default GameModeSection;
