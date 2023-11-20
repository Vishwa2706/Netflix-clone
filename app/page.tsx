import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import { authOptions } from "./utlis/auth";


export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  } else {
    return redirect("/home");
  }
}

// export default async function Home() {
//   const session = await getServerSession(authOptions);
//   return(
//     <div className="m-5">
//       <h1>{session?.user?.name}</h1>
//     </div>
//   )
// }




