import { WithLayout } from "../../components";
import { DashboardView } from "../../components/view/Dashboard";

const Dashboard: React.FC = () => {
  return <DashboardView />;
};

export const DashboardPage = WithLayout(Dashboard);
