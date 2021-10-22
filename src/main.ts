import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// CSS /SCSS
import "@/assets/styles/style.scss";
import "@/assets/styles/tailwind.css";

// Components
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Input from "@/components/Inputs/Input.vue";
import TextArea from "@/components/Inputs/TextArea.vue";
import Radio from "@/components/Inputs/Radio.vue";
import Select from "@/components/Inputs/Select.vue";
import Slider from "@/components/Inputs/Slider.vue";
import CheckBox from "@/components/Inputs/CheckBox.vue";
import DatePicker from "@/components/Inputs/DatePicker.vue";

library.add(fas);

const app = createApp(App);

// Vuex store
app.use(store);

// Vue router
app.use(router);

// Use components
app
  .component("fa", FontAwesomeIcon)
  .component("Input", Input)
  .component("TextArea", TextArea)
  .component("Radio", Radio)
  .component("Select", Select)
  .component("Slider", Slider)
  .component("CheckBox", CheckBox)
  .component("DatePicker", DatePicker);

app.mount("#app");
