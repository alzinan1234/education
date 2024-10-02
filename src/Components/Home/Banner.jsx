import Image from "next/image";
import Link from "next/link";
import React from "react";

import banner1 from "@/assets/img/banner/banner.jpg";

export const Banner = () => {
  return (
    <div>
      <main>
        <section className="banner__area pb-110">
          <Image width={1500} hight={1000} src={banner1} alt="" />
        </section>
      </main>
    </div>
  );
};
