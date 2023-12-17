"use client";

import Loader from "./Loader";
import BlogBlock from "./BlogBlock";

const BlogArticle = ({ singleBlog }) => {
  const blog=JSON.parse(singleBlog.value);
  console.log(blog)

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white underline">
              {blog?.title?blog.title:null}
            </h1>
          </header>
          {/* {jsx.map((e,index) => {
            return <React.Fragment key={index}>{e}</React.Fragment>;
          })} */}
          {
          blog.content?
          blog.content.map((e,index) => {
              return <BlogBlock block={e}/>
            })
          :null
          }
        </article>
      </div>
    </main>
  );
};

export default BlogArticle;
