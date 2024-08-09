import { makeInstaller } from "@y-ui/utils";
import components from "./components";
import "@y-ui/theme";

const installer = makeInstaller(components);

export * from "@y-ui/components";
export default installer;
