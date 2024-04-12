import Style from "./styles/app.module.scss";
import { UiMain } from "./components/UiMain/UiMain";
import { UiHeader } from "./components/UiHeader/UiHeader";


export default function Home() {
  return (
    <div className={Style.app}>
      <UiHeader />
      <UiMain />
      
    </div>
  );
}
