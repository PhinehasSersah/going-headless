import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Feature = ({ blok }) => {
  return (
    <div className="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center flex flex-col" {...storyblokEditable(blok)}>
      <h1 className="text-3xl text-[#1d243d] font-bold my-6"> {blok.name}</h1>
      <div className="w-96">
        <Image
          src={blok.image.filename}
          alt={blok.image._uid}
          width={400}
          height={500}
        />
      </div>
    </div>
  );
};

export default Feature;
