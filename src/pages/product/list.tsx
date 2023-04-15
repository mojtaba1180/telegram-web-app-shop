import "@style/product-item.css";

import ProductItem, { ProductItemProps } from "@component/product-item";
import React from "react";

import ProductItemSkeleton from "@/components/skeletons/product-item.sk";

function ProductList() {
  const [products, setProducts] = React.useState<ProductItemProps[] | null>(
    null
  );

  React.useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          title: "HotDog luxe",
          price: 150,
          currency: "تومان",
          imageUrl: "./hotdog.png"
        },
        {
          id: 2,
          title: "HotDog",
          price: 150,
          currency: "تومان",
          imageUrl: "./hotdog.png"
        },
        {
          id: 3,
          title: "HotCat",
          price: 250,
          currency: "تومان",
          imageUrl: "./hotdog.png"
        },
        {
          id: 4,
          title: "سوسییس",
          price: 120,
          currency: "تومان",
          imageUrl: "./hotdog.png"
        },
        {
          id: 5,
          title: "سوسییس",
          price: 120,
          currency: "تومان",
          imageUrl: "./hotdog.png"
        },
        {
          id: 6,
          title: "سوسییس",
          price: 120,
          currency: "تومان",
          imageUrl: "./hotdog.png"
        },
        {
          id: 7,
          title: "سوسییس",
          price: 120,
          currency: "تومان",
          imageUrl: "./hotdog.png"
        },
        {
          id: 8,
          title: "سوسییس",
          price: 120,
          currency: "تومان",
          imageUrl: "./hotdog.png"
        }
      ]);
    }, 100);

    return () => {
      setProducts(null);
    };
  }, []);

  return (
    <section className="m-auto flex grow flex-wrap content-end  items-center justify-between gap-5 overflow-auto  pb-10 sm:after:grow">
      {products
        ? products.map((item) => <ProductItem {...item} key={item.id} />)
        : [1, 2, 3, 4, 5, 6, 7].map((item) => (
            // eslint-disable-next-line react/jsx-indent
            <ProductItemSkeleton delay={item} />
            // eslint-disable-next-line react/jsx-indent, prettier/prettier, indent
          ))}
    </section>
  );
}

export default ProductList;
