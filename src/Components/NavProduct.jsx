import React from "react";

function NavProduct() {
  return (
    <div
      className="w-full bg-blue-400 h-10 lg:h-[20rem] px-20 py-32 flex justify-center bg-fixed"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-auto flex justify-center items-center flex-col text-center">
        {/* Description */}
       
        
        {/* Products Heading */}
        <div className="text-white text-3xl md:text-5xl font-bold">
          <div className="fontstyle">Products</div>
        </div>
        <p className="text-white text-xl md:text-2xl font-light mb-4">
          Explore our wide range of healthcare solutions designed to meet your needs.
        </p>
      </div>
    </div>
  );
}

export default NavProduct;
