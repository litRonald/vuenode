import { postRequest, getRequest } from "@/util/require.js";

// export  const handleGoodsList = (prarm, sign) => {
//    return getRequest('/goodsSql', prarm, sign)
// }
export  const handleGoodsList = (prarm, sign) => {
   return postRequest('/goodsSql', prarm, sign)
}