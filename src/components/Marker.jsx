import { FiPlus, FiX } from 'react-icons/fi';

export function Marker({ isNew, value, onClick, ...rest }) {
  return (
    <div
      isNew={isNew}
      className={`flex items-center rounded-lg px-4
      ${ isNew ? 'bg-transparent border border-dashed border-[#948F99] text-[#948F99]' : 'bg-[#262529] text-white' }`}
    >
      <input
        type='text'
        value={value}
        readOnly={!isNew}
        {...rest}
        className='bg-transparent w-full py-4 outline-none'
      />

      <button
        type='button'
        onClick={onClick}
        className='text-[#FF859B]'
      >

        {isNew ? <FiPlus /> : <FiX />}

      </button>
    </div>
  )

}