import BlogArticle from "../../components/blog/BlogArticle";

const page = async({params,test}) => {
  const searchId=params.blogId;
  const getSingleBlog = async () => {
    try {
      const responce = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/blog/getsingleblog`,
        {
          cache: "no-store",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: searchId }),
        }
      );
      const data = await responce.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const singleBlog=getSingleBlog();

  return (
    <>
      <BlogArticle singleBlog={singleBlog} />
    </>
  );
};

export default page;
