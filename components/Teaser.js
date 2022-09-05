import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h3 className="py-32 text-6xl text-[#1d243d] font-bold text-center">
        {blok.headline}
      </h3>
      <h6 className="text-center text-xl">Built with Next.js</h6>
    </div>
  );
};

export default Teaser;
