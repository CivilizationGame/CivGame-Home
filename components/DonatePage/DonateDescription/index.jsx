import { Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { DonateContext } from '../../../context/donate';

const DonateDescription = ({ ...props }) => {
  const { username, modalUsernameShown } = useContext(DonateContext);

  return (
    <>
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
        fontWeight='bold'
        marginTop='4'
        marginBottom='8'
        lineHeight={{ base: '24px', sm: '32px', md: '48px' }}
      >
        (｡･∀･)ﾉﾞ嗨， {!modalUsernameShown && username}
      </Text>
      <Text fontSize={['md']} fontWeight='light'>
        非常感谢大大的斗内！你的帮助是我们前进的动力！
        因为我们都是学生团体，本身没有什么收入，所以我们需要大家的支持。
        如果没有各位的支持，我们可能也就不会继续下去了。
        <br />
        但是为了<s>守护大家的笑容、</s>制作更优秀的服务，我们会坚持的！ 😁
      </Text>
    </>
  );
};

export default DonateDescription;
