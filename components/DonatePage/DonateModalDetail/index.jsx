import {
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
} from '@chakra-ui/react';
import { useContext } from 'react';
import DonateBadgeStatus from '../DonateBadgeStatus';
import RupiahFormat from '../../BaseComponents/RupiahFormat';
import { DonateContext } from '../../../context/donate';
import DateTimeFormat from '../../BaseComponents/DateTimeFormat';
import { DonateCardActionButton } from '../DonateButton';
import { DATE_TIME_FULL_FORMAT } from '../../../utils/constant';

const isObjectEmpty = (obj) =>
  obj &&
  Object.keys(obj).length === 0 &&
  Object.getPrototypeOf(obj) === Object.prototype;

const TextRowTitle = ({ children }) => {
  return (
    <Text fontWeight={600} fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}>
      {children}
    </Text>
  );
};

const TextRow = ({ left, right }) => {
  return (
    <Flex justifyContent='space-between'>
      <Box fontSize={{ base: 'xs', sm: 'sm', md: 'md' }} fontWeight='light'>
        {left}
      </Box>
      <Box
        fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
        fontWeight='light'
        textAlign='end'
      >
        {right}
      </Box>
    </Flex>
  );
};

export default function DonateModalDetail({ ...props }) {
  const { donateDetail, setDonateDetail } = useContext(DonateContext);

  const handleModalClose = () => setDonateDetail({});

  const saleInfo = [
    {
      left: <Text>交易状态</Text>,
      right: <DonateBadgeStatus status={donateDetail.donation_status} />,
    },
    {
      left: <Text>用户名</Text>,
      right: <Text>{donateDetail.username}</Text>,
    },
    {
      left: <Text>交易单号</Text>,
      right: <Text>{donateDetail.order_id}</Text>,
    },
    {
      left: <Text>交易时间</Text>,
      right: (
        <DateTimeFormat
          date={donateDetail.created_at}
          toFormat={DATE_TIME_FULL_FORMAT}
        />
      ),
    },
    {
      left: <Text>定期付款时间</Text>,
      right: (
        <DateTimeFormat
          date={donateDetail.expired_at}
          toFormat={DATE_TIME_FULL_FORMAT}
        />
      ),
    },
  ];

  const paymentInfo = [
    {
      left: <Text>游戏内货币</Text>,
      right: <Text>{donateDetail.amount} CC</Text>,
    },
    {
      left: <Text>付款方式</Text>,
      right: <Text>{donateDetail.payment_code}</Text>,
    },
    {
      left: <Text>小计</Text>,
      right: (
        <RupiahFormat value={donateDetail.total - donateDetail.total_fee} />
      ),
    },
    {
      left: <Text>手续费</Text>,
      right: <RupiahFormat value={donateDetail.total_fee} />,
    },
    {
      left: <Text fontWeight='semibold'>总计</Text>,
      right: <RupiahFormat value={donateDetail.total} fontWeight='semibold' />,
    },
  ];

  return (
    <>
      <Modal
        size='xl'
        isOpen={!isObjectEmpty(donateDetail)}
        onClose={handleModalClose}
        isCentered
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent bg='#2D2D36' color='white'>
          <ModalHeader borderBottom='2px solid #E53E3E'>
            <Text fontWeight={500}>交易明细</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody py='4'>
            <Flex flexDirection='column' gridGap={4}>
              <TextRowTitle>购买信息</TextRowTitle>
              {saleInfo.map((item, index) => (
                <TextRow key={index} {...item} />
              ))}
              <TextRowTitle>支付信息</TextRowTitle>
              {paymentInfo.map((item, index) => (
                <TextRow key={index} {...item} />
              ))}
            </Flex>
            <Flex justifyContent='flex-end' mt='4'>
              <DonateCardActionButton {...donateDetail} />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
