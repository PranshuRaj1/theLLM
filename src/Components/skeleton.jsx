import React from "react";
import { Skeleton } from "primereact/skeleton";

export default function ShapesDemo() {
  return (
    <div className="card">
      <div className="flex flex-wrap">
        <div className="w-full md:w-6 p-3">
          <h5>Rounded</h5>
          <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
          <Skeleton
            width="10rem"
            className="mb-2"
            borderRadius="16px"
          ></Skeleton>
          <Skeleton
            width="5rem"
            borderRadius="16px"
            className="mb-2"
          ></Skeleton>
          <Skeleton
            height="2rem"
            className="mb-2"
            borderRadius="16px"
          ></Skeleton>
          <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
        </div>
      </div>
    </div>
  );
}
