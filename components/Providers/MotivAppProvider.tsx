import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { baseUrl } from "../../apiRoutes/apiRoutes";

interface Props {
  queryKey: string;
}
const defaultQueryFn = async ({ queryKey }: Props) => {
  const { data } = await axios.get(`${baseUrl}${queryKey[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // @ts-ignore
      queryFn: defaultQueryFn,
    },
  },
});

export default ({ children }: PropsWithChildren<{}>) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
