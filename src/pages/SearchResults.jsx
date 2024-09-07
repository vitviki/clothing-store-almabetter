import { useParams } from "react-router-dom";
import { Collections } from "../components";

const SearchResults = () => {
  const { searchTerm } = useParams();

  return (
    <>
      <Collections
        searchString={searchTerm}
        titleText1="Results:"
        titleText2={searchTerm}
      />
    </>
  );
};

export default SearchResults;
