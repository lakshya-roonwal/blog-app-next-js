import BlogArticle from "../../components/blog/BlogArticle";
import axios from 'axios';

const page = async({params,test}) => {
  const searchId = params.blogId;

  const getSingleBlog = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_HOST}/api/blog/getsingleblog`,
        { id: searchId },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
  const singleBlog = await getSingleBlog();
  console.log('This is Single Blog', singleBlog)

  return (
    <>
      <BlogArticle singleBlog={singleBlog} />
    </>
  );
};

export default page;
