import { usePage } from '@inertiajs/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeLayout from '@/layouts/home-layout';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FeaturedCard } from '@/components/card/FeaturedCard';

import { Button, Input, Row, Col, Badge, Typography } from 'antd';

const { Title, Text, Paragraph } = Typography;

interface RecordItem {
    title: string;
    description: string;
    image: string;
    kind: string;
    date: string;
}

export default function Category() {
    const { records, category } = usePage<{
        records: RecordItem[];
        category: any;
    }>().props;

    return (
        <HomeLayout title="Watchlist & Collections">
            <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
                {/* Hero Header */}
                <section className="relative overflow-hidden px-4 pt-24 md:px-8 lg:px-16">
                    {/* Background Glow */}
                    <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />

                    <div className="relative container mx-auto">
                        <div className="max-w-4xl">
                            <Title
                                level={1}
                                className="!mb-2 !text-5xl !font-bold !text-white md:!text-6xl"
                            >
                                Watchlist & Collections
                            </Title>
                        </div>
                    </div>
                </section>

                {/* Categories with Glassmorphism */}
                <section className="px-4 py-16 md:px-8 lg:px-16">
                    <div className="container mx-auto">
                        <div className="mb-10">
                            <div className="flex items-center gap-3">
                                <Title
                                    level={2}
                                    className="!mb-0 !text-3xl !font-bold !text-white"
                                >
                                    Ангилал
                                </Title>
                            </div>
                        </div>

                        <Row gutter={[16, 16]}>
                            {category.map((category: any, index: number) => (
                                <Col xs={12} sm={8} md={6} lg={4} key={index}>
                                    <div className="group cursor-pointer rounded-2xl border border-white/50 p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                        <Text className="text-base font-semibold text-white/80 group-hover:text-white">
                                            {category.name}
                                        </Text>
                                        <div className="mt-2 text-xs text-white/30">
                                            {Math.floor(
                                                Math.random() * 100 + 50,
                                            )}{' '}
                                            titles
                                        </div>
                                        <div className="mt-3 h-0.5 w-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:w-full" />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>
                {/* Trending Carousel */}
                <section className="px-4 py-12 md:px-8 lg:px-16">
                    <div className="container mx-auto">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <Title
                                    level={2}
                                    className="!mb-1 !text-2xl !font-bold !text-white"
                                >
                                    🔥 Trending in Your Collections
                                </Title>
                                <Text className="text-white/40">
                                    Based on your saved content
                                </Text>
                            </div>
                        </div>

                        {records.length > 0 && (
                            <Swiper
                                modules={[Autoplay, Navigation, Pagination]}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                navigation
                                pagination={{ clickable: true }}
                                spaceBetween={24}
                                slidesPerView={1}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    1024: { slidesPerView: 4 },
                                    1280: { slidesPerView: 5 },
                                }}
                                className="trending-swiper !pb-12"
                            >
                                {records.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <FeaturedCard
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

                {/* Stats Footer */}
                <section className="border-t border-white/5 px-4 py-8 md:px-8 lg:px-16">
                    <div className="container mx-auto">
                        <Row gutter={[16, 16]} justify="center">
                            <Col xs={12} sm={6} className="text-center">
                                <div className="text-2xl font-bold text-white">
                                    24
                                </div>
                                <div className="text-xs text-white/40">
                                    Collections
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="text-center">
                                <div className="text-2xl font-bold text-white">
                                    187
                                </div>
                                <div className="text-xs text-white/40">
                                    Movies Saved
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="text-center">
                                <div className="text-2xl font-bold text-white">
                                    12
                                </div>
                                <div className="text-xs text-white/40">
                                    Collaborators
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="text-center">
                                <div className="text-2xl font-bold text-white">
                                    4.8
                                </div>
                                <div className="text-xs text-white/40">
                                    Avg Rating
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </div>
        </HomeLayout>
    );
}
