import {
    HeartFilled,
    PlayCircleOutlined,
    StarOutlined,
    EyeOutlined,
    MailOutlined,
    MessageOutlined,
} from '@ant-design/icons';
import {
    Flex,
    Button,
    Row,
    Col,
    Typography,
    Tag,
    Badge,
    Avatar,
    Divider,
    Tabs,
    Statistic,
    Layout,
} from 'antd';
import { useState } from 'react';
import HomeLayout from '@/layouts/home-layout';
import { router, usePage, Link } from '@inertiajs/react';

const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;

export default function Profile() {
    const [activeTab, setActiveTab] = useState('favorites');
    const { user } = usePage<{ user: any }>().props;
    console.log(user);

    const userData = {
        name: 'John Doe',
        username: '@johndoe',
        email: 'john.doe@example.com',
        avatar: 'https://picsum.photos/200/200?random=1',
        stats: {
            favorites: 89,
            watched: 342,
            reviews: 56,
        },
        joinDate: 'January 2022',
    };

    const favoriteMovies = [
        {
            title: 'The Silent Echo',
            year: '2023',
            genre: 'Action',
            rating: '4.6',
            duration: '1h 30m',
            image: '🎬',
        },
        {
            title: 'Crimson Shields',
            year: '2024',
            genre: 'Action',
            rating: '4.6',
            duration: '1h 30m',
            image: '🎭',
        },
        {
            title: 'Obsidian Pulse',
            year: '2024',
            genre: 'Thriller',
            rating: '4.6',
            duration: '1h 30m',
            image: '🎥',
        },
        {
            title: 'Neon Nights',
            year: '2024',
            genre: 'Sci-Fi',
            rating: '4.6',
            duration: '1h 30m',
            image: '🌃',
        },
        {
            title: 'Velvet Shadows',
            year: '2023',
            genre: 'Drama',
            rating: '4.5',
            duration: '1h 45m',
            image: '🎭',
        },
        {
            title: 'Digital Mirage',
            year: '2024',
            genre: 'Cyberpunk',
            rating: '4.7',
            duration: '2h 00m',
            image: '💻',
        },
    ];

    return (
        <HomeLayout title="Profile">
            <Layout className="!bg-transparent">
                {/* Main Content */}
                <Content className="ml-0 transition-all duration-300 lg:ml-[280px]">
                    {/* Profile Header */}
                    <section className="bg-gradient-to-b from-black/95 to-black/90 px-4 py-16 md:px-8 lg:px-16">
                        <div className="container mx-auto">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                                <Row gutter={[32, 32]} align="middle">
                                    {/* Avatar & Basic Info */}
                                    <Col xs={24} md={8} lg={6}>
                                        <div className="text-center">
                                            <div className="relative inline-block">
                                                <Avatar
                                                    size={120}
                                                    src={userData.avatar}
                                                    className="border-4 border-[#E50914] shadow-2xl shadow-red-500/20"
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <Title
                                                    level={3}
                                                    className="!mb-0 !text-white"
                                                >
                                                    {user.name}
                                                </Title>
                                                <Text className="text-white/60">
                                                    {user.username}
                                                </Text>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Stats */}
                                    <Col xs={24} md={16} lg={18}>
                                        <Row gutter={[16, 16]}>
                                            <Col xs={24}>
                                                <Flex
                                                    justify="space-between"
                                                    align="start"
                                                    className="flex-wrap gap-4"
                                                >
                                                    <div>
                                                        <div className="mt-2 space-y-1">
                                                            <Flex
                                                                gap={16}
                                                                className="text-sm text-white/40"
                                                            >
                                                                <span>
                                                                    <MailOutlined className="mr-2" />
                                                                    {
                                                                        userData.email
                                                                    }
                                                                </span>
                                                            </Flex>
                                                            <Text className="text-sm text-white/30">
                                                                Joined{' '}
                                                                {
                                                                    userData.joinDate
                                                                }
                                                            </Text>
                                                        </div>
                                                    </div>
                                                </Flex>
                                            </Col>

                                            <Col xs={24}>
                                                <Divider className="!my-4 !border-white/10" />
                                                <Row gutter={[24, 24]}>
                                                    <Col xs={12} sm={6}>
                                                        <Statistic
                                                            title={
                                                                <Text className="text-xs text-white/40">
                                                                    Таалагдсан
                                                                </Text>
                                                            }
                                                            value={
                                                                userData.stats
                                                                    .favorites
                                                            }
                                                            valueStyle={{
                                                                color: 'white',
                                                                fontSize:
                                                                    '24px',
                                                                fontWeight:
                                                                    'bold',
                                                            }}
                                                            prefix={
                                                                <StarOutlined className="text-yellow-400" />
                                                            }
                                                        />
                                                    </Col>
                                                    <Col xs={12} sm={6}>
                                                        <Statistic
                                                            title={
                                                                <Text className="text-xs text-white/40">
                                                                    Үзсэн
                                                                </Text>
                                                            }
                                                            value={
                                                                userData.stats
                                                                    .watched
                                                            }
                                                            valueStyle={{
                                                                color: 'white',
                                                                fontSize:
                                                                    '24px',
                                                                fontWeight:
                                                                    'bold',
                                                            }}
                                                            prefix={
                                                                <EyeOutlined className="text-cyan-400" />
                                                            }
                                                        />
                                                    </Col>
                                                    <Col xs={12} sm={6}>
                                                        <Statistic
                                                            title={
                                                                <Text className="text-xs text-white/40">
                                                                    Сэтгэгдлүүд
                                                                </Text>
                                                            }
                                                            value={
                                                                userData.stats
                                                                    .reviews
                                                            }
                                                            valueStyle={{
                                                                color: 'white',
                                                                fontSize:
                                                                    '24px',
                                                                fontWeight:
                                                                    'bold',
                                                            }}
                                                            prefix={
                                                                <MessageOutlined className="text-purple-400" />
                                                            }
                                                        />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </section>

                    {/* Navigation & Content */}
                    <section className="px-4 py-8 md:px-8 lg:px-16">
                        <div className="container mx-auto">
                            {/* Tabs */}
                            <Tabs
                                activeKey={activeTab}
                                onChange={setActiveTab}
                                className="profile-tabs"
                                items={[
                                    {
                                        key: 'favorites',
                                        label: (
                                            <span>
                                                <HeartFilled className="mr-2 text-[#E50914]" />
                                                Favorites
                                            </span>
                                        ),
                                    },
                                ]}
                            />

                            {/* Favorites Grid */}
                            {activeTab === 'favorites' && (
                                <Row gutter={[16, 16]}>
                                    {favoriteMovies.map((movie, index) => (
                                        <Col xs={24} sm={12} lg={6} key={index}>
                                            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-4 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10">
                                                <div className="relative">
                                                    <div className="mb-3 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-gray-800 to-gray-900">
                                                        <div className="text-6xl opacity-20">
                                                            {movie.image}
                                                        </div>
                                                        <Button
                                                            type="primary"
                                                            shape="circle"
                                                            icon={
                                                                <PlayCircleOutlined />
                                                            }
                                                            className="absolute !bg-[#E50914] opacity-0 transition-opacity group-hover:opacity-100"
                                                        />
                                                        <div className="absolute top-3 right-3">
                                                            <Badge
                                                                count="⭐"
                                                                style={{
                                                                    backgroundColor:
                                                                        'rgba(0,0,0,0.7)',
                                                                    color: 'gold',
                                                                    padding:
                                                                        '2px 8px',
                                                                }}
                                                            />
                                                        </div>
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
                                                                    ⭐{' '}
                                                                    {
                                                                        movie.rating
                                                                    }
                                                                </Tag>
                                                                <Tag
                                                                    color="red"
                                                                    className="rounded-full border-0 text-xs"
                                                                >
                                                                    {
                                                                        movie.genre
                                                                    }
                                                                </Tag>
                                                                <Tag
                                                                    color="default"
                                                                    className="rounded-full border-0 text-xs"
                                                                >
                                                                    {movie.year}
                                                                </Tag>
                                                            </Flex>
                                                        </div>
                                                        <Button
                                                            type="text"
                                                            icon={
                                                                <HeartFilled className="text-[#E50914]" />
                                                            }
                                                            className="!text-[#E50914]"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            )}
                        </div>
                    </section>
                </Content>
            </Layout>

            <style>{`
                .profile-tabs .ant-tabs-nav {
                    margin-bottom: 24px;
                }
                .profile-tabs .ant-tabs-tab {
                    color: white !important;
                    padding: 12px 20px !important;
                }
                .profile-tabs .ant-tabs-tab-active .ant-tabs-tab-btn {
                    color: #E50914 !important;
                }
                .profile-tabs .ant-tabs-ink-bar {
                    background: #E50914 !important;
                }
                .profile-tabs .ant-tabs-tab:hover {
                    color: #E50914 !important;
                }

                .profile-modal .ant-modal-content {
                    background: #1a1a1a !important;
                    border: 1px solid rgba(255,255,255,0.1) !important;
                }
                .profile-modal .ant-modal-header {
                    background: #1a1a1a !important;
                    border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                }
                .profile-modal .ant-modal-title {
                    color: white !important;
                }
                .profile-modal .ant-modal-close {
                    color: white !important;
                }
                .profile-modal .ant-form-item-label label {
                    color: rgba(255,255,255,0.7) !important;
                }

                /* Sidebar Styles */
                .ant-layout-sider {
                    background: rgba(0,0,0,0.95) !important;
                    backdrop-filter: blur(20px);
                }
                .ant-layout-sider .ant-menu-item {
                    border-radius: 8px !important;
                    margin: 4px 0 !important;
                    height: 44px !important;
                    line-height: 44px !important;
                    padding: 0 16px !important;
                }
                .ant-layout-sider .ant-menu-item:hover {
                    background: rgba(255,255,255,0.08) !important;
                }
                .ant-layout-sider .ant-menu-item-selected {
                    background: rgba(229,9,20,0.2) !important;
                    color: #E50914 !important;
                }
                .ant-layout-sider .ant-menu-item-selected::after {
                    border-right: 3px solid #E50914 !important;
                }
                .ant-layout-sider .ant-menu-item .anticon {
                    font-size: 18px !important;
                }

                /* Collapsed sidebar */
                .ant-layout-sider-collapsed .ant-menu-item {
                    padding: 0 8px !important;
                    display: flex !important;
                    justify-content: center !important;
                }
                .ant-layout-sider-collapsed .ant-menu-item .ant-menu-title-content {
                    display: none !important;
                }

                /* Drawer styles */
                .ant-drawer-content {
                    background: rgba(0,0,0,0.95) !important;
                    backdrop-filter: blur(20px);
                }
                .ant-drawer-body {
                    padding: 16px !important;
                }
            `}</style>
        </HomeLayout>
    );
}
