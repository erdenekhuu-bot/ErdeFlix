import { usePage } from '@inertiajs/react';
import {
    Flex,
    Button,
    Image,
    Row,
    Col,
    Typography,
    Divider,
    Space,
    Tag,
    Badge,
    Avatar,
    Progress,
    Carousel,
} from 'antd';
import { FeaturedCard } from '@/components/card/FeaturedCard';
import HomeLayout from '@/layouts/home-layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {
    ClockCircleOutlined,
    EyeOutlined,
    PlayCircleOutlined,
    StarOutlined,
    FireOutlined,
    RightOutlined,
    CalendarOutlined,
    TagOutlined,
    ThunderboltOutlined,
    RocketOutlined,
    GlobalOutlined,
    HeartOutlined,
    HeartFilled,
    ShareAltOutlined,
    DownloadOutlined,
    SoundOutlined,
    CustomerServiceOutlined,
    TrophyOutlined,
    CrownOutlined,
    VideoCameraOutlined,
    MenuOutlined,
    CheckCircleOutlined,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

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

    // Mock trending categories
    const trendingTopics = [
        { name: 'Action', icon: '⚡', color: '#E50914' },
        { name: 'Sci-Fi', icon: '🚀', color: '#00d4ff' },
        { name: 'Drama', icon: '🎭', color: '#ff6b6b' },
        { name: 'Comedy', icon: '😂', color: '#ffd93d' },
        { name: 'Thriller', icon: '🔪', color: '#6c5ce7' },
        { name: 'Romance', icon: '❤️', color: '#fd79a8' },
    ];

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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

                    {/* Animated Gradient Orbs */}
                    <div className="absolute -top-40 -right-40 h-[600px] w-[600px] animate-pulse rounded-full bg-purple-600/20 blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] animate-pulse rounded-full bg-blue-600/20 blur-3xl delay-1000" />
                    <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#E50914]/10 blur-3xl delay-500" />

                    {/* Scan Lines */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(255,255,255,0.02)_3px,rgba(255,255,255,0.02)_6px)]" />
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="animate-float absolute h-1 w-1 rounded-full bg-white/20"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${3 + Math.random() * 4}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 md:px-8 lg:px-16">
                        <div className="max-w-4xl">
                            {/* Animated Badge */}
                            <div className="animate-fade-in-up mb-6 inline-block">
                                <Badge
                                    count="LIVE"
                                    style={{ backgroundColor: '#E50914' }}
                                    className="mr-2"
                                />
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold tracking-wider text-white/80 uppercase backdrop-blur-md">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                                    </span>
                                    Now Streaming • 4K HDR
                                </span>
                            </div>

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
                                    <div className="mt-3 flex items-center gap-4 text-sm text-white/40">
                                        <span className="flex items-center gap-1">
                                            <TrophyOutlined className="text-yellow-400" />
                                            #1 Trending
                                        </span>
                                        <span>•</span>
                                        <span>⭐ 4.8/5</span>
                                        <span>•</span>
                                        <span>🎬 2024</span>
                                    </div>
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
                                <Button
                                    size="large"
                                    shape="circle"
                                    className="!h-14 !w-14 !border-white/20 !bg-white/10 !text-white backdrop-blur-sm transition-all duration-300 hover:!scale-105 hover:!bg-white/20"
                                    icon={<ShareAltOutlined />}
                                />
                            </Flex>

                            {/* Enhanced Stats */}
                            <div className="animate-fade-in-up animation-delay-800 mt-10 flex flex-wrap items-center gap-8 text-white/60">
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        <Avatar
                                            size="small"
                                            className="border-2 border-black"
                                        >
                                            A
                                        </Avatar>
                                        <Avatar
                                            size="small"
                                            className="border-2 border-black"
                                        >
                                            B
                                        </Avatar>
                                        <Avatar
                                            size="small"
                                            className="border-2 border-black"
                                        >
                                            C
                                        </Avatar>
                                        <Avatar
                                            size="small"
                                            className="border-2 border-black"
                                        >
                                            D
                                        </Avatar>
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-white">
                                            12.4K
                                        </span>
                                        <span className="ml-1 text-xs text-white/40">
                                            watching
                                        </span>
                                    </div>
                                </div>
                                <div className="h-6 w-px bg-white/20" />
                                <div className="flex items-center gap-2">
                                    <StarOutlined className="text-yellow-400" />
                                    <span className="text-sm font-medium text-white">
                                        4.8
                                    </span>
                                    <span className="text-xs text-white/40">
                                        (2.3K reviews)
                                    </span>
                                </div>
                                <div className="h-6 w-px bg-white/20" />
                                <div className="flex items-center gap-2">
                                    <ClockCircleOutlined />
                                    <span className="text-sm font-medium text-white">
                                        2h 15m
                                    </span>
                                </div>
                                <div className="h-6 w-px bg-white/20" />
                                <div className="flex items-center gap-2">
                                    <EyeOutlined />
                                    <span className="text-sm font-medium text-white">
                                        1.2M
                                    </span>
                                    <span className="text-xs text-white/40">
                                        views
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="flex flex-col items-center gap-2 text-white/30">
                        <span className="text-[10px] tracking-widest uppercase">
                            Scroll to explore
                        </span>
                        <div className="h-12 w-6 rounded-full border-2 border-white/20 p-1">
                            <div className="animate-scroll h-3 w-3 rounded-full bg-gradient-to-b from-[#E50914] to-white/30" />
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
                                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-[#E50914] to-purple-500" />
                                <Title
                                    level={2}
                                    className="!mb-0 !text-3xl !font-bold !text-white"
                                >
                                    🔥 Trending Now
                                </Title>
                            </div>
                            <Text className="mt-1 block text-white/40">
                                Most popular content this week
                            </Text>
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
                                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-blue-500 to-cyan-500" />
                                <Title
                                    level={2}
                                    className="!mb-0 !text-3xl !font-bold !text-white"
                                >
                                    🎬 Featured Content
                                </Title>
                            </div>
                            <Text className="mt-1 block text-white/40">
                                Handpicked just for you
                            </Text>
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
                                            style={{
                                                backgroundColor:
                                                    'rgba(229,9,20,0.9)',
                                                padding: '4px 12px',
                                            }}
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

                                        <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
                                            <span className="flex items-center gap-2">
                                                <CalendarOutlined />
                                                {new Date(
                                                    mainFeature.date,
                                                ).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                })}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <EyeOutlined />
                                                1.2M views
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <StarOutlined className="text-yellow-400" />
                                                4.8
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <ClockCircleOutlined />
                                                2h 15m
                                            </span>
                                        </div>

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
                                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-yellow-400 to-orange-500" />
                                <Title
                                    level={2}
                                    className="!mb-0 !text-3xl !font-bold !text-white"
                                >
                                    ⭐ Top Rated
                                </Title>
                            </div>
                            <Text className="mt-1 block text-white/40">
                                Highest rated content
                            </Text>
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

            {/* Categories with Glassmorphism */}
            <section className="px-4 py-16 md:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="mb-10">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-purple-500 to-pink-500" />
                            <Title
                                level={2}
                                className="!mb-0 !text-3xl !font-bold !text-white"
                            >
                                📺 Browse Categories
                            </Title>
                        </div>
                        <Text className="mt-1 block text-white/40">
                            Explore by genre and discover your next favorite
                        </Text>
                    </div>

                    <Row gutter={[16, 16]}>
                        {trendingTopics.map((category, index) => (
                            <Col xs={12} sm={8} md={6} lg={4} key={index}>
                                <div
                                    className="group cursor-pointer rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                                        border: `1px solid ${category.color}30`,
                                    }}
                                >
                                    <div className="mb-3 text-4xl transition-transform duration-300 group-hover:scale-110">
                                        {category.icon}
                                    </div>
                                    <Text className="text-base font-semibold text-white/80 group-hover:text-white">
                                        {category.name}
                                    </Text>
                                    <div className="mt-2 text-xs text-white/30">
                                        {Math.floor(Math.random() * 100 + 50)}{' '}
                                        titles
                                    </div>
                                    <div className="mt-3 h-0.5 w-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 group-hover:w-full" />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>

            {/* Newsletter / CTA Section */}
            <section className="relative overflow-hidden px-4 py-16 md:px-8 lg:px-16">
                <div className="absolute inset-0">
                    <div className="absolute -top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#E50914]/20 blur-3xl" />
                    <div className="absolute -bottom-20 left-1/4 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
                    <div className="absolute right-1/4 -bottom-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
                </div>

                <div className="relative container mx-auto">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
                        <div className="mx-auto max-w-2xl">
                            <div className="mb-4 text-5xl">🎬</div>
                            <Title
                                level={2}
                                className="!mb-2 !text-3xl !font-bold !text-white"
                            >
                                Never Miss a Release
                            </Title>
                            <Paragraph className="!text-white/60">
                                Get notified about new releases, exclusive
                                content, and personalized recommendations.
                            </Paragraph>
                            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white placeholder-white/40 backdrop-blur-sm focus:border-[#E50914] focus:ring-2 focus:ring-[#E50914]/50 focus:outline-none sm:max-w-xs"
                                />
                                <Button
                                    type="primary"
                                    size="large"
                                    className="!h-12 !border-[#E50914] !bg-[#E50914] !px-8 !text-white hover:!bg-[#f6121d]"
                                >
                                    Subscribe Now
                                </Button>
                            </div>
                            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-white/30">
                                <span className="flex items-center gap-1">
                                    <CheckCircleOutlined />
                                    No spam
                                </span>
                                <span>•</span>
                                <span>Unsubscribe anytime</span>
                                <span>•</span>
                                <span>Privacy protected</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HomeLayout>
    );
}
