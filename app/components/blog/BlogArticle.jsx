"use client";
import React, { useState, useEffect } from "react";
import CodeBlock from "./CodeBlock";
import Loader from "./Loader";

const BlogArticle = ({ searchId }) => {
  const [blog, setBlog] = useState({});

  const getSingleBlog = async () => {
    try {
      const responce = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/blog/getsingleblog`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: searchId }),
        }
      );
      const data = await responce.json();
      // console.log(data);
      setBlog(data);
    } catch (error) {
      console.log(error);
    }
  
  
  
  };

  // For fetching the data from server
  useEffect(() => {
    getSingleBlog();
  }, []);

  // Converting the json to jsx - this will run when the blog gets all the data
  useEffect(() => {
    convertToJsx();
  }, [blog]);

  // Function for converting json to jsx
  const [jsx, setJsx] = useState([]);
  const convertToJsx = () => {
    if (blog.content) {
      blog.content.map((e,index) => {
        switch (e.type) {
          case "paragraph":
            setJsx((jsx) => {
              return [
                ...jsx,
                React.createElement("p", {
                  dangerouslySetInnerHTML: { __html: e.data.text },
                  className: "text-justify leading-relaxed dark:text-slate-100",
                  key:index
                }),
              ];
            });
            break;

          case "image":
            setJsx((jsx) => {
              return [
                ...jsx,
                React.createElement("img", {
                  src: e.data.url,
                  alt: e.data.caption,
                  key:index
                }),
              ];
            });
            break;
          case "list":
            setJsx((jsx) => {
              return [
                ...jsx,
                React.createElement(
                  "ul",
                  {
                    className:
                      e.data.style === "unordered"
                        ? "list-disc mx-4 dark:text-slate-100"
                        : "list-decimal mx-4 dark:text-slate-100",
                  },
                  e.data.items.map((listItem,index) => {
                    return (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: listItem }}
                      ></li>
                    );
                  })
                ),
              ];
            });
            break;

          case "header":
            switch (e.data.level) {
              case 1:
                setJsx((jsx) => {
                  return [
                    ...jsx,
                    React.createElement("h1", {
                      dangerouslySetInnerHTML: { __html: e.data.text },
                      className: "text-3xl font-extrabold mt-4 dark:text-slate-100",
                      key:index
                    }),
                  ];
                });
                break;
              case 2:
                setJsx((jsx) => {
                  return [
                    ...jsx,
                    React.createElement("h2", {
                      dangerouslySetInnerHTML: { __html: e.data.text },
                      className: "text-xl font-extrabold mt-4 dark:text-slate-100",
                      key:index
                    }),
                  ];
                });
                break;
              case 3:
                setJsx((jsx) => {
                  return [
                    ...jsx,
                    React.createElement("h3", {
                      dangerouslySetInnerHTML: { __html: e.data.text },
                      className: "text-lg font-bold dark:text-slate-100",
                      key:index
                    }),
                  ];
                });
                break;
            }
            break;
          case "code":
            setJsx((jsx) => {
              return [
                ...jsx,
                <CodeBlock key={index} codeString={e.data.code} />,
              ];
            });
            break;
          default:
            console.log("hello world");
            break;
        }
      });
    }
  };

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white underline">
              {blog.title}
            </h1>
          </header>
          {jsx.map((e,index) => {
            return <React.Fragment key={index}>{e}</React.Fragment>;
          })}
        </article>
      </div>
    </main>
  );
};

export default BlogArticle;
