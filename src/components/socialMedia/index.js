import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./socialMedia.module.scss";
import { socialMediaResources } from "./socialMediaResources";

const SocialMediaComponent = () => {
  return (
    <div className={`${styles.container} box x`}>
      {socialMediaResources.map((socialMediaItem) => {
        return (
          <div key={socialMediaItem.name} className={styles.item}>
            <a target="_blank" href={socialMediaItem.linkTo} rel="noreferrer">
              <img alt={socialMediaItem.name} src={socialMediaItem.iconPath} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMediaComponent;
