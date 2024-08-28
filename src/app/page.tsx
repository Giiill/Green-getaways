import Style from "@/styles/app.module.scss";
import { UiMain } from "@/components/UiMain/UiMain";
import { UiHeader } from "@/components/UiHeader/UiHeader";
import { UiAbout } from "@/components/UiAbout/UiAbout";
import { UiWhyUs } from "@/components/UiWhyUs/UiWhyUs";
import { UiPopularTour } from "@/components/UiPopularTour/UiPopularTour";


export default function Home() {
  return (
    <div className={Style.app}>
      <UiHeader />
      <UiMain />
      <UiAbout />
      <UiWhyUs />
      {/* <UiPopularTour /> */}
    
    </div>
  );
}
