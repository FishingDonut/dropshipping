import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;

    const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const data = response.json();

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">        
                <h1>ID: {id}</h1>
                <Link href="/dashboard/">BACK</Link>
            </main>
        </div>
    );
}