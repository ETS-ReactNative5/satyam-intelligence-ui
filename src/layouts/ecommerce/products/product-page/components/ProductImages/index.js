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

import { useState } from "react";

// react-images-viewer components
import ImgsViewer from "react-images-viewer";

// @mui material components
import Grid from "@mui/material/Grid";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";

// Images
const image1 =
  "https://images.unsplash.com/photo-1616627781431-23b776aad6b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1884&q=80";
const image2 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-pink.jpg";
const image3 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg";
const image4 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-steel.jpg";
const image5 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/chair-wood.jpg";

function ProductImages() {
  const [currentImage, setCurrentImage] = useState(image1);
  const [imgsViewer, setImgsViewer] = useState(false);
  const [imgsViewerCurrent, setImgsViewerCurrent] = useState(0);

  const handleSetCurrentImage = ({ currentTarget }) => {
    setCurrentImage(currentTarget.src);
    setImgsViewerCurrent(Number(currentTarget.id));
  };

  const openImgsViewer = () => setImgsViewer(true);
  const closeImgsViewer = () => setImgsViewer(false);
  const imgsViewerNext = () => setImgsViewerCurrent(imgsViewerCurrent + 1);
  const imgsViewerPrev = () => setImgsViewerCurrent(imgsViewerCurrent - 1);

  return (
    <SuiBox>
      <ImgsViewer
        imgs={[{ src: image1 }, { src: image2 }, { src: image3 }, { src: image4 }, { src: image5 }]}
        isOpen={imgsViewer}
        onClose={closeImgsViewer}
        currImg={imgsViewerCurrent}
        onClickPrev={imgsViewerPrev}
        onClickNext={imgsViewerNext}
        backdropCloseable
      />

      <SuiBox
        component="img"
        src={currentImage}
        alt="Product Image"
        boxShadow="lg"
        borderRadius="lg"
        width="100%"
        onClick={openImgsViewer}
      />
      <SuiBox mt={2} pt={1}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <SuiBox
              component="img"
              id={0}
              src={image1}
              alt="small image 1"
              borderRadius="lg"
              boxShadow="regular"
              width="100%"
              customClass="cursor-pointer h-100 object-cover"
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={2}>
            <SuiBox
              component="img"
              id={1}
              src={image2}
              alt="small image 2"
              borderRadius="lg"
              boxShadow="regular"
              width="100%"
              customClass="cursor-pointer h-100 object-cover"
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={2}>
            <SuiBox
              component="img"
              id={2}
              src={image3}
              alt="small image 3"
              borderRadius="lg"
              boxShadow="regular"
              width="100%"
              customClass="cursor-pointer h-100 object-cover"
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={2}>
            <SuiBox
              component="img"
              id={3}
              src={image4}
              alt="small image 4"
              borderRadius="lg"
              boxShadow="regular"
              width="100%"
              customClass="cursor-pointer h-100 object-cover"
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={2}>
            <SuiBox
              component="img"
              id={4}
              src={image5}
              alt="small image 5"
              borderRadius="lg"
              boxShadow="regular"
              width="100%"
              customClass="cursor-pointer h-100 object-cover"
              onClick={handleSetCurrentImage}
            />
          </Grid>
        </Grid>
      </SuiBox>
    </SuiBox>
  );
}

export default ProductImages;
