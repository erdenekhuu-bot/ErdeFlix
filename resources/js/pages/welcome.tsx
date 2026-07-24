import { usePage } from '@inertiajs/react';
import { Flex, Button, Image, Row, Col, Typography, Tag, Badge } from 'antd';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FeaturedCard } from '@/components/card/FeaturedCard';
import HomeLayout from '@/layouts/home-layout';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { PlayCircleOutlined, StarOutlined, RightOutlined, HeartOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

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

    const featuredItems = records.slice(0, 4);
    const mainFeature = records[0];

    const topRated = records.slice(0, 6);

    return (
        <HomeLayout title="Home">
            {/* Hero Section - Enhanced */}
            <section className="relative h-[calc(100dvh)] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        preview={false}
                        src={String(banner)}
                        alt="Hero Background"
                        className="h-full w-full object-cover"
                        style={{ objectFit: 'cover' }}
                    />
                    {/* Enhanced Gradients */}

                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent" />


                    {/* Animated Gradient Orbs */}
                    <div className="absolute -top-40 -right-40 h-[600px] w-[600px] animate-pulse rounded-full bg-purple-600/20 blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] animate-pulse rounded-full bg-blue-600/20 blur-3xl delay-1000" />
                    <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#E50914]/10 blur-3xl delay-500" />

                    {/* Scan Lines */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,0.02)_3px,rgba(255,255,255,0.02)_6px)]" />
                    </div>


                </div>

                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 md:px-8 lg:px-16">
                        <div className="max-w-4xl">

                            {/* Main Title with Glitch Effect */}
                            <div className="animate-fade-in-up animation-delay-200 space-y-2">
                                <div className="relative">
                                    <h1 className="text-[6rem] leading-[0.8] font-black text-white drop-shadow-2xl md:text-[8rem] lg:text-[10rem]">
                                        NEON
                                    </h1>
                                    <div className="absolute top-0 left-0 text-[6rem] leading-[0.8] font-black text-transparent opacity-20 md:text-[8rem] lg:text-[10rem]">
                                        NEON
                                    </div>
                                </div>
                                <h1 className="relative text-[6rem] leading-[0.8] font-black text-[#E50914] drop-shadow-[0_0_30px_rgba(229,9,20,0.5)] md:text-[8rem] lg:text-[10rem]">
                                    REBELLION
                                    <span className="absolute -top-2 -right-4 text-xs font-normal text-white/40">
                                        4K
                                    </span>
                                </h1>
                            </div>

                            {/* Description with Glass Effect */}
                            <div className="animate-fade-in-up animation-delay-400 mt-6 max-w-2xl">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                                    <p className="text-base leading-relaxed text-white/90 md:text-lg">
                                        In a world where memories are traded
                                        like currency, one rogue hacker
                                        discovers a secret that could dismantle
                                        the digital empire controlling
                                        humanity's past.
                                    </p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <Flex
                                gap={12}
                                className="animate-fade-in-up animation-delay-600 !mt-8"
                            >
                                <Button
                                    size="large"
                                    type="primary"
                                    className="!h-14 !border-[#E50914] !bg-[#E50914] !px-10 !font-bold !text-white shadow-[0_0_30px_rgba(229,9,20,0.3)] transition-all duration-300 hover:!scale-105 hover:!bg-[#f6121d] hover:shadow-[0_0_50px_rgba(229,9,20,0.5)]"
                                    icon={<PlayCircleOutlined />}
                                >
                                    Watch Now
                                </Button>
                                <Button
                                    size="large"
                                    className="!h-14 !border-white/20 !bg-white/10 !px-10 !text-white backdrop-blur-sm transition-all duration-300 hover:!scale-105 hover:!bg-white/20"
                                    icon={<HeartOutlined />}
                                >
                                    Add to List
                                </Button>
                            </Flex>

                        </div>
                    </div>
                </div>

            </section>

            {/* Trending Now with 3D Effect */}
            <section className="relative bg-gradient-to-b from-black/90 via-black/50 to-black px-4 py-16 md:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-3">
                                <Title
                                    level={2}
                                    className="!mb-0 !text-3xl !font-bold !text-white"
                                >
                                    Trending Now
                                </Title>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button
                                type="link"
                                className="!text-white/70 hover:!text-white"
                                icon={<RightOutlined />}
                                iconPosition="end"
                            >
                                View All
                            </Button>
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
                                    <div className="transform transition-all duration-300 hover:z-10 hover:scale-105">
                                        <FeaturedCard
                                            image={item.image}
                                            title={item.title}
                                            description={item.description}
                                            kind={item.kind}
                                            date={item.date}
                                            isNew={index === 0}
                                            isTrending={index < 2}
                                            rating={4.5 + index * 0.1}
                                            views={`${Math.floor(Math.random() * 50 + 10)}K`}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </section>

            {/* Featured Content Grid with Animation */}
            <section className="px-4 py-16 md:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-3">
                                <Title
                                    level={2}
                                    className="!mb-0 !text-3xl !font-bold !text-white"
                                >Featured Content
                                </Title>
                            </div>
                        </div>
                        <Button
                            type="link"
                            className="!text-white/70 hover:!text-white"
                            icon={<RightOutlined />}
                            iconPosition="end"
                        >
                            See All
                        </Button>
                    </div>

                    <Row gutter={[24, 24]}>
                        {/* Main Feature */}
                        <Col xs={24} lg={12}>
                            {mainFeature && (
                                <div className="group relative h-[550px] overflow-hidden rounded-2xl">
                                    <Image
                                        preview={false}
                                        src={mainFeature.image}
                                        alt={mainFeature.title}
                                        className="!h-full !w-full !object-cover transition-transform duration-700 group-hover:scale-110"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

                                    {/* Featured Badge */}
                                    <div className="absolute top-6 left-6">
                                        <Badge
                                            count="⭐ FEATURED"
                                            style={{ backgroundColor: 'rgba(229,9,20,0.9)' }}
                                        />
                                    </div>

                                    <div className="absolute right-0 bottom-0 left-0 p-8">
                                        <div className="mb-3 flex items-center gap-2">
                                            <Tag
                                                color="cyan"
                                                className="rounded-full border-0 px-3 py-1 text-xs font-bold uppercase"
                                            >
                                                {mainFeature.kind}
                                            </Tag>
                                            <Tag
                                                color="gold"
                                                className="rounded-full border-0 px-3 py-1 text-xs font-bold uppercase"
                                            >
                                                🏆 Top Pick
                                            </Tag>
                                        </div>

                                        <Title
                                            level={2}
                                            className="!mb-2 !text-4xl !font-bold !text-white"
                                        >
                                            {mainFeature.title}
                                        </Title>

                                        <Paragraph className="!mb-4 max-w-lg !text-base !text-white/70">
                                            {mainFeature.description}
                                        </Paragraph>

                                        <Flex gap={8} className="!mt-6">
                                            <Button
                                                type="primary"
                                                icon={<PlayCircleOutlined />}
                                                className="!h-12 !border-[#E50914] !bg-[#E50914] !px-8 hover:!bg-[#f6121d]"
                                            >
                                                Watch Now
                                            </Button>
                                            <Button className="!h-12 !border-white/20 !bg-white/10 !px-8 !text-white backdrop-blur-sm hover:!bg-white/20">
                                                + Add to List
                                            </Button>
                                        </Flex>
                                    </div>
                                </div>
                            )}
                        </Col>

                        {/* Right Column */}
                        <Col xs={24} lg={12}>
                            <Row gutter={[16, 16]}>
                                {featuredItems
                                    .slice(1, 5)
                                    .map((item, index) => (
                                        <Col xs={24} sm={12} key={index}>
                                            <div className="group relative h-[260px] overflow-hidden rounded-2xl">
                                                <Image
                                                    preview={false}
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="!h-full !w-full !object-cover transition-transform duration-700 group-hover:scale-110"
                                                    style={{
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

                                                {/* Hover Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    <Button
                                                        type="primary"
                                                        shape="circle"
                                                        icon={
                                                            <PlayCircleOutlined />
                                                        }
                                                        className="!h-16 !w-16 !border-[#E50914] !bg-[#E50914] !text-3xl transition-transform hover:!scale-110"
                                                    />
                                                </div>

                                                <div className="absolute right-0 bottom-0 left-0 p-4">
                                                    <div className="mb-1 flex items-center gap-2">
                                                        <Tag
                                                            color={
                                                                item.kind ===
                                                                'Movie'
                                                                    ? 'cyan'
                                                                    : 'purple'
                                                            }
                                                            className="rounded-full border-0 px-2 py-0 text-[10px] font-bold uppercase"
                                                        >
                                                            {item.kind}
                                                        </Tag>
                                                        {index === 0 && (
                                                            <Tag
                                                                color="green"
                                                                className="rounded-full border-0 px-2 py-0 text-[10px] font-bold uppercase"
                                                            >
                                                                NEW
                                                            </Tag>
                                                        )}
                                                        {index === 1 && (
                                                            <Tag
                                                                color="orange"
                                                                className="rounded-full border-0 px-2 py-0 text-[10px] font-bold uppercase"
                                                            >
                                                                🔥 HOT
                                                            </Tag>
                                                        )}
                                                    </div>
                                                    <Title
                                                        level={5}
                                                        className="!mb-0 !text-base !font-bold !text-white"
                                                    >
                                                        {item.title}
                                                    </Title>
                                                    <div className="flex items-center gap-3 text-xs text-white/50">
                                                        <span>
                                                            {new Date(
                                                                item.date,
                                                            ).toLocaleDateString(
                                                                'en-US',
                                                                {
                                                                    month: 'short',
                                                                    day: 'numeric',
                                                                },
                                                            )}
                                                        </span>
                                                        <span>•</span>
                                                        <span className="flex items-center gap-1">
                                                            <StarOutlined className="text-[10px] text-yellow-400" />
                                                            4.8
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </section>

            {/* Top Rated Section */}
            <section className="relative bg-gradient-to-b from-black via-black/80 to-black px-4 py-16 md:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-3">
                                <Title
                                    level={2}
                                    className="!mb-0 !text-3xl !font-bold !text-white"
                                >Top Rated
                                </Title>
                            </div>
                        </div>
                        <Button
                            type="link"
                            className="!text-white/70 hover:!text-white"
                            icon={<RightOutlined />}
                            iconPosition="end"
                        >
                            View All
                        </Button>
                    </div>

                    <Row gutter={[16, 16]}>
                        {topRated.map((item, index) => (
                            <Col xs={12} sm={8} md={6} lg={4} key={index}>
                                <div className="group relative overflow-hidden rounded-2xl">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            preview={false}
                                            src={item.image}
                                            alt={item.title}
                                            className="!h-full !w-full !object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                        {/* Rank Badge */}
                                        <div className="absolute top-2 left-2">
                                            <Badge
                                                count={`#${index + 1}`}
                                                style={{
                                                    backgroundColor:
                                                        'rgba(0,0,0,0.7)',
                                                    padding: '2px 8px',
                                                }}
                                            />
                                        </div>

                                        {/* Rating */}
                                        <div className="absolute top-2 right-2 rounded-full bg-black/60 px-2 py-1 backdrop-blur-sm">
                                            <span className="flex items-center gap-1 text-xs font-bold text-yellow-400">
                                                <StarOutlined />
                                                {4.8 - index * 0.1}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-3">
                                        <Title
                                            level={5}
                                            className="!mb-0 truncate !text-sm !font-bold !text-white"
                                        >
                                            {item.title}
                                        </Title>
                                        <div className="mt-1 flex items-center justify-between">
                                            <Tag
                                                color={
                                                    item.kind === 'Movie'
                                                        ? 'cyan'
                                                        : 'purple'
                                                }
                                                className="rounded-full border-0 px-2 py-0 text-[8px] font-bold uppercase"
                                            >
                                                {item.kind}
                                            </Tag>
                                            <span className="text-xs text-white/40">
                                                {new Date(
                                                    item.date,
                                                ).getFullYear()}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>


        </HomeLayout>
    );
}
