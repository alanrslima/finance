import { useMutation, UseMutationResult } from "react-query";
import { api } from "services/api";
import { Credentials } from "types/credentials";

export const authorizeRequest = async ({
  email,
  password,
}: Credentials): Promise<void> => {
  await api.post("/password/forgot", { email });
};

// export function useAuthorize(): UseMutationResult<void> {
//   return useMutation(['credentials'], async ({ email, password }: Credentials) => {
//     return authorizeRequest({ email, password });
//   });
// }
