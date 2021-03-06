import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "de-zurich-z21b-ui-library/dist/de-zurich-z21b-ui-library.css";

import {
  ZActivity,
  ZBreadCrumb,
  ZButton,
  ZCard,
  ZCheckBox,
  ZCollapser,
  ZComboBox,
  ZConfectioner,
  ZConfectionerCard,
  ZHeader,
  ZIconButton,
  ZKeyVisual,
  ZLayoutAntrag,
  ZLayoutStandard,
  ZLoading,
  ZModal,
  ZPageNavigation,
  ZPageNavigationItem,
  ZParallaxWrapper,
  ZPhoneField,
  ZPopOver,
  ZRadiobutton,
  ZRadioGroup,
  ZSelectField,
  ZSmartScroll,
  ZSuggestBox,
  ZSwitchBox,
  ZTab,
  ZTabContent,
  ZTabNavi,
  ZTextArea,
  ZTextField,
  ZToggler,
  ZTopNavigation,
  ZRange,
  ZRadioGroupCard,
  ZRadiobuttonCard,
} from "de-zurich-z21b-ui-library";
const uiLibComponents: Record<string, any> = {
  ZActivity,
  ZBreadCrumb,
  ZButton,
  ZCard,
  ZCheckBox,
  ZCollapser,
  ZComboBox,
  ZConfectioner,
  ZConfectionerCard,
  ZHeader,
  ZIconButton,
  ZKeyVisual,
  ZLayoutAntrag,
  ZLayoutStandard,
  ZLoading,
  ZModal,
  ZPageNavigation,
  ZPageNavigationItem,
  ZParallaxWrapper,
  ZPhoneField,
  ZPopOver,
  ZRadioGroup,
  ZRadiobutton,
  ZSelectField,
  ZSmartScroll,
  ZSuggestBox,
  ZSwitchBox,
  ZTab,
  ZTabContent,
  ZTabNavi,
  ZTextArea,
  ZTextField,
  ZTopNavigation,
  ZToggler,
  ZRange,
  ZRadioGroupCard,
  ZRadiobuttonCard,
};
const app = createApp(App).use(store).use(router);
// register UI lib components
Object.keys(uiLibComponents).forEach((key) => {
  app.component(key, uiLibComponents[key]);
});
app.mount("#app");
/*createApp(App).use(store).use(router).mount("#app");*/
