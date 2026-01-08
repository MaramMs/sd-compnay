import React from "react";
import style  from "../../../Sass/home/buildProduct.module.scss";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BuildProduct = () => {
  return (
    <div className={style.buildProduct}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.text}>
            <h2>Ready to build your next product with SD?</h2>
            <p>
              Start your digital journey today and get a free consultation with
              our expert team
            </p>
          </div>
          <Button>
            Start Your Project
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuildProduct;
