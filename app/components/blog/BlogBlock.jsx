import Image from "next/image";
import CodeBlock from "./CodeBlock";

const BlogBlock = ({ block }) => {
  const { type, data } = block;
  if (type === "paragraph") {
    return (
      <p
        dangerouslySetInnerHTML={{ __html: data.text }}
        className="text-justify leading-relaxed dark:text-slate-100"
      ></p>
    );
  } else if (type === "image") {
    return <Image src={data.url} alt={data.caption} />;
  } else if (type === "header") {
    if (data.level == 1) {
      return (
        <h1
          dangerouslySetInnerHTML={{ __html: data.text }}
          className="text-3xl font-extrabold mt-4 dark:text-slate-100"
        ></h1>
      );
    } else if (data.level === 2) {
      return (
        <h2
          dangerouslySetInnerHTML={{ __html: data.text }}
          className="text-xl font-extrabold mt-4 dark:text-slate-100"
        ></h2>
      );
    } else if (data.level === 3) {
      return (
        <h3
          dangerouslySetInnerHTML={{ __html: data.text }}
          className="text-lg font-bold dark:text-slate-100"
        ></h3>
      );
    }
  } else if (type === "list") {
    return (
      <ul
        className={`${
          data.style === "unordered"
            ? "list-disc mx-4 dark:text-slate-100 pl-4"
            : "list-decimal mx-4 dark:text-slate-100 pl-4"
        }`}
      >
        {data.items.map((listItem, index) => {
          return (
            <li key={index} dangerouslySetInnerHTML={{ __html: listItem }} className="p-[5px]"></li>
          );
        })}
      </ul>
    );
  } 
  else if(type==="code"){
    return <CodeBlock codeString={data.code} />
  }
  else {
    console.log("Some Other Element")
  }
};

export default BlogBlock;
