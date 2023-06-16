import { IconName } from "@fortawesome/fontawesome-svg-core";
import Layout from "../../components/elements/layout/layout";
import ContentSectionStackedImage from "../../components/modules/contentSection/contentSectionStackedImage";
import ContentSectionTwoColumn from "../../components/modules/contentSection/contentSectionTwoColumn";
import { Orientation, ThemeColors } from "../../types";
import { useEffect, useState } from "react";
import { getSection } from "../../lib/prepr";

function SectionPreview() {
  const [section, setSection] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSection("bf23c230-9350-470f-ab36-2e9e7bfef437").then((data) => {
      setSection(data);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return <p>{"section:" + JSON.stringify(section)}</p>;
  return (
    <Layout>
      {section.show_background_stack && (
        <ContentSectionStackedImage
          title={section.title}
          description={section.subtitle}
          color={section.theme as ThemeColors}
          imageSrc={section.image[0].url}
          icon={section.icon as IconName}
          buttons={section.buttons}
        >
          <div
            className="lead"
            dangerouslySetInnerHTML={{
              __html: section.description,
            }}
          ></div>
        </ContentSectionStackedImage>
      )}
      {!section.show_background_stack && (
        <ContentSectionTwoColumn
          title={section.title}
          description={section.subtitle}
          color={section.theme as ThemeColors}
          imageSrc={section.image[0].url}
          icon={section.icon as IconName}
          orientation={Orientation.Left}
          focusContent={section.focus_on_content}
          disableShadow={!section.show_image_shadow}
          buttons={section.buttons}
        >
          <div
            className="lead"
            dangerouslySetInnerHTML={{
              __html: section.description,
            }}
          ></div>
        </ContentSectionTwoColumn>
      )}
    </Layout>
  );
}

export default SectionPreview;
