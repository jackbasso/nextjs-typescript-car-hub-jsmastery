'use client'; 

import { Combobox, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import React from 'react'
59:34

const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>SearchManufacturer
      <Combobox>
        <div className='relative w-full'>

        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer