import Image from "next/image";

const Smile = ({}) => {
  return (
    <section className="my-5 mt-lg-10 py-5 bg-gradient-dark position-relative">
      <span className="mask bg-gradient-dark opacity-8"></span>
      <div className="container position-relative z-index-2">
        <div className="row">
          <div className="col-lg-5 col-md-8 m-auto text-left">
            <h5 className="text-white mb-lg-0 mb-5">
              Support <strong>Charleston Pride</strong> with every Amazon
              purchase.
            </h5>
            <img src="/images/smile.png" width={330} height={78}></img>
          </div>
          <div className="col-lg-6 m-auto">
            <div className="row">
              <div className="col-sm-4 col-6 ps-sm-0 ms-auto">
                <a
                  href="https://smile.amazon.com/ch/27-4256750"
                  target="_blank"
                  type="button"
                  className="btn bg-gradient-warning mb-0 ms-lg-3 ms-sm-2 mb-sm-0 mb-2 me-auto w-100 d-block"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Smile;
