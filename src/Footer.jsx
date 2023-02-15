import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-light px-5 py-4 d-flex justify-content-center">
        <div className="col-lg-5 ms-3 me-5">
          <div className=" d-flex column align-items-center mb-3">
            <i class="bi bi-geo-alt mydark me-4"></i>
            <p className="user-select-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              consequatur eius similique architecto voluptatum, quod nobis unde
              ut sunt, aliquid dolore. Earum, quasi quam iure impedit
              necessitatibus porro animi magni.
            </p>
          </div>
          <div className=" d-flex column align-items-center">
            <i class="bi bi-telephone mydark me-4"></i>
            <p className="user-select-none">+959 123456789</p>
          </div>
        </div>
        <div className="col-lg-5">
          <h5 className=" text-center mb-3 user-select-none">
            SIGN UP FOR THE NEWSLETTERS
          </h5>
          <div class="input-group mb-4">
            <input
              type="text"
              class="form-control"
              placeholder="Enter email"
              aria-label="Enter email"
              aria-describedby="button-addon2"
            />
            <button class="btn btn-primary" type="button" id="button-addon2">
              Subscribe Now
            </button>
          </div>
          <div className="text-center">
            <span className=" fs-5 me-4 fw-semibold user-select-none">
              Follow us on{" "}
            </span>
            <a href="#">
              <i class="bi bi-facebook myblue me-4"></i>
            </a>
            <a href="#">
              <i class="bi bi-instagram myred me-4"></i>
            </a>
            <a href="#">
              <i class="bi bi-twitter myblue"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <h5 className="text-center bg-dark text-white py-4 user-select-none">
          Copyright &copy; 2023, ecommerce.com.mm,Inc. All rights reserved.
        </h5>
      </div>
    </div>
  );
};

export default Footer;
