import Image from "next/image";
import React from "react";

function NewsTile({order, title, description, img}) {
  return (
    <div className="flex gap-4">
      <Image
        src={img}
        alt="logo"
        width={100}
        height={120}
      />
      <div>
        <h2 className="text-3xl font-bold text-soft-red">{order}</h2>
        <h3 className="text-xl text-very-dark-blue font-bold">
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default NewsTile;
