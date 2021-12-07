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
      {/* As PWA */}
      {/* <meta name="application-name" content={title} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name='theme-color' content='#030303' /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image ? image : "/iliya.jpg"} />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "Iliya Bolotov - Software Engineer",
  keywords:
    "development, programming, design, frontend, backend, computer science, management",
  description: "Software Engineer. Lover of web.",
};
