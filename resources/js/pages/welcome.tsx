import { usePage } from '@inertiajs/react';
import { Flex, Button, Image, Row, Col } from 'antd';
import { FeaturedCard } from '@/components/card/FeaturedCard';
import HomeLayout from '@/layouts/home-layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';

export default function Welcome() {
    const { banner, records } = usePage<{
        banner: string;
        records: {
            title: string;
            description: string;
            image: string;
            kind: string;
            date: string;
        }[];
    }>().props;

    return (
        <HomeLayout title="Home">
            <section className="relative h-[calc(100dvh)] overflow-hidden">
                <Image
                    preview={false}
                    src={String(banner)}
                    alt=""
                    className={'object-center'}
                />
                <div className="absolute bottom-[calc(6.5rem)] left-[calc(5rem)]">
                    <p className="text-[5rem] leading-[0.85] font-black">
                        NEON
                    </p>
                    <p className="text-[5rem] leading-[0.85] leading-tight font-black text-[#E50914]">
                        REBELLION
                    </p>
                    <p className="max-w-96">
                        In a world where memories are traded like currency, one
                        rogue hacker discovers a secret that could dismantle the
                        digital empire controlling humanity's past.
                    </p>
                    <Flex gap={8} className="!mt-4">
                        <Button size="large" type="primary" block>
                            Play now
                        </Button>
                        <Button size="large" block>
                            View detail
                        </Button>
                    </Flex>
                </div>
            </section>
            <section className={''}>
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
            </section>
            <section className={'p-8'}>
                <Row gutter={[32, 32]}>
                    <Col span={12}>
                        <div className="relative h-[25rem] overflow-hidden">
                            <Image
                                preview={false}
                                src={records[0].image}
                                alt=""
                                className="!h-full !w-full !object-cover"
                            />
                        </div>
                    </Col>
                    <Col span={12}>
                        <Row>1</Row>
                        <Row>2</Row>
                    </Col>
                </Row>
            </section>
        </HomeLayout>
    );
}
