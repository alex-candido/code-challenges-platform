'use client';

import { ClipLoader } from 'react-spinners';

export default function loading() {
  return (
    <div className='w-screen h-full flex justify-center items-center'>
      <ClipLoader color="#3498db" size={50} />
    </div>
  )
}
