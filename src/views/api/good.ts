import { postRequest } from "@/util/require.js";

export  const handleGoodsList = (prarm, sign: string) => {
   return postRequest('/goodsSql', prarm, sign)
}