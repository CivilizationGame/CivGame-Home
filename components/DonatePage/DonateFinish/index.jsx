import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
} from '@chakra-ui/react';
import { CivGameButton, typesList } from '../../BaseComponents/CivGameButton';

export default function DonateFinish({ isOpen, onClose, ...props }) {
  return (
    <Modal size='xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg='#2D2D36' color='white'>
        <ModalHeader>斗内</ModalHeader>
        <ModalBody pb={6}>
          <Text fontSize={['sm', 'md']} mb='4' fontWeight='light'>
            感谢大大的斗内。我们会对您的付款进行检查。
            检查完成后我们会自动将您的激活码发送到您的邮箱。
            感谢您的支持！
          </Text>
          <CivGameButton
            as='a'
            href='/'
            width='100%'
            types={typesList.primary}
            mt='4'
          >
            关闭
          </CivGameButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
