import { cn } from "../../lib/utils/cn";

export const Container = ({ children, className }) => {
  return (
    <div className={cn("w-full max-w-[1400px] mx-auto px-2.5", className)}>
      {children}
    </div>
  );
};