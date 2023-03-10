import React from "react";
import Container from "./container";
import Image from "next/image";

export default function Row(props) {
    const {data} = props;
    return (
        <>
          <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
            <div
              className={`flex items-center justify-center w-full lg:w-1/2 ${
                props.imgPos === "right" ? "lg:order-1" : ""
              }`}>
              <div>
                <Image
                  src={data.image}
                  width="350"
                  height="320"
                  alt="Benefits"
                  layout="intrinsic"
                  placeholder="blur"
                />
              </div>
            </div>
    
            <div
              className={`flex flex-wrap items-center w-full lg:w-1/2 ${
                props.imgPos === "right" ? "lg:justify-end" : ""
              }`}>
              <div>
                <div className="flex flex-col w-full mt-4">
                  <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                    {data.title}
                  </h3>
    
                  <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                    {data.desc}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </>
      );
}