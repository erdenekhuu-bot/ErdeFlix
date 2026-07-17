import { usePage } from '@inertiajs/react';
import HomeLayout from '@/layouts/home-layout';

export default function Category() {
    const { banner } = usePage().props;
    return <HomeLayout title="Жагсаалт">Category</HomeLayout>;
}
