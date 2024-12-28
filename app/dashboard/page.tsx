import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Page(){
    const session = await getServerSession(authOptions);

    if(!session){
        return <h1>NAO</h1>
    }

    return (
    <>
        <h1>DashBoard</h1>
        <div>{session?.user?.email}</div>
        <div>{session?.user?.id}</div>
        <div>{session?.user?.fullName}</div>
    </>
    )
}