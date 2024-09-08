import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

// Reusable card Component for the products to show in card format
const ProductCard = ({
  asin,
  title,
  price,
  original_price,
  image,
  rating,
  rating_num,
}) => {
  return (
    <Link
      to={`/products/${asin}`}
      className="shadow-lg lg:w-[300px] lg:h-[400px] w-[200px] h-[300px] flex flex-col justify-between"
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
        <div className="flex items-center gap-1 mt-2">
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <FaStar
                key={idx}
                size={20}
                className={`${
                  rating > idx ? "text-orange-700" : "text-gray-300"
                }`}
                title={rating}
              />
            ))}
          <p className="pl-2">({rating_num})</p>
        </div>
        <p className="text-base text-gray-600">{price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
