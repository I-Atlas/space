import Head from "next/head";

interface MetaProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export default function Meta({
  title,
  keywords,
  description,
  image,
}: MetaProps) {
  title = title.includes("Bolotov") ? title : title.concat(" | Iliya Bolotov");
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, maximum-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <title>{title}</title>
      <meta name="layoutmode" content="fitscreen/standard" />
      <meta name="imagemode" content="force" />
      <meta name="screen-orientation" content="portrait" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#030303" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="application-name" content={title} />
      <meta name="msapplication-starturl" content="/" />
      <meta name="msapplication-TileColor" content="#8E61FF" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://bolotov-iliya.space/" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Iliya Bolotov - Software Engineer",
  keywords:
    "development, programming, design, frontend, backend, computer science, management",
  description: "Software Engineer. Lover of web.",
};
