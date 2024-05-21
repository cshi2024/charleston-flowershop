import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
/**
 * Props for `Hero1`.
 */
const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as="h1"
      size="xl"
      className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-2xl font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-md">
      {children}
    </p>
  ),
};


export type Hero1Props = SliceComponentProps<Content.Hero1Slice>;

/**
 * Component for "Hero1" Slices.
 */
const Hero1 = ({ slice }: Hero1Props): JSX.Element => {
  return (
    <>
    {slice.variation === "default" && (
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="grid grid-cols-1 place-items-center text-center">
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
          <PrismicRichText
            field={slice.primary.body}
            components={components}
          />
          <Button field={slice.primary.button_link} className="mb-8 md:mb-10">
            {slice.primary.button_text}
          </Button>
          <PrismicNextImage
            field={slice.primary.image}
            className="drop-shadow-xl max-w-4xl w-full"
          />
        </div>
      </Bounded>
    )}

    {slice.variation === "horizontal" && (
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div className="grid grid-rows-[1fr,auto,auto] h-fit">
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
            <PrismicRichText
              field={slice.primary.body}
              components={components}
            />
            <Button
              field={slice.primary.button_link}
              className="mb-8 md:mb-10"
            >
              {slice.primary.button_text}
            </Button>
          </div>
          <PrismicNextImage
            field={slice.primary.image}
            className="drop-shadow-xl max-w-4xl w-full"
          />
        </div>
      </Bounded>
    )}
  </>
  );
};

export default Hero1;
