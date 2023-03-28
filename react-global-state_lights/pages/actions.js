import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({ turnLightsOn, turnLightsOff }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions turnLightsOff={turnLightsOff} turnLightsOn={turnLightsOn} />
    </>
  );
}
