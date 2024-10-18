import { Button } from "@/components/ui/button";
import { client, urlFor } from "./lib/sanity";
import { simpleBlogCard } from "./lib/interface";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type =='blog'] | order(_createdAt desc){
  title,
    description,
    "currentSlug": slug.current,
    titleImage,
}`;
  const data = await client.fetch(query)
  console.log(data)
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
      {data.map((blog, idx) => (
        <Card key={idx}>
          <Image
            className="rounded-t-lg h=[200px] object-cover"
            src={urlFor(blog.titleImage).url()}
            alt="title image"
            width={500}
            height={500}
          />
          <CardContent>
            <CardTitle>
              <div className="font-bold text-2xl line-clamp-2 mt-3">{blog.title}</div>
              <p className="text-sm line-clamp-2 mt-2 text-gray-600 dark:text-gray-300">
                {" "}
                {blog.description}
              </p>
              <Button asChild className="mt-7 w-full">
                <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
              </Button>
            </CardTitle>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
