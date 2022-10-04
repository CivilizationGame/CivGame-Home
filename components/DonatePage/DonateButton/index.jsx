import copy from 'copy-to-clipboard';
import React from 'react';
import { CivGameButton, typesList } from '../../BaseComponents/CivGameButton';
import CivGameToast from '../../BaseComponents/CivGameToast';

const DonateAction = {
  PAID: ({ redeem_code, toast }) => (
    <DonateCopyCC redeem_code={redeem_code} toast={toast} />
  ),
  UNPAID: ({ checkout_url }) => <DonatePayNow checkout_url={checkout_url} />,
};

const DonatePayNow = ({ checkout_url }) => (
  <CivGameButton types={typesList.primaryFlat} href={checkout_url} as='a'>
    现在付款
  </CivGameButton>
);

const DonateCopyCC = ({ redeem_code, toast }) => (
  <CivGameButton
    types={typesList.primaryFlat}
    onClick={() => {
      copy(redeem_code);
      toast({
        duration: 1500,
        position: 'top-right',
        render: () => {
          return (
            <CivGameToast
              title='激活码已复制'
              subtitle={redeem_code}
            />
          );
        },
      });
    }}
  >
    复制激活码
  </CivGameButton>
);

const DonateCardActionButton = (props) => {
  if (!DonateAction[props.donation_status]) return <></>;
  return DonateAction[props.donation_status](props);
};

export { DonateCopyCC, DonatePayNow, DonateCardActionButton };
