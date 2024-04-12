import { CalculateView } from "../../components";
import { WithLayout } from "../../components";

const Calculate: React.FC = () => {
  return <CalculateView />;
};

export const CalculatePage = WithLayout(Calculate);
