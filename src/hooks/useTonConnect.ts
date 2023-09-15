import { useTonConnectUI, useTonAddress } from '@tonconnect/ui-react';
import { Sender, SenderArguments } from 'ton-core';

export function useTonConnect(): { sender: Sender; connected: boolean; addr: String} {
  const [tonConnectUI] = useTonConnectUI();
  const wallet_address = useTonAddress();

  return {
    sender: {
      send: async (args: SenderArguments) => {
        tonConnectUI.sendTransaction({
          messages: [
            {
              address: args.to.toString(),
              amount: args.value.toString(),
              payload: args.body?.toBoc().toString('base64'),
            },
          ],
          validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
        });
      },
    },
    connected: tonConnectUI.connected,
    addr: wallet_address
  };
}