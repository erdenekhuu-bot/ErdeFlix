import { usePage } from '@inertiajs/react';
import HomeLayout from '@/layouts/home-layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import { FeaturedCard } from '@/components/card/FeaturedCard';

interface RecordItem {
    title: string;
    description: string;
    image: string;
    kind: string;
    date: string;
}

export default function Category() {
    const { records } = usePage<{ records: RecordItem[] }>().props;

    return (
        <HomeLayout title="Жагсаалт">
            <section className="">
                <div className="mt-[calc(6rem)]">
                    <p className="my-4 text-2xl">Адал явдалт</p>
                    {records.length > 0 && (
                        <Swiper spaceBetween={20} slidesPerView={4}>
                            {records.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <FeaturedCard
                                        key={index}
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                        kind={item.kind}
                                        date={item.date}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </section>
        </HomeLayout>
    );
}
