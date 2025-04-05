import React from "react";

function SideNews() {
  return (
    <div className="w-full xl:w-[30%] p-4 md:p-8 flex flex-col gap-y-4 bg-very-dark-blue">
      <h2 className="text-3xl text-soft-orange font-bold">New</h2>
      <h3 className="text-lg text-off-white hover:text-soft-orange hover:cursor-pointer">Hydrogen VS Electric Cars</h3>
      <p>Will hydrogen-fueled cars ever catch up to EVs?</p>

      <hr className="text-grayish-blue" />
      <h3 className="text-lg text-off-white hover:text-soft-orange hover:cursor-pointer">The Downsides of AI Artistry</h3>
      <p>
        What are the possible adverse effects of on-demand AI image generation?
      </p>
      <hr className="text-grayish-blue" />
      <h3 className="text-lg text-off-white hover:text-soft-orange hover:cursor-pointer">Is VC Funding Drying Up?</h3>
      <p>
        Private funding by VC firms is down 50% YOY. We take a look at what that
        means.
      </p>
    </div>
  );
}

export default SideNews;
