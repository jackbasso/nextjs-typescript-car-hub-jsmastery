{ 'use client'}

import { useState } from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import CustomButton from './CustomButton';

interface CarCardProps {
  car: CarProps
}

const CarCard = ({ car }: CarCardProps ) => {
  const { city_mpg, year, make, model, transmission, drive } = car // deconstruct instead of car.year just use year
  
  return (
    <div className='car-card group'>
      <div className='car-car__content'>
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p>
        <span>
          Car rent...
        </span>
      </p>
    </div>
  )
}

export default CarCard