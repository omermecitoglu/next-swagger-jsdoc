# Next Swagger JSDoc

## Description
A Next.js plugin to generate Swagger documentation using JSDoc annotations.

## Installation
```bash
npm install @omer-x/next-swagger-jsdoc
```

## Usage

### API Documentation Generation
```typescript
import { generateApiDocs } from "@omer-x/next-swagger-jsdoc";

const apiSpec = generateApiDocs("./src/models/*.ts");
```

### React Component for Swagger UI
```typescript
import React from "react";
import { ReactSwagger } from "@omer-x/next-swagger-jsdoc";

const Page = () => {
  const spec = generateApiDocs("./src/models/*.ts");
  return <ReactSwagger spec={spec} />;
};

export default Page;
```

### Swagger Route Example (Next.js)
```typescript
// ./src/app/swagger/route.ts

import { generateApiDocs } from "next-swagger-jsdoc";

export function GET() {
  const spec = generateApiDocs("./src/models/*.ts");
  return Response.json(spec);
}
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
