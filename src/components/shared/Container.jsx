import { twMerge } from "tailwind-merge";

const Container = ({ className = "", children }) => {
  return (
    <div
      className={twMerge(
        "max-w-[1120px] max-[300px]:mx-4 mx-6 min-[1150px]:mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
