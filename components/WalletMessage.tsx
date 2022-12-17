import React, { useState } from 'react'
import Alert from './Alert'

export default function WalletMessage(props: any) {
  const { message } = props

  return <>{!!message && <Alert title="MetaMask" message={message} />}</>
}
