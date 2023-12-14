"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const BlogsSection = ({ blogsdata }) => {
  const blogs=blogsdata;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white lg:w-1/3 lg:mb-0">
            My Journey
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500 sm:text-xl dark:text-gray-400">
            Discover the coding projects and challenges I&apos;m working on as I
            explore different programming languages and technologies.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {blogs.map((blog,index) => {
            return (
              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={index}>
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  {blog.blogType === "Tutorial" ? (
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg
                        className="mr-1 w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                      </svg>
                      Tutorial
                    </span>
                  ) : (
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                      <svg
                        className="mr-1 w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                      </svg>
                      Article
                    </span>
                  )}
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <Link href={{ pathname: `/blog/${blog._id} `,}}>{blog.title}</Link>
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                  {blog.description}
                </p>
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="text-sm">{`${new Date(
                    blog.date
                  ).getDate()}-${new Date(blog.date).getMonth() + 1}-${new Date(
                    blog.date
                  ).getFullYear()}`}</span>
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href={{
                      pathname: `/blog/${blog._id} `,
                    }}
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
