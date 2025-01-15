import MainProduct from '@/components/pages/product/mainProduct';

const pages = async({ params }: { params: Promise<{ id: number }> }) => { 
    const id = (await params).id;
    return (
        <MainProduct/>
    );
}

export default pages; 