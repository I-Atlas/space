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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image ? image : "/logo512.png"} />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: "Iliya Bolotov - Software Engineer",
  keywords:
    "web development, programming, design, frontend, backend, computer science",
  description: "Software Engineer. Lover of web.",
};
