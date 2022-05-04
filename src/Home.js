import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://www.oakhavenhospice.co.uk/wp-content/uploads/2020/11/curved-furniture-header-living-room.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="BIGMO Modern Black White Design Home Utility Padded Stool/ Ottoman (4 Legs-Added Stability-Natural Finish)"
            price={2749.00}
            rating={4}
            image="https://www.loomkart.com/wp-content/uploads/2019/12/Stools1000x1000_0005_IMG_20191211_124119.jpg"
          />
          <Product
            id="49538094"
            title="Ren 6 Door Wardrobe with External Drawers in Wenge Finish"
            price={30597.00}
            rating={4}
            image="https://ii1.pepperfry.com/media/catalog/product/r/e/568x625/ren-6-door-wardrobe-with-external-drawers-in-wenge-finish-by-mintwud-ren-6-door-wardrobe-with-extern-1dbjov.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Yuuma King Size Bed with Storage in Wenge Finish"
            price={36999.00}
            rating={4}
            image="https://ii1.pepperfry.com/media/catalog/product/y/u/568x625/yuuma-king-size-bed-with-storage-in-wenge-finish-by-mintuwd-yuuma-king-size-bed-with-storage-in-weng-lcckjh.jpg"
          />
          <Product
            id="90829332"
            title="Scape Canvas Art Prints In Golden"
            price={2338.00}
            rating={4}
            image="https://ii1.pepperfry.com/media/catalog/product/s/c/568x625/scape-canvas-art-prints-in-golden-by-the-artment-scape-canvas-art-prints-in-golden-by-the-artment-tpwltc.jpg"
          />
          <Product
            id="3254354345"
            title="Kosmo Premium Dressing Unit in Natural Wenge Woodpore Melamine Finish"
            price={10131.00}
            rating={4}
            image="https://ii1.pepperfry.com/media/catalog/product/k/o/568x625/kosmo-premium-dressing-unit-in-natural-wenge-woodpore-melamine-finish-by-spacewood-kosmo-premium-dre-ju8yv8.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="23445930"
            title="Haaken 3 Seater Sofa in Blue color"
            price={77999.00}
            rating={5}
            image="https://ii1.pepperfry.com/media/catalog/product/h/a/568x284/haaken-3-seater-sofa-in-blue-color----woodsworth-by-pepperfry-haaken-3-seater-sofa-in-blue-color-----a5mjqg.jpg"
          />
          <Product
            id="3254354345"
            title="Scorpion Study Table with Book Shelves & Cabinet in Knotty Wood Finish"
            price={18749.00}
            rating={4}
            image="https://ii1.pepperfry.com/media/catalog/product/s/t/568x625/study-table-with-book-shelves---cabinet-in-knotty-wood-finish-by-crystal-furnitech-study-table-with--blhd06.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;