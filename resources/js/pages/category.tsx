import { usePage } from '@inertiajs/react';
import HomeLayout from '@/layouts/home-layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FeaturedCard } from '@/components/card/FeaturedCard';
import {
    PlusOutlined,
    FilterOutlined,
    RightOutlined,
    HeartOutlined,
    HeartFilled,
    UserOutlined,
    TeamOutlined,
    LockOutlined,
    GlobalOutlined,
    StarOutlined,
    FireOutlined,
    ClockCircleOutlined,
    EyeOutlined,
    ThunderboltOutlined,
    RocketOutlined,
} from '@ant-design/icons';
import {
    Button,
    Tag,
    Input,
    Row,
    Col,
    Card,
    Avatar,
    Badge,
    Space,
    Typography,
    Divider,
} from 'antd';

const { Title, Text, Paragraph } = Typography;
const { Search } = Input;

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
                            <Badge
                                count="BETA"
                                className="!mb-4"
                                style={{ backgroundColor: '#E50914' }}
                            />
                            <Title
                                level={1}
                                className="!mb-2 !text-5xl !font-bold !text-white md:!text-6xl"
                            >
                                Watchlist & Collections
                            </Title>
                            <Paragraph className="!text-lg !text-white/60">
                                Manage your cinematic library and curations.
                            </Paragraph>

                            {/* Action Buttons */}
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Button
                                    type="primary"
                                    icon={<PlusOutlined />}
                                    className="!border-[#E50914] !bg-[#E50914] hover:!bg-[#f6121d]"
                                >
                                    New Collection
                                </Button>
                                <Button
                                    icon={<FilterOutlined />}
                                    className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/20"
                                >
                                    Filter
                                </Button>
                                <Button
                                    icon={<TeamOutlined />}
                                    className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/20"
                                >
                                    Collaborate
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* My Collections */}
                <section className="px-4 py-12 md:px-8 lg:px-16">
                    <div className="container mx-auto">
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <Title
                                    level={2}
                                    className="!mb-1 !text-2xl !font-bold !text-white"
                                >
                                    📚 My Collections
                                </Title>
                                <Text className="text-white/40">
                                    {collections.length} collections
                                </Text>
                            </div>
                            <Button
                                type="link"
                                className="!text-white/60 hover:!text-white"
                                icon={<RightOutlined />}
                                iconPosition="end"
                            >
                                View All
                            </Button>
                        </div>

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

                {/* Recently Saved & AI Pick Row */}
                <section className="px-4 py-8 md:px-8 lg:px-16">
                    <div className="container mx-auto">
                        <Row gutter={[24, 24]}>
                            {/* Recently Saved */}
                            <Col xs={24} lg={16}>
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div>
                                            <Title
                                                level={3}
                                                className="!mb-0 !text-xl !font-bold !text-white"
                                            >
                                                ⏱️ Recently Saved
                                            </Title>
                                            <Text className="text-sm text-white/40">
                                                Last 7 days
                                            </Text>
                                        </div>
                                        <Button
                                            type="link"
                                            className="!text-white/60 hover:!text-white"
                                            icon={<RightOutlined />}
                                            iconPosition="end"
                                        >
                                            View All
                                        </Button>
                                    </div>

                                    <Row gutter={[12, 12]}>
                                        {recentlySaved
                                            .slice(0, 8)
                                            .map((item, index) => (
                                                <Col
                                                    xs={12}
                                                    sm={8}
                                                    md={6}
                                                    key={index}
                                                >
                                                    <div className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                                                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#E50914]/20 to-blue-600/20 text-xs font-bold text-white/60">
                                                            {index + 1}
                                                        </div>
                                                        <span className="flex-1 truncate text-sm text-white/80 group-hover:text-white">
                                                            {item}
                                                        </span>
                                                        <HeartOutlined className="text-white/20 transition-colors group-hover:text-[#E50914]" />
                                                    </div>
                                                </Col>
                                            ))}
                                    </Row>
                                </div>
                            </Col>

                            {/* AI Pick & Curate Section */}
                            <Col xs={24} lg={8}>
                                <div className="space-y-4">
                                    {/* AI Pick Card */}
                                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 backdrop-blur-sm">
                                        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-purple-600/30 blur-2xl" />

                                        <div className="relative">
                                            <div className="mb-2 flex items-center gap-2">
                                                <span className="text-2xl">
                                                    🤖
                                                </span>
                                                <Badge
                                                    count="AI PICK"
                                                    style={{
                                                        backgroundColor:
                                                            '#E50914',
                                                    }}
                                                />
                                            </div>
                                            <Paragraph className="!mb-3 !text-white/80">
                                                Based on your watchlist, we
                                                think you'll love
                                            </Paragraph>
                                            <Title
                                                level={4}
                                                className="!mb-2 !text-white"
                                            >
                                                "Interstellar 2: Echoes"
                                            </Title>
                                            <div className="flex items-center gap-3 text-sm text-white/40">
                                                <span className="flex items-center gap-1">
                                                    <StarOutlined className="text-yellow-400" />
                                                    4.9
                                                </span>
                                                <span>•</span>
                                                <span>Coming 2025</span>
                                            </div>
                                            <div className="mt-4 flex gap-2">
                                                <Button
                                                    type="primary"
                                                    size="small"
                                                    className="!border-[#E50914] !bg-[#E50914]"
                                                >
                                                    Add to list
                                                </Button>
                                                <Button
                                                    size="small"
                                                    className="!border-white/20 !bg-white/10 !text-white"
                                                >
                                                    Learn More
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Curate Section */}
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                                        <div className="flex items-start gap-3">
                                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E50914]/20 to-orange-600/20 text-2xl">
                                                🎨
                                            </div>
                                            <div className="flex-1">
                                                <Title
                                                    level={5}
                                                    className="!mb-1 !text-white"
                                                >
                                                    Curate Your Cinematic World
                                                </Title>
                                                <Paragraph className="!mb-3 !text-sm !text-white/50">
                                                    Share your favorite
                                                    collections with friends or
                                                    keep them private. Cinoplex
                                                    Pro lets you collaborate on
                                                    watchlists for the ultimate
                                                    movie night.
                                                </Paragraph>
                                                <Button className="!border-[#E50914] !text-[#E50914] hover:!bg-[#E50914] hover:!text-white">
                                                    Start Collaborating →
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
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
