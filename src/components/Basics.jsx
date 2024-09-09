import React, { useCallback, useMemo } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import Child from "./child/Child";
import { useCount } from "./hooks/useCount";
import { Image } from "cloudinary-react";
import { images } from "../../data/basics.json";
import Paginate2 from "./paginate2/Paginate2";
import { prodcutData } from "./paginate2/productData";
const Basics = () => {
  let num = 12;
  let name = "Chile";

  let { c, increaseC, isPending } = useCount(3);
  console.count("Parent rendered: ");

  let prices = [100, 200, 600, 1000, 20, 12];
  function getTotalPrice(arr) {
    console.count("getTotalPrice ran: ");
    return arr.reduce((a, b) => (a += b));
  }

  let totalPrice = useMemo(() => {
    return getTotalPrice(prices);
  }, []);

  let MaxPrice = useCallback((arr) => {
    console.count("Max Price ran: ");
    return Math.max(...(arr || prices));
  }, []);

  return (
    <div>
      <h1>Welcome to REact world</h1>

      <Paginate2 itemsPerPage={4} items={prodcutData} />

      <hr />
      <img src={viteLogo} alt="logo" />
      <img src={reactLogo} alt="logo" />
      <p>Lorem ipsum dolor sit amet.</p>
      <p>My Name is {num > 20 ? name : "Amadi Chile"} </p>
      <p className="para1"> REact is {5 + 5} times faster with vite </p>
      <hr />
      <h4> Count: {isPending ? "updating..." : c} </h4>
      <button className="outline outline-1" onClick={increaseC}>
        Count++
      </button>
      <hr />
      <h3>Total Price: {totalPrice} | </h3>
      <Child MaxPrice={MaxPrice} />
      {/* adding image from cloudinary */}
      <Image
        className="w-full h-[100vh] "
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image1.url}
      />

      <Image
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image2.url}
      />

      <Image
        loading="lazy"
        cloudName={images.cloudName}
        publicId={images.image3.url}
      />
    </div>
  );
};

export default Basics;
