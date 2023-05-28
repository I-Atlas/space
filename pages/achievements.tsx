import Timeline from "components/timeline/timeline";
import PageLayout from "layouts/page";
import AchievementsImage from "public/assets/images/screenshots/achievements.png";

export default function Achievements() {
  return (
    <PageLayout
      image={AchievementsImage.src}
      title="Achievements"
      keywords="My achievements"
    >
      <Timeline />
    </PageLayout>
  );
}
