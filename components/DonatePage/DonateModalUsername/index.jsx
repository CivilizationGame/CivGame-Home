import {
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { CivGameButton, typesList } from '../../BaseComponents/CivGameButton';
import DonateAlert from '../DonateAlert';
import InnerChildHTML from '../../BaseComponents/InnerChildHTML';

import * as gtag from '../../../lib/gtag';
import Axios from 'axios';
import { DonateContext } from '../../../context/donate';

const stateMessages = {
  info: {
    color: 'blue.500',
    message:
      '在进行交易之前请检查你的账户',
  },
  success: {
    color: 'green.500',
    message: '已发现用户名',
  },
  warning: {
    color: 'yellow.500',
    message: '未发现用户名',
  },
  error: {
    color: 'red.500',
    message: '发生错误',
  },
};

const stateTypes = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error',
};

const DonateModalUsername = ({ parentTake, ...props }) => {
  const [alertMessage, setAlertMessage] = useState(stateMessages.info.message);
  const [alertType, setAlertType] = useState(stateTypes.info);
  const [loading, setLoading] = useState(false);
  const { username, setUsername, modalUsernameShown, setModalUsernameShown } =
    useContext(DonateContext);

  const handleOnChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleOnClickCheckUsername = (e = null) => {
    if (e) e.preventDefault();
    checkUsername(username);
  };

  const checkUsername = async (username) => {
    gtag.event({
      action: 'Donate Check Username',
      category: 'Donate',
      label: 'Donate Label',
    });

    if (!username) {
      setAlertType(stateTypes.warning);
      setAlertMessage('用户名不能为空');
      return;
    }

    setLoading(true);

    try {
      const result = await Axios({
        url: '/api/users',
        method: 'GET',
        params: {
          username: username,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (result.status == 203) {
        setAlertType(stateTypes.warning);
        setAlertMessage(
          <InnerChildHTML
            text={`用户名 <b>${username}</b> 未发现`}
          />
        );
      } else {
        setAlertType(stateTypes.warning);
        setAlertMessage(result.data.message);
        setModalUsernameShown(false);
        setUsername(username);
      }
    } catch (error) {
      setAlertType(stateTypes.error);
      setAlertMessage(error.response.data.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Modal
        size='xl'
        isOpen={modalUsernameShown}
        isCentered
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent bg='#2D2D36' color='white'>
          <Flex flex='1' padding='2'>
            <DonateAlert status={alertType}>{alertMessage}</DonateAlert>
          </Flex>
          <Divider
            borderColor={stateMessages[alertType].color}
            width='inherit'
            borderBottomWidth='2px'
          />
          <form onSubmit={handleOnClickCheckUsername}>
            <ModalBody pb={6} mt='4'>
              <FormControl>
                <FormLabel
                  fontSize={['sm', 'md']}
                  color='#ADADAD'
                  fontWeight='light'
                >
                  Minecraft 用户名
                </FormLabel>
                <Input
                  required
                  backgroundColor='#24242980'
                  placeholder='输入你在 文明游戏 游玩时使用的用户名'
                  _focus={{ outline: 'none' }}
                  onChange={handleOnChangeUsername}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter mb='2'>
              <CivGameButton
                width='100%'
                types={typesList.primary}
                onClick={handleOnClickCheckUsername}
                isLoading={loading}
              >
                检查用户名
              </CivGameButton>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DonateModalUsername;
