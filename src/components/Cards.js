import React from "react";
import Card from "./Card";

const Cards = ({ name }) => {
  return (
    <div
      className="cards px-3"
      style={{ top: `${name === "cards-1" ? "-180px" : "0px"}` }}
    >
      <div className="row text-center">
        {name !== "cards-2" && (
          <>
            <Card
              title="Find the perfect gift | Wide Selection | Starting 27 EGP"
              src="https://images-eu.ssl-images-amazon.com/images/G/42/Sunrise/Events/2023/BudgetStore/VD23/XCM_Manual_1534590_5324474_379x304_1X._SY304_CB615167403_.jpg"
            />
            <Card
              title="Security cameras | Starting 250 EGP"
              src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1446398_4835988_379x304_1X._SY304_CB631345942_.jpg"
            />
            <Card
              title="Makeup | New arrivals"
              src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Beauty_Mass_/XCM_Manual_1474863_5024994_379x304_1X._SY304_CB608898092_.jpg"
            />
            <Card
              title="Support Egyptian products | High quality local products"
              src="https://images-eu.ssl-images-amazon.com/images/G/42/3P/XCM_Manual_1478853_EG_GW_DC_3P_LocalStore_16b9c3af-3cbb-473e-bdac-1f5968191ddc_x1._SY304_CB607312444_.jpg"
            />
            <Card
              title="Kitchen essentials | Up to 15% off"
              src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/Gateway/XCM_Manual_1466738_4981387_379x304_1X._SY304_CB609258982_.jpg"
            />
            <Card
              title="Electronics | Free Delivery* on First Order"
              src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2023/img/Consumer_Electronics/XCM_Manual_1531725_5295444_186x116_1X._SY116_CB615640752_.jpg"
            />
            <Card
              title="Enjoy free in-game offers and games with Amazon Prime"
              src="https://images-eu.ssl-images-amazon.com/images/G/42/prime/damisi/prime_eg_launch_/xcm_banners_primegaming_desktop_categorycard_379x304_758x608_eg-en._SY304_CB622128285_.jpg"
            />
            <Card
              title="Men's Clothes | Up to 70%"
              src="https://images-eu.ssl-images-amazon.com/images/G/42/SL/August/XCM_Manual_1464389_4986660_379x304_1X._SY304_CB609528233_.jpg"
            />
            <Card
              title="Headphones | Below 650 EGP"
              src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/XCM_Manual_1454862_4881441_379x304_1X._SY304_CB630947473_.jpg"
            />
          </>
        )}
        {name === "cards-2" && (
          <>
            <Card
              title="Tools & Home Improvement"
              src="https://images-eu.ssl-images-amazon.com/images/G/42/ohl/BAU/XCM_Manual_1397527_4402457_Egypt_EG_BAU_DC_OHL_Tools_DC_2x_379x304_1X._SY304_CB649320776_.jpg"
            />
            <Card
              title="Enjoy additional savings"
              src="https://images-eu.ssl-images-amazon.com/images/G/42/3P/XCM_Manual_1362703_EG_GW_DC_3P_Coupon_260x260_EN_f6f240b3-eaf0-44ac-9d5a-4224d1997ac2._SY304_CB640766244_.jpg"
            />
            <Card
              title="Toys & games | Below 200 EGP"
              src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/OHL/Gateway/XCM_Manual_1466755_4982783_379x304_1X._SY304_CB609289554_.jpg"
            />
            <Card
              title="TVs | Up to 15% off"
              src="https://images-eu.ssl-images-amazon.com/images/G/42/Egypt-hq/2022/img/Consumer_Electronics/GW/xcm_banners_186x116-8ept2-7mq9c_372x232_eg-en._SY116_CB632343022_.jpg"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Cards;
