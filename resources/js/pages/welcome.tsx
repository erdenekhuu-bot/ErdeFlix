import { usePage } from '@inertiajs/react';
import { Flex, Button, Image, Row, Col } from 'antd';
import { FeaturedCard } from '@/components/card/FeaturedCard';
import HomeLayout from '@/layouts/home-layout';

export default function Welcome() {
    const { banner, feature1 } = usePage().props;

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
            <section className={''}>Down Here</section>
            <section className={'p-8'}>
                <Row gutter={[32, 32]}>
                    <Col span={12}>
                        <FeaturedCard
                            title={'Interstellar Exodus'}
                            description={''}
                            image={String(feature1)}
                            tag={"'Interstellar Exodus"}
                        />
                    </Col>
                    <Col span={12}>2</Col>
                </Row>
            </section>
        </HomeLayout>
    );
}
