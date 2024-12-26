import { getServerSession } from "next-auth"

export default async function Page(){
    const session = await getServerSession();

    console.log(session);

    return (<>
        <h1>DashBoard</h1>
        <div>{session?.user?.email}</div>
    </>
    )
}