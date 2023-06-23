import { ApplicationService } from "@sap/cds";

export default class ExampleServiceHandler extends ApplicationService {
  public override async init(): Promise<void> {
    await super.init();

    console.log("Initializing ExampleService...");

    this.on("helloWorld", () => "hello world");
  }
}
