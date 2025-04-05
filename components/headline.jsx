import Image from "next/image";
import React from "react";

function HeadLine() {
  return (
    <div className="w-full xl:w-[70%]">
      <Image
        src={"/images/image-web-3-desktop.jpg"}
        alt="logo"
        width={1440}
        height={400}
        className="hidden min-[540px]:block"
      />
      <Image
        src={"/images/image-web-3-mobile.jpg"}
        alt="logo"
        width={375}
        height={400}
        className="min-[540px]:hidden"
      />
      <h1 className="inline-block pt-4 md:w-[50%] md:text-4xl md:align-top text-3xl font-bold">The Bright Future of Web 3.0?</h1>
      <div className="inline-block pt-4 md:w-[50%]">
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="mt-4 py-2 px-4 bg-soft-red text-very-dark-blue hover:text-off-white hover:bg-very-dark-blue ">Read More</button>
      </div>
    </div>
  );
}

export default HeadLine;
