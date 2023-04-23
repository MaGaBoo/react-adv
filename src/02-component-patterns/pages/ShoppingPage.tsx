import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/index";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "/coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>

        {/* Component Compound Pattern */}

{/*         <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'Mug'} />
          <ProductCard.Buttons />
        </ProductCard> */}

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={'Mug'} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
 