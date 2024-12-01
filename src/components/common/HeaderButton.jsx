import { cn } from "../../lib/utils/cn";

export const HeaderButton = ({ children, className }) => {
  return (
    <button
      className={cn(
        "text-[#FFFFFF] shadow-nav-btn hover:bg-[#0FF1F6] hover:text-[#002228] hover:border-none  opacity-90 hover:transition-none transition-none hover:opacity-100 rounded-full font-medium py-1 sm:py-[8px] px-3.5 sm:px-[16px] border-2",
        className
      )}
    >
      {children}
    </button>
  );
};
