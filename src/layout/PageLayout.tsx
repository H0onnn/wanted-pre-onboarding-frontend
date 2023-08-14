/** @jsxImportSource @emotion/react */

import Header from "./Header";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
