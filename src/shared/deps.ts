// @deno-types="npm:@types/react"
import React, { useState } from "react";
export { React, useState };

// @deno-types="npm:@types/react-dom/client"
import ReactDOM from "react-dom/client";
export { ReactDOM };

export {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
