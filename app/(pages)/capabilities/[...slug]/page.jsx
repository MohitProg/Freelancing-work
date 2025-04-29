import React from "react";
import { dataArray } from "@/app/data";
import { notFound } from "next/navigation";
import Capabilities from "@/app/components/Capabilities/Capabilities";

const page = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);

  const isSlugValidate = (slugvalue) => {
    const value = dataArray[0].subData.some((val) =>
      val?.subCat?.some((value) => value?.linKpath === slugvalue)
    );

    console.log(value, slugvalue);

    return value;
  };

  if (slug.length === 1 && isSlugValidate(slug[0])) {
    // main page of Features
    return (
      <>
        <Capabilities slug={slug[0]} />
      </>
    );
  } else {
    notFound();
  }
};

export default page;
