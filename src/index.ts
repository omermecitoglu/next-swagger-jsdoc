import getPackageMetadata from "@omer-x/package-metadata";
import swaggerJsdoc from "swagger-jsdoc";
export * as ReactSwagger from "./ReactSwagger"

export const generateApiDocs = (source: string[] | string) => {
  source = Array.isArray(source) ? source : [source]
  const metadata = getPackageMetadata();
  const spec = swaggerJsdoc({
    apis: [
      "./**/app/**/route.ts",
      ...source,
    ],
    definition: {
      openapi: "3.0.0",
      info: {
        title: metadata.serviceName,
        version: metadata.version,
      },
    },
  });
  return spec as Record<string, unknown>;
};

export default generateApiDocs
