import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black/20">
      <div className="absolute left-1/2 -top-14 transform -translate-x-1/2">
        <div className="w-25 h-25 rounded-full overflow-hidden border-2 border-white shadow-md">
          <Image
            src={author.photo.url}
            alt={author.name}
            fill
            unoptimized
            className="object-cover rounded-full"
          />
        </div>
      </div>

      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
