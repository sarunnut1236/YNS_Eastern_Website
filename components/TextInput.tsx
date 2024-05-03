import React from 'react'

type Props = {
    className?: string;
    inputClassName?: string;
    question: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({className, inputClassName, question, placeholder, onChange}: Props) {
  return (
      <div className={`flex flex-row items-center gap-4 ${className}`}>
          <p className='text-nowrap'>{question}</p>
          <input
              type="text"
              placeholder={placeholder}
              className={`bg-slate-50 ring-0 focus:outline-orange-500 border border-orange-500 rounded-xl px-4 py-2 ${inputClassName}`}
              onChange={onChange}
              required
          />
      </div>
  );
}

export default TextInput