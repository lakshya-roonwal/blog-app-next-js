import Hero from "./components/home/Hero";
import BlogsSection from "./components/home/BlogsSection";

export default async function Home() {
  console.log(process.env.NEXT_PUBLIC_HOST)
  const responce = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/blog/`, {
    cache: "no-store",
  });
  const data = await responce.json();
  console.log(data)
  return (
    <>
      <Hero />
      <BlogsSection blogsdata={data} />
    </>
  );
}
