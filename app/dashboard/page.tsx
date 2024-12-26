import { getServerSession } from "next-auth"

export default async function Page(){
    const session = await getServerSession();


    return (<>
        <h1>DashBoard</h1>
        <div>{session?.user?.name}</div>
    </>
    )
}