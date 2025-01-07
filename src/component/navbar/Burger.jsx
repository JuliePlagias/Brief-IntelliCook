import React from 'react'

export default function Burger({ isOpen, setIsOpen }) {
  return (
    <div className='burgerIcon' onClick={() => setIsOpen(!isOpen)}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='512'
        height='512'
        viewBox='0 0 512 512'
      >
        <path
          fill='currentColor'
          d='M61.1 224C45 224 32 211 32 194.9c0-1.9.2-3.7.6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9.6 3.7.6 5.6c0 16.1-13 29.1-29.1 29.1z'
        />
        <circle fill='white' cx='144' cy='128' r='16' />
        <circle fill='white' cx='368' cy='128' r='16' />
        <circle fill='white' cx='256' cy='96' r='16' />
      </svg>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='512'
        height='512'
        viewBox='0 0 512 512'
      >
        <path
          fill='currentColor'
          d='M16 304c0-26.5 21.5-48 48-48h384c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48z'
        />
      </svg>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='512'
        height='512'
        viewBox='0 0 512 512'
      >
        <path
          fill='currentColor'
          d='M32 416c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64v-16z'
        />
      </svg>
    </div>
  )
}
