import { ContentSection, LayoutContainer } from "./styles";
import { HeaderSection } from "./Header";
import { FooterSection } from "./Footer";

interface LayoutProps {
  children?: React.ReactNode;
}

export const LayoutComponent: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <HeaderSection />
      <ContentSection>{children}</ContentSection>
      <FooterSection />
    </LayoutContainer>
  );
};

//HOC WithLayout (Higher Order Component)
export const WithLayout = (Component: React.FC) => () => {
  return (
    <LayoutComponent>
      <Component />
    </LayoutComponent>
  );
};
