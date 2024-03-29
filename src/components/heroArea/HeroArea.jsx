import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const HeroArea = ({ type, data }) => {
  const banner = data.banner;
  return (
    <>
      {banner.length > 0 && (
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          loop={true}
          speed={5000}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          id="home"
          className="homepage-slides"
        >
          {(type ? banner.slice(0, 6) : banner.slice(2)).map((item) => (
            <SwiperSlide key={item.id} className="single-slide-item">
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="hero-area-content">
                <div className="container">
                  <div className="row justify-content-center">
                    <div
                      className="col-lg-12 wow fadeInUp animated"
                      data-wow-delay=".2s"
                    >
                      <div className="section-title col-12 col-lg-6">
                        <h6>{item.heading}</h6>
                        <h1 style={{ color: `${item.color}` }}>
                          {item.motive.m1}
                          <br />
                          <b>{item.motive.m2}</b>
                        </h1>
                        <p>
                          {item.title.t1}
                          <br />
                          {item.title.t2}
                        </p>
                      </div>
                      <Link className="main-btn" to={item.link}>
                        Learn More...
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default HeroArea;
