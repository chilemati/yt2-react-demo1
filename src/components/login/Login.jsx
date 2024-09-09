import React, { useState } from "react";
import VirtualizedList from '../list/VirtualizedList'
import LazyImage from "../lazy/LazyImage";


const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    let obj = {email,password};
    let formData = new FormData();
        formData.append('email',email);
        formData.append('password',password);
    console.log('form submited', JSON.stringify(formData))
  }
  return (
    <div>
      <h2>Please Login</h2>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex items-center justify-center flex-col gap-4"
      >
        <fieldset className="flex items-start justify-start flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 border border-1"
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
          />
        </fieldset>
        <fieldset className="flex items-start justify-start flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
           value={password}
           onChange={(e) => setPassword(e.target.value)}
            className="px-3 border border-1"
            type="password"
            name="password"
            id="password"
            placeholder="should be alphanumeric "
          />
        </fieldset>
        <button
          className="border bg-transparent hover:bg-green-500 hover:text-white border-1 w-fit px-2 py-1 text-[10px] rounded "
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="clamp-div">
        <h3 className="clampH3" >My Text is made responsive with clamp</h3>
        <p className="clampP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda reprehenderit vitae tempora accusantium ipsum aperiam quam tenetur eaque? Eius explicabo voluptate delectus dolorem ipsa aliquam laboriosam omnis iusto error?</p>
      </div>
      <VirtualizedList />
      <LazyImage img='https://cdn.britannica.com/66/162466-131-47ADB66F/Man-butterfly-stroke-pool.jpg' />
      <LazyImage img='https://media.istockphoto.com/id/465383082/photo/female-swimmer-at-the-swimming-pool.jpg?s=612x612&w=0&k=20&c=tcTwN2rTvUBK4wddan_GUCxrXX6bBoU-hyrVMvmT0BM=' />
    </div>
  );
};

export default Login;
