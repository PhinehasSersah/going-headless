import { storyblokEditable } from "@storyblok/react";

const Article = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="w-3/5 mx-auto">
     <h3 className="text-3xl leading-relaxed font-bold my-12 font-serif tracking-wide" >
        { blok.Title }
      </h3>
      <p className="text-xl font-sans leading-loose tracking-wide">
    {blok.Body}
      </p>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Article;
