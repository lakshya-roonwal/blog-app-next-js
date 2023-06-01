import Loader from "@/app/components/blog/Loader";
import React from "react";

const loading = () => {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
      <div className="flex justify-center px-4 mx-auto max-w-screen-xl ">
        <Loader/>
      </div>
    </main>
  );
};

export default loading;
