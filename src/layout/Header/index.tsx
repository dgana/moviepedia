import { Link, Outlet } from "react-router-dom";
import { FlexBox, Text } from "../../ui-kit/atoms";

const HeaderLayout = () => {
  return (
    <>
      <FlexBox className="w-full fixed bg-zinc-50 px-12 z-10 shadow-xl" justify="between" align="center">
        <Link to="/">
          <Text className="mx-4 my-4 text-blue-900" font="fugaz" size="2xl">
            Movie Show
          </Text>
        </Link>
      </FlexBox>
      <div className="pt-24 pb-16 px-12">
        <Outlet />
      </div>
    </>
  );
};

export default HeaderLayout;
