import { cn } from "../../lib/utils/cn";

export const Button = ({ children, className }) => {
  return (
    <button
      className={cn(
        "font-medium py-3 sm:py-[16px] px-3.5 sm:px-[18px] text-[#002228] bg-primary opacity-90 transition-all delay-150 hover:opacity-100  rounded-full text-xs md:text-base tracking-wide",
        className
      )}
    >
      {children}
    </button>
  );
};
