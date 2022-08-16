import React from "react";
import NextHead from "next/head";

interface MetaProps {
  description?: string;
  image?: string;
  slug?: string;
}

interface HeadProps {
  title?: string;
  meta?: MetaProps;
  document?: boolean;
  defaultColor?: string;
}

const defaultValues = {
  description: "",
  image: "",
  slug: "",
  title: "",
  keywords: "",
};

export const Head: React.FC<HeadProps> = ({
  title,
  meta,
  document,
  defaultColor,
}) => {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/ico" href="/favicons/favicon.ico" />
      {!document && (
        <title>
          MIND | {title && `${title} - `}
          Mindpool
        </title>
      )}
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicons/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/favicons/android-chrome-512x512.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/manifest.json" />

      {meta && (
        <>
          <meta name="msapplication-TileColor" content={defaultColor} />
          <meta name="theme-color" content={defaultColor} />
          <meta
            name="description"
            content={
              meta?.description ? meta?.description : defaultValues.description
            }
          />
          <meta name="keywords" content={defaultValues.keywords} />
          <meta
            name="viewport"
            content="width=device-width,
                initial-scale=1,
                user-scalable=0,
                minimum-scale=1.0,
                maximum-scale=1.0
                shrink-to-fit=no,
                user-scalable=no"
          />

          <meta property="og:url" content="site url" />
          <meta property="og:site_name" content="site name" />
          <meta property="og:type" content="site.type" />
          <meta property="og:title" content={title || defaultValues.title} />
          <meta
            property="og:description"
            content={
              meta?.description ? meta?.description : defaultValues.description
            }
          />
          <meta
            property="og:image"
            content={meta?.image ? meta?.image : defaultValues.image}
          />
        </>
      )}
    </NextHead>
  );
};
