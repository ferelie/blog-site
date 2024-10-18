import { client, urlFor } from "@/app/lib/sanity";
import React from "react";
import Image from "next/image";
import { fullBlog } from "@/app/lib/interface";
import { PortableText } from "next-sanity";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
   *[_type == "blog" && slug.current == "${slug}"] {
"currentSlug": slug.current,
  title,
  content,
  titleImage,
}[0]`;
  const data = await client.fetch(query);
  return data;
}
export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);

  return (
    <article className="mx-auto">
      <h1 className="block leading-8 font-bold text-3xl sm:text-4xl tracking-wide my-5 text-center">
        {data.title}
      </h1>
      {data.titleImage && (
        <Image
          src={urlFor(data.titleImage).url()}
          className="rounded-lg border"
          priority
          alt={data.title}
          width={1200}
          height={630}
          layout="responsive"
        />
      )}
      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert">
        <PortableText value={data.content} />
      </div>
    </article>
  );
}
