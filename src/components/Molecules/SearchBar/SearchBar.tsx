import { useState } from "react";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button label="Search" />
    </div>
  );
};

export default SearchBar;
