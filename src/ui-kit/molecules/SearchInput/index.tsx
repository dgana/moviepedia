import { ChangeEventHandler, FC } from "react";
import { FlexBox } from "../../atoms";

interface SearchInputProps {
  search?: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchInput: FC<SearchInputProps> = ({ search, onChange }) => {
  return (
    <FlexBox align="center" justify="between">
      <input
        type="search"
        name="search"
        placeholder="Search movies here..."
        className="h-0 px-4 py-6 text-base rounded border-2 w-full mb-6"
        value={search}
        onChange={onChange}
      />
    </FlexBox>
  );
};

export default SearchInput;
