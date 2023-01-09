import React from 'react';

function Button({ text }: { text: string }) {
  return (
    <button type="button" className="w-[45%] bg-deepGray text-center cursor-pointer">
      {text}
    </button>
  );
}

export default Button;
