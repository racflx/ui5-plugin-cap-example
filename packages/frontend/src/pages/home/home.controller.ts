import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace example.frontend.pages.home
 */
export default class Home extends Controller {
  private onClick() {
    MessageToast.show(`Clicked`);
  }
}
