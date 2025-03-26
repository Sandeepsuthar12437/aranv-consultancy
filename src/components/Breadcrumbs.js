import Link from "next/link";
import React from "react";

const Breadcrumbs = ({ breadcrumb }) => {
  return (
    <div className="text-white font-bold">
      {breadcrumb.map((item, index) => (
        <span key={index}>
          {item.link ? (
            <Link href={item.link} className="after:content-['/'] after:px-2">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
