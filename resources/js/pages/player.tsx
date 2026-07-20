import {
    PlayCircleOutlined,
    HeartOutlined,
    HeartFilled,
    ShareAltOutlined,
    DownloadOutlined,
    SettingOutlined,
    FullscreenOutlined,
    PauseOutlined,
    ForwardOutlined,
    BackwardOutlined,
    SendOutlined,
    SmileOutlined,
} from '@ant-design/icons';
import {
    Flex,
    Button,
    Image,
    Row,
    Col,
    Typography,
    Tag,
    Badge,
    Avatar,
    Input,
    Progress,

} from 'antd';
import { useState } from 'react';
import HomeLayout from '@/layouts/home-layout';

const { Title, Text } = Typography;

export default function Player() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [progress, setProgress] = useState(45);
    const [comment, setComment] = useState('');

    // Mock data
    const liveStreams = [
        {
            title: 'Cosmic Drift',
            viewers: '12.4K',
            category: 'Sci-Fi',
            duration: '1h 45m remaining',
            next: 'Noon Horizon',
            progress: 65,
        },
        {
            title: 'Noon Pulse: Season 2',
            viewers: '8.2K',
            category: 'Adventure',
            duration: '15 mins in',
            next: 'Dark Matter',
            progress: 30,
        },
        {
            title: 'The Cided Cage',
            viewers: '5.7K',
            category: 'Mystery',
            duration: '42 mins in',
            next: 'Midnight Ball',
            progress: 75,
        },
        {
            title: 'Underworld Protocol',
            viewers: '3.4K',
            category: 'Thriller',
            duration: '20 mins in',
            next: 'Cipher Zero',
            progress: 40,
        },
    ];

    const recentActivity = [
        {
            user: 'FlasFans88',
            action: 'liked the stream',
            time: '2 min ago',
            icon: '❤️',
        },
        {
            user: 'Alex Rivera',
            action: 'sent a Super Star',
            time: '5 min ago',
            icon: '⭐',
        },
        {
            user: 'CyberPunk2024',
            action: 'joined the chat',
            time: '12 min ago',
            icon: '💬',
        },
        {
            user: 'NeonDreamer',
            action: 'shared the stream',
            time: '18 min ago',
            icon: '📤',
        },
        {
            user: 'TechWizard',
            action: 'donated 100 coins',
            time: '25 min ago',
            icon: '💰',
        },
    ];

    const chatMessages = [
        {
            user: 'FlasFans88',
            message: 'This is amazing! 🔥',
            time: '2 min ago',
        },
        {
            user: 'Alex Rivera',
            message: 'Best stream ever!',
            time: '5 min ago',
        },
        { user: 'CyberPunk2024', message: "🎮 Let's go!", time: '12 min ago' },
        {
            user: 'NeonDreamer',
            message: 'I love this movie!',
            time: '18 min ago',
        },
    ];

    const recommendedMovies = [
        {
            title: 'The Silent Echo',
            rating: '4.6',
            duration: '1h 30m',
            genre: 'Action',
        },
        {
            title: 'Crimson Shields',
            rating: '4.6',
            duration: '1h 30m',
            genre: 'Action',
        },
        {
            title: 'Obsidian Pulse',
            rating: '4.6',
            duration: '1h 30m',
            genre: 'Thriller',
        },
        {
            title: 'Neon Nights',
            rating: '4.6',
            duration: '1h 30m',
            genre: 'Sci-Fi',
        },
    ];

    return (
        <HomeLayout title="Player">
            {/* Player Section */}
            <section className="bg-black px-4 py-8 md:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-black">
                        {/* Video Player Area */}
                        <div className="relative flex aspect-video items-center justify-center bg-black/90">
                            <div className="absolute inset-0">
                                <Image
                                    preview={false}
                                    src="https://picsum.photos/1920/1080?random=1"
                                    alt="Movie Background"
                                    className="!h-full !w-full !object-cover"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className="absolute inset-0 bg-black/40" />
                            </div>

                            {/* Player Controls Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Button
                                    type="primary"
                                    shape="circle"
                                    icon={
                                        isPlaying ? (
                                            <PauseOutlined />
                                        ) : (
                                            <PlayCircleOutlined />
                                        )
                                    }
                                    className="!h-20 !w-20 !border-[#E50914] !bg-[#E50914] !text-4xl shadow-2xl transition-all hover:!scale-110"
                                    onClick={() => setIsPlaying(!isPlaying)}
                                />
                            </div>

                            {/* Bottom Controls */}
                            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/95 to-transparent p-6">
                                {/* Progress Bar */}
                                <div className="mb-4">
                                    <Progress
                                        percent={progress}
                                        showInfo={false}
                                        strokeColor="#E50914"
                                        trailColor="rgba(255,255,255,0.2)"
                                        className="!m-0"
                                    />
                                    <Flex
                                        justify="space-between"
                                        className="mt-1"
                                    >
                                        <Text className="text-xs text-white/40">
                                            1:23:45
                                        </Text>
                                        <Text className="text-xs text-white/40">
                                            2:15:00
                                        </Text>
                                    </Flex>
                                </div>

                                {/* Controls */}
                                <Flex justify="space-between" align="center">
                                    <Flex gap={16} align="center">
                                        <Button
                                            type="text"
                                            icon={
                                                isPlaying ? (
                                                    <PauseOutlined />
                                                ) : (
                                                    <PlayCircleOutlined />
                                                )
                                            }
                                            className="!text-2xl !text-white hover:!text-[#E50914]"
                                            onClick={() =>
                                                setIsPlaying(!isPlaying)
                                            }
                                        />
                                        <Button
                                            type="text"
                                            icon={<BackwardOutlined />}
                                            className="!text-lg !text-white hover:!text-[#E50914]"
                                        />
                                        <Button
                                            type="text"
                                            icon={<ForwardOutlined />}
                                            className="!text-lg !text-white hover:!text-[#E50914]"
                                        />
                                        <Button
                                            type="text"
                                            icon={<ForwardOutlined />}
                                            className="!text-lg !text-white hover:!text-[#E50914]"
                                        />
                                        <Text className="text-sm text-white/60">
                                            1:23:45 / 2:15:00
                                        </Text>
                                    </Flex>
                                    <Flex gap={8} align="center">
                                        <Button
                                            type="text"
                                            icon={<SettingOutlined />}
                                            className="!text-white hover:!text-[#E50914]"
                                        />
                                        <Button
                                            type="text"
                                            icon={<FullscreenOutlined />}
                                            className="!text-white hover:!text-[#E50914]"
                                        />
                                    </Flex>
                                </Flex>
                            </div>

                            {/* Top Info */}
                            <div className="absolute top-6 right-6 left-6">
                                <Flex justify="space-between" align="start">
                                    <div>
                                        <Badge
                                            count="LIVE"
                                            style={{
                                                backgroundColor: '#E50914',
                                            }}
                                            className="mb-2"
                                        />
                                        <Title
                                            level={3}
                                            className="!mb-0 !text-white"
                                        >
                                            Cosmic Drift (2024)
                                        </Title>
                                        <Flex gap={8} className="mt-1">
                                            <Tag
                                                color="cyan"
                                                className="rounded-full border-0"
                                            >
                                                Sci-Fi
                                            </Tag>
                                            <Tag
                                                color="purple"
                                                className="rounded-full border-0"
                                            >
                                                Adventure
                                            </Tag>
                                            <Tag
                                                color="gold"
                                                className="rounded-full border-0"
                                            >
                                                ⭐ 4.8
                                            </Tag>
                                        </Flex>
                                    </div>
                                    <Flex gap={8}>
                                        <Button
                                            type="text"
                                            icon={
                                                isLiked ? (
                                                    <HeartFilled className="text-red-500" />
                                                ) : (
                                                    <HeartOutlined />
                                                )
                                            }
                                            className="!text-white hover:!text-red-500"
                                            onClick={() => setIsLiked(!isLiked)}
                                        />
                                        <Button
                                            type="text"
                                            icon={<ShareAltOutlined />}
                                            className="!text-white hover:!text-[#E50914]"
                                        />
                                        <Button
                                            type="text"
                                            icon={<DownloadOutlined />}
                                            className="!text-white hover:!text-[#E50914]"
                                        />
                                    </Flex>
                                </Flex>
                            </div>
                        </div>


                        {/* Live Chat Section */}
                        <div className="border-t border-white/10 bg-white/5 p-6">
                            <Flex
                                justify="space-between"
                                align="center"
                                className="mb-4"
                            >
                                <div>
                                    <Title
                                        level={5}
                                        className="!mb-0 !text-white"
                                    >
                                        💭 Live Chat
                                    </Title>
                                    <Text className="text-xs text-white/40">
                                        1,234 viewers chatting
                                    </Text>
                                </div>
                                <Badge
                                    count="123"
                                    style={{ backgroundColor: '#E50914' }}
                                />
                            </Flex>

                            <div className="custom-scrollbar mb-4 max-h-[120px] space-y-2 overflow-y-auto">
                                {chatMessages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <Avatar
                                            size="small"
                                            className="bg-[#E50914]"
                                        >
                                            {msg.user[0]}
                                        </Avatar>
                                        <div className="flex-1">
                                            <Text className="text-sm text-white">
                                                <Text className="font-medium">
                                                    {msg.user}
                                                </Text>{' '}
                                                <Text className="text-white/70">
                                                    {msg.message}
                                                </Text>
                                            </Text>
                                        </div>
                                        <Text className="text-xs text-white/30">
                                            {msg.time}
                                        </Text>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-2">
                                <Input
                                    placeholder="Type a message..."
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="flex-1 !border-white/20 !bg-white/10 !text-white placeholder:text-white/40"
                                    prefix={
                                        <SmileOutlined className="text-white/40" />
                                    }
                                    onPressEnter={() => {
                                        if (comment.trim()) {
                                            chatMessages.push({
                                                user: 'You',
                                                message: comment,
                                                time: 'Just now',
                                            });
                                            setComment('');
                                        }
                                    }}
                                />
                                <Button
                                    type="primary"
                                    icon={<SendOutlined />}
                                    className="!bg-[#E50914] hover:!bg-[#f6121d]"
                                    onClick={() => {
                                        if (comment.trim()) {
                                            chatMessages.push({
                                                user: 'You',
                                                message: comment,
                                                time: 'Just now',
                                            });
                                            setComment('');
                                        }
                                    }}
                                >
                                    Send
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recommended Section */}
            <section className="bg-gradient-to-b from-black/95 to-black px-4 py-16 md:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="mb-8">
                        <Flex align="center" gap={12}>
                            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-[#E50914] to-orange-500" />
                            <div>
                                <Title
                                    level={2}
                                    className="!mb-0 !text-2xl !font-bold !text-white"
                                >
                                    🎯 Recommended for You
                                </Title>
                                <Text className="text-xs text-white/40">
                                    Based on your recent watchlist
                                </Text>
                            </div>
                        </Flex>
                    </div>

                    <Row gutter={[16, 16]}>
                        {recommendedMovies.map((movie, index) => (
                            <Col xs={24} sm={12} lg={6} key={index}>
                                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-4 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10">
                                    <div className="relative">
                                        <div className="mb-3 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-gray-800 to-gray-900">
                                            <div className="text-6xl opacity-20">
                                                🎬
                                            </div>
                                            <Button
                                                type="primary"
                                                shape="circle"
                                                icon={<PlayCircleOutlined />}
                                                className="absolute !bg-[#E50914] opacity-0 transition-opacity group-hover:opacity-100"
                                            />
                                        </div>
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <Text className="block truncate font-medium text-white">
                                                    {movie.title}
                                                </Text>
                                                <Flex
                                                    gap={8}
                                                    className="mt-1 flex-wrap"
                                                >
                                                    <Tag
                                                        color="gold"
                                                        className="rounded-full border-0 text-xs"
                                                    >
                                                        ⭐ {movie.rating}
                                                    </Tag>
                                                    <Tag
                                                        color="default"
                                                        className="rounded-full border-0 text-xs"
                                                    >
                                                        {movie.duration}
                                                    </Tag>
                                                    <Tag
                                                        color="red"
                                                        className="rounded-full border-0 text-xs"
                                                    >
                                                        {movie.genre}
                                                    </Tag>
                                                </Flex>
                                            </div>
                                            <Button
                                                type="text"
                                                icon={
                                                    <HeartOutlined className="text-white/40 hover:text-red-500" />
                                                }
                                                className="!text-white/40 hover:!text-red-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255,255,255,0.05);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #E50914;
                    border-radius: 4px;
                }
            `}</style>
        </HomeLayout>
    );
}
