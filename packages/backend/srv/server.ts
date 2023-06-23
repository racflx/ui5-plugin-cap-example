import "@sap/cds";

export async function cds_server(o: unknown) {
  console.log("Starting server...");
  const defaultServer = (await cds.server(o)) as unknown;
  return defaultServer;
}
