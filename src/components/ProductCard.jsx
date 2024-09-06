import { Link } from "react-router-dom";

const ProductCard = ({ asin, title, price, original_price, image }) => {
  return (
    <Link
      to={`/products/${asin}`}
      className="shadow-lg w-[300px] h-[400px] flex flex-col justify-between"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="rounded-t-md hover:scale-110 transition-all ease-in-out shadow-2xl"
        />
      </div>
      <div className="flex flex-col justify-start p-3 gap-1 border-t-2">
        <h3 className="text-gray-900 truncate ...">{title}</h3>
        <p className="text-base text-gray-600">{price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
