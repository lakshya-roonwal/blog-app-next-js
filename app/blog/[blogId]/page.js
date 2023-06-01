"use client";
import React, { useState, useEffect } from "react";
import BlogArticle from "../../components/blog/BlogArticle";

const page = ({params,test}) => {
  const searchId=params.blogId;
  return (
    <>
      <BlogArticle searchId={searchId} />
    </>
  );
};

export default page;
