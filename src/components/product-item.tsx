import clsx from "clsx";
import React from "react";

export type ProductItemProps = {
  id: string | number;
  imageUrl: string;
  title: string;
  price: string | number;
  currency: string | number;
};

type ProductItemState = {
  counter: number;
  date: Date;
};
class ProductItem extends React.Component<ProductItemProps, ProductItemState> {
  constructor(props: ProductItemProps) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0
    };
  }

  incClick = () => {
    this.setState((state, props) => ({ counter: state.counter + 1 }));
  };

  decrClick = () => {
    this.setState((state, props) => ({ counter: state.counter - 1 }));
  };

  render() {
    // eslint-disable-next-line object-curly-newline
    const { id, imageUrl, title, price, currency } = this.props;
    const { counter, date } = this.state;
    const productClassnames = clsx({
      "cafe-item": true,
      "js-item": true,
      "badge-show": counter > 0,
      selected: counter > 0
    });

    const counterActive = counter > 0;
    return (
      <div
        role="status"
        className={` ${productClassnames} mx-auto my-5 min-h-fit w-28 rounded border-0 border-gray-200  p-1 pb-20 transition-all hover:bg-gray-700/20 `}>
        <div className="cafe-item-counter js-item-counter flex h-5 w-5 items-center justify-center rounded-full !bg-yellow-600 text-center">
          {counter}
        </div>
        <picture className="mb-4 flex h-20 items-center justify-center rounded bg-gray-500/50 p-3">
          <source
            type="application/x-tgsticker"
            srcSet="./img/tgs/Hotdog.tgs"
          />
          <img src={imageUrl} alt="Hotdog" />
        </picture>

        <div className="mb-4 h-2.5 w-full rounded-full">{title}</div>
        <div className="h-6 rounded-full">
          {" "}
          {price}
          {currency}
        </div>
        <div className="relative mt-2 flex gap-2 ">
          <button
            type="button"
            onClick={this.decrClick}
            className={`absolute !h-10 w-[48%] ${
              counterActive ? " visible  opacity-100 " : " invisible  opacity-0"
            } `}>
            <span>-</span>
          </button>
          <button
            type="button"
            onClick={this.incClick}
            className={`absolute right-0 !h-10 !bg-yellow-600 ${
              counterActive ? " w-[48%] " : "w-full"
            } `}>
            {counterActive ? (
              <span>+</span>
            ) : (
              <span className="button-item-label">🛒</span>
            )}
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
