import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import styles from '../styles/Grid.module.css' 

const Grid = ({ blok }) => {
  return (
    <div className={styles.main} {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;