"use client"

import Image from 'next/image'
import { useState } from 'react';

export const CurrencyButton = () => {

  const currencyList =
    [
      {
        id: 1,
        name: "RUB"
      },
      {
        id: 2,
        name: "USD"
      },
      {
        id: 3,
        name: "EURO"
      },
    ]

  const [currency, setCurrency] = useState(currencyList[1])

  return (
    <div className=' text-[#717171]'>
      <p className=' text-xl'>{currency.name}</p>
    </div>
  );
};