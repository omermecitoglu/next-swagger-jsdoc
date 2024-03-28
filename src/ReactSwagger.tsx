"use client";
import React from "react"
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

type ReactSwaggerProps = {
  spec: Record<string, unknown>,
};

const ReactSwagger = ({
  spec,
}: ReactSwaggerProps) => (
  <SwaggerUI
    spec={spec}
    url="/swagger"
  />
);

export default ReactSwagger;
