import { useParams } from "react-router-dom";
import { Collections } from "../components";

const Category = () => {
  const { categoryId, categoryType } = useParams();

  return (
    <>
      <Collections
        searchString={`${categoryId}%20${categoryType}`}
        titleText1={categoryId}
        titleText2={categoryType}
      />
    </>
  );
};

export default Category;
