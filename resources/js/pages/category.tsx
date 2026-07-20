import { usePage } from '@inertiajs/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import HomeLayout from '@/layouts/home-layout';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// eslint-disable-next-line import/order
import { FeaturedCard } from '@/components/card/FeaturedCard';
import {
    PlusOutlined,
    FilterOutlined,
    RightOutlined,
    HeartOutlined,
    TeamOutlined,
    LockOutlined,
    StarOutlined,
    ClockCircleOutlined,
} from '@ant-design/icons';
import {
    Button,

    Input,
    Row,
    Col,
    Badge,
    Typography,
} from 'antd';

const { Title, Text, Paragraph } = Typography;

interface RecordItem {
    title: string;
    description: string;
    image: string;
    kind: string;
    date: string;
}

export default function Category() {
    const { records } = usePage<{ records: RecordItem[] }>().props;

    // Mock collections data
    const collections = [
        'Neon Noir Classics',
        'The Modern Epics',
        'Edge of My Seat',
        'The Silent Heir',
        'Guardian of the Peaks',
        'Aurora Protocol',
        'The Signal',
        'Observer Effect',
        'Velocity 9',
        'The Inheritance',
        'Apex Predators',
        'Documentary',
    ];

    const recentlySaved = [
        'Synapse',
        'The Silent Heir',
        'Guardian of the Peaks',
        'Aurora Protocol',
        'The Signal',
        'Observer Effect',
        'Velocity 9',
        'The Inheritance',
        'Apex Predators',
        'Documentary',
    ];

    // Mock trending categories
    const trendingTopics = [
        { name: 'Action', icon: '⚡', color: '#E50914' },
        { name: 'Sci-Fi', icon: '🚀', color: '#00d4ff' },
        { name: 'Drama', icon: '🎭', color: '#ff6b6b' },
        { name: 'Comedy', icon: '😂', color: '#ffd93d' },
        { name: 'Thriller', icon: '🔪', color: '#6c5ce7' },
        { name: 'Romance', icon: '❤️', color: '#fd79a8' },
    ];

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

                {/* My Collections */}
                <section className="px-4 py-12 md:px-8 lg:px-16">
                    <div className="container mx-auto">
                        <Row gutter={[16, 16]}>
                            {collections
                                .slice(0, 6)
                                .map((collection, index) => (
                                    <Col
                                        xs={24}
                                        sm={12}
                                        md={8}
                                        lg={6}
                                        key={index}
                                    >
                                        <div className="group cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
                                            <div className="flex items-start justify-between">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#E50914]/20 to-purple-600/20 text-xl">
                                                    {
                                                        [
                                                            '🌆',
                                                            '🎬',
                                                            '😱',
                                                            '🌑',
                                                            '🏔️',
                                                            '🌌',
                                                        ][index % 6]
                                                    }
                                                </div>
                                                <Badge
                                                    count={
                                                        Math.floor(
                                                            Math.random() * 20,
                                                        ) + 5
                                                    }
                                                    style={{
                                                        backgroundColor:
                                                            'rgba(255,255,255,0.1)',
                                                        color: '#fff',
                                                    }}
                                                />
                                            </div>
                                            <Title
                                                level={5}
                                                className="!mt-3 !mb-1 !text-sm !text-white"
                                            >
                                                {collection}
                                            </Title>
                                            <div className="flex items-center gap-3 text-xs text-white/40">
                                                <span className="flex items-center gap-1">
                                                    <LockOutlined className="text-[10px]" />
                                                    Private
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <ClockCircleOutlined className="text-[10px]" />
                                                    Updated 2d ago
                                                </span>
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
                                <Title
                                    level={2}
                                    className="!mb-0 !text-3xl !font-bold !text-white"
                                >
                                    Browse Categories
                                </Title>
                            </div>
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
