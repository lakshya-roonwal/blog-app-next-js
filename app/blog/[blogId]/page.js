import BlogArticle from "../../components/blog/BlogArticle";

const page = async({params,test}) => {
  const searchId=params.blogId;
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
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const singleBlog=await getSingleBlog();
  console.log("This is Single Blog",singleBlog);

  return (
    <>
      <BlogArticle singleBlog={singleBlog} />
    </>
  );
};

export default page;
