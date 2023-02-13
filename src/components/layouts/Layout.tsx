import { useTheme } from "next-themes";
import { PropsWithChildren, useEffect, useState } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return <div>Layout</div>;
};

export default Layout;
