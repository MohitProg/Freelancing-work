import React from "react";

import Features from "@/app/components/Features/Features";
import { dataArray } from "@/app/data";
import { notFound } from "next/navigation";

const page = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);

  const isSlugValidate = (slugvalue) => {
    const value = dataArray[1].subData.some(
      (val) => val.linKpath === slugvalue
    );

    console.log(value, slugvalue);

    return value;
  };

  if (slug.length === 1 && isSlugValidate(slug[0])) {
    // main page of Features
    return (
      <>
        <Features slug={slug[0]} />
      </>
    );
  } else {
    notFound();
  }
};

export default page;
