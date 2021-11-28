import GithubFollowers from "components/timeline/github";
import Timeline from "components/timeline/timeline";
import PageLayout from "layouts/page";

export default function Achievements() {
  return (
    <PageLayout title="Achievements" keywords="My achievements">
      {/* <Timeline /> */}
      <GithubFollowers />
    </PageLayout>
  );
}
