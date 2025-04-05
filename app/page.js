import HeadLine from "@/components/headline";
import Navbar from "@/components/navbar";
import NewsTile from "@/components/news-tile";
import SideNews from "@/components/sideNews";

import data from "../data.json";

export default function Home() {
  return (
    <div className="h-fit max-w-7xl mx-auto p-4 md:py-12 md:px-24">
      <Navbar />
      <div className="flex flex-col xl:flex-row gap-4">
        <HeadLine />
        <SideNews />
      </div>
      <div className="flex flex-col gap-4 mt-8 xl:flex-row">
        {data.map((item) => (
          <NewsTile key={item.order} {...item} />
        ))}
      </div>
    </div>
  );
}
