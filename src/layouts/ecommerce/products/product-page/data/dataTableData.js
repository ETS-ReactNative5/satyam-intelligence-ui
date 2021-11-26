/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiProgress from "components/SuiProgress";

// ProductPage page components
import ProductCell from "layouts/ecommerce/products/product-page/components/ProductCell";
import ReviewCell from "layouts/ecommerce/products/product-page/components/ReviewCell";
import DefaultCell from "layouts/ecommerce/products/product-page/components/DefaultCell";

// Images
const blackChair =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg";
const chairPink =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-pink.jpg";
const chairSteel =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-steel.jpg";
const chairWood =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-wood.jpg";

export default {
  columns: [
    { Header: "product", accessor: "product", width: "50%" },
    { Header: "price", accessor: "price", width: "10%" },
    { Header: "review", accessor: "review", align: "center" },
    { Header: "availability", accessor: "availability", align: "center", width: "40%" },
    { Header: "id", accessor: "id", align: "center" },
  ],

  rows: [
    {
      product: <ProductCell image={blackChair} name="Christopher Knight Home" />,
      price: <DefaultCell>$89.53</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <SuiBox width="8rem">
          <SuiProgress value={80} color="success" gradient noLabel />
        </SuiBox>
      ),
      id: <DefaultCell>230019</DefaultCell>,
    },
    {
      product: <ProductCell image={chairPink} name="Bar Height Swivel Barstool" />,
      price: <DefaultCell>$99.99</DefaultCell>,
      review: <ReviewCell rating={5} />,
      availability: (
        <SuiBox width="8rem">
          <SuiProgress value={90} color="success" gradient noLabel />
        </SuiBox>
      ),
      id: <DefaultCell>87120</DefaultCell>,
    },
    {
      product: <ProductCell image={chairSteel} name="Signature Design by Ashley" />,
      price: <DefaultCell>$129.00</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <SuiBox width="8rem">
          <SuiProgress value={60} color="warning" gradient noLabel />
        </SuiBox>
      ),
      id: <DefaultCell>412301</DefaultCell>,
    },
    {
      product: <ProductCell image={chairWood} name="Modern Square" />,
      price: <DefaultCell>$59.99</DefaultCell>,
      review: <ReviewCell rating={4.5} />,
      availability: (
        <SuiBox width="8rem">
          <SuiProgress value={40} color="warning" gradient noLabel />
        </SuiBox>
      ),
      id: <DefaultCell>001992</DefaultCell>,
    },
  ],
};
