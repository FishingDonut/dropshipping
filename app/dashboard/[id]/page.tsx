import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
    const id = (await params).id;
    let data, response;
try{
    response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
    }
    data = await response.json();
    console.log(data)
}catch (error) {
    console.error("Error fetching data:", error);
    data = { error: "Failed to fetch data" }; // Valor de fallback
}
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">        
                <h1>ID: {id}</h1>
                <Link href="/dashboard/">BACK</Link>
                <p>{data.USDBRL.codein}</p>
            </main>
        </div>
    );
}