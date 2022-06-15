import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";

interface Props {
  queryKey: string;
}
const defaultQueryFn = async ({ queryKey }: Props) => {
  const { data } = await axios.get(`apiurl${queryKey[0]}`);
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
