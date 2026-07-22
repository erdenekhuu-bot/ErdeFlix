import {
    HeartFilled,
    PlayCircleOutlined,
    StarOutlined,
    ClockCircleOutlined,
    EyeOutlined,
    EditOutlined,
    CameraOutlined,
    MailOutlined,
    PhoneOutlined,
    MessageOutlined,
    HomeOutlined,
    ProfileOutlined,
    HistoryOutlined,
    UserOutlined,
    LogoutOutlined,
    MenuOutlined,
    LeftOutlined,
    RightOutlined,
    FireOutlined,
    CrownOutlined,
    TrophyOutlined,
    RocketOutlined,
    GlobalOutlined,
    SettingOutlined,
    WalletOutlined,
    QuestionCircleOutlined,
    EnvironmentOutlined,
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
    Input,
    Progress,
    Tabs,
    Statistic,
    Modal,
    Form,
    Layout,
    Menu,
    Tooltip,
    Drawer,
} from 'antd';
import { useState } from 'react';
import HomeLayout from '@/layouts/home-layout';

const { Title, Text, Paragraph } = Typography;
const { Sider, Content } = Layout;

export default function Profile() {
    const [activeTab, setActiveTab] = useState('favorites');
    const [isEditing, setIsEditing] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [form] = Form.useForm();

    // Mock user data
    const userData = {
        name: 'John Doe',
        username: '@johndoe',
        email: 'john.doe@example.com',
        phone: '+1 234 567 8900',
        location: 'New York, USA',
        joinDate: 'January 2024',
        bio: '🎬 Film enthusiast | 🎮 Gamer | 📺 Binge-watcher',
        avatar: 'https://picsum.photos/200/200?random=1',
        stats: {
            favorites: 89,
            watched: 342,
            reviews: 56,
        },
        badges: ['Premium', 'Early Adopter', 'Top Reviewer'],
    };

    const favoriteMovies = [
        { title: 'The Silent Echo', year: '2023', genre: 'Action', rating: '4.6', duration: '1h 30m', image: '🎬' },
        { title: 'Crimson Shields', year: '2024', genre: 'Action', rating: '4.6', duration: '1h 30m', image: '🎭' },
        { title: 'Obsidian Pulse', year: '2024', genre: 'Thriller', rating: '4.6', duration: '1h 30m', image: '🎥' },
        { title: 'Neon Nights', year: '2024', genre: 'Sci-Fi', rating: '4.6', duration: '1h 30m', image: '🌃' },
        { title: 'Velvet Shadows', year: '2023', genre: 'Drama', rating: '4.5', duration: '1h 45m', image: '🎭' },
        { title: 'Digital Mirage', year: '2024', genre: 'Cyberpunk', rating: '4.7', duration: '2h 00m', image: '💻' },
    ];

    const watchHistory = [
        { title: 'Cosmic Drift', date: 'Today', duration: '1h 45m', progress: 100 },
        { title: 'Noon Horizon', date: 'Yesterday', duration: '2h 15m', progress: 75 },
        { title: 'Dark Matter', date: '2 days ago', duration: '1h 30m', progress: 45 },
        { title: 'Underworld Protocol', date: '3 days ago', duration: '2h 00m', progress: 30 },
    ];

    const sidebarMenuItems = [
        { key: 'home', icon: <HomeOutlined />, label: 'Home', link: '/' },
        { key: 'explore', icon: <GlobalOutlined />, label: 'Explore' },
        { key: 'live', icon: <GlobalOutlined />, label: 'Live', badge: 'LIVE' },
        { key: 'library', icon: <GlobalOutlined />, label: 'Library' },
        { key: 'history', icon: <HistoryOutlined />, label: 'History' },
        {
            key: 'profile',
            icon: <ProfileOutlined />,
            label: 'Profile',
            link: '/profile',
            active: true,
        },
    ];

    const channelMenuItems = [
        { key: 'trending', icon: <FireOutlined />, label: 'Trending' },
        { key: 'top_rated', icon: <StarOutlined />, label: 'Top Rated' },
        { key: 'new_releases', icon: <RocketOutlined />, label: 'New Releases' },
        { key: 'premium', icon: <CrownOutlined />, label: 'Premium' },
        { key: 'awards', icon: <TrophyOutlined />, label: 'Award Winners' },
    ];

    const profileMenuItems = [
        { key: 'account', icon: <UserOutlined />, label: 'Account' },
        { key: 'settings', icon: <SettingOutlined />, label: 'Settings' },
        { key: 'billing', icon: <WalletOutlined />, label: 'Billing' },
        { key: 'help', icon: <QuestionCircleOutlined />, label: 'Help' },
        { key: 'logout', icon: <LogoutOutlined />, label: 'Logout', danger: true },
    ];

    return (
        <HomeLayout title="Profile">
            <Layout className="!bg-transparent">
                {/* Desktop Sidebar */}
                <Sider
                    width={280}
                    collapsible
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    className="!fixed !left-0 !top-16 !z-20 !h-[calc(100vh-64px)] !overflow-y-auto !border-r !border-white/10 !bg-black/95 backdrop-blur-xl"
                    trigger={null}
                    breakpoint="lg"
                    collapsedWidth={80}
                >
                    <div className="flex h-full flex-col">

                        <Divider className="!my-2 !border-white/10" />

                        {/* Channels Section */}
                        {!collapsed && (
                            <div className="px-4 pb-4">
                                <Text className="text-xs font-bold uppercase text-white/40">
                                    Channels
                                </Text>
                                <div className="mt-2 space-y-1">
                                    {channelMenuItems.map((item) => (
                                        <div
                                            key={item.key}
                                            className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-white/60 transition-all hover:bg-white/10 hover:text-white"
                                        >
                                            {item.icon}
                                            <Text className="text-sm">{item.label}</Text>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Collapsed Icons */}
                        {collapsed && (
                            <div className="flex flex-col items-center gap-4 px-2 py-4">
                                {channelMenuItems.slice(0, 4).map((item) => (
                                    <Tooltip key={item.key} title={item.label} placement="right">
                                        <div className="cursor-pointer rounded-lg p-3 text-white/60 transition-all hover:bg-white/10 hover:text-white">
                                            {item.icon}
                                        </div>
                                    </Tooltip>
                                ))}
                            </div>
                        )}

                        {/* Toggle Button */}
                        <div className="border-t border-white/10 p-2">
                            <Button
                                type="text"
                                icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
                                className="!w-full !text-white/40 hover:!text-white"
                                onClick={() => setCollapsed(!collapsed)}
                            >
                                {!collapsed && 'Collapse'}
                            </Button>
                        </div>
                    </div>
                </Sider>

                {/* Mobile Menu Button */}
                <Button
                    type="primary"
                    icon={<MenuOutlined />}
                    className="!fixed !bottom-6 !right-6 !z-50 !h-14 !w-14 !rounded-full !bg-[#E50914] shadow-2xl shadow-red-500/30 lg:!hidden"
                    onClick={() => setMobileMenuOpen(true)}
                />

                {/* Mobile Drawer */}
                <Drawer
                    placement="left"
                    open={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                    className="!bg-black/95"
                    width={300}
                    closable={false}
                    extra={
                        <Button
                            type="text"
                            className="!text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            ✕
                        </Button>
                    }
                >
                    <div className="mt-4">
                        <Flex align="center" gap={12} className="mb-6">
                            <Avatar
                                size={56}
                                src={userData.avatar}
                                className="border-2 border-[#E50914]"
                            />
                            <div>
                                <Text className="block font-bold text-white">
                                    {userData.name}
                                </Text>
                                <Text className="block text-xs text-white/40">
                                    {userData.username}
                                </Text>
                            </div>
                        </Flex>

                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['profile']}
                            className="!border-0 !bg-transparent"
                            items={sidebarMenuItems.map(item => ({
                                key: item.key,
                                icon: item.icon,
                                label: item.link ? (
                                    <a href={'#'}>{item.label}</a>
                                ) : (
                                    item.label
                                ),
                                extra: item.badge ? (
                                    <Badge
                                        count={item.badge}
                                        style={{
                                            backgroundColor: '#E50914',
                                            fontSize: '8px',
                                        }}
                                    />
                                ) : null,
                            }))}
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <Divider className="!border-white/10" />

                        <Text className="text-xs font-bold uppercase text-white/40">
                            Channels
                        </Text>
                        <div className="mt-2 space-y-1">
                            {channelMenuItems.map((item) => (
                                <div
                                    key={item.key}
                                    className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-white/60 transition-all hover:bg-white/10 hover:text-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.icon}
                                    <Text className="text-sm">{item.label}</Text>
                                </div>
                            ))}
                        </div>
                    </div>
                </Drawer>

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
                                                <Button
                                                    type="primary"
                                                    shape="circle"
                                                    icon={<CameraOutlined />}
                                                    className="absolute bottom-0 right-0 border-2 border-black !bg-[#E50914] hover:!bg-[#f6121d]"
                                                    onClick={() => setIsEditing(true)}
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <Title level={3} className="!mb-0 !text-white">
                                                    {userData.name}
                                                </Title>
                                                <Text className="text-white/60">{userData.username}</Text>
                                            </div>
                                            <div className="mt-3 flex flex-wrap justify-center gap-2">
                                                {userData.badges.map((badge, index) => (
                                                    <Badge
                                                        key={index}
                                                        count={badge}
                                                        style={{
                                                            backgroundColor: index === 0 ? '#E50914' : '#2d2d2d',
                                                            color: 'white',
                                                            padding: '2px 12px',
                                                            borderRadius: '20px',
                                                            fontSize: '10px',
                                                        }}
                                                    />
                                                ))}
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
                                                        <Text className="text-white/60">📝 Bio</Text>
                                                        <Paragraph className="!text-white/90 mt-1">
                                                            {userData.bio}
                                                        </Paragraph>
                                                        <div className="mt-2 space-y-1">
                                                            <Flex gap={16} className="text-sm text-white/40">
                                                                <span><MailOutlined className="mr-2" />{userData.email}</span>
                                                                <span><PhoneOutlined className="mr-2" />{userData.phone}</span>
                                                                <span><EnvironmentOutlined className="mr-2" />{userData.location}</span>
                                                            </Flex>
                                                            <Text className="text-sm text-white/30">
                                                                Joined {userData.joinDate}
                                                            </Text>
                                                        </div>
                                                    </div>
                                                    <Flex gap={8}>
                                                        <Button
                                                            type="primary"
                                                            icon={<EditOutlined />}
                                                            className="!bg-[#E50914] hover:!bg-[#f6121d]"
                                                            onClick={() => setIsEditing(true)}
                                                        >
                                                            Edit Profile
                                                        </Button>
                                                    </Flex>
                                                </Flex>
                                            </Col>

                                            <Col xs={24}>
                                                <Divider className="!my-4 !border-white/10" />
                                                <Row gutter={[24, 24]}>
                                                    <Col xs={12} sm={6}>
                                                        <Statistic
                                                            title={<Text className="text-xs text-white/40">Favorites</Text>}
                                                            value={userData.stats.favorites}
                                                            valueStyle={{
                                                                color: 'white',
                                                                fontSize: '24px',
                                                                fontWeight: 'bold',
                                                            }}
                                                            prefix={<StarOutlined className="text-yellow-400" />}
                                                        />
                                                    </Col>
                                                    <Col xs={12} sm={6}>
                                                        <Statistic
                                                            title={<Text className="text-xs text-white/40">Watched</Text>}
                                                            value={userData.stats.watched}
                                                            valueStyle={{
                                                                color: 'white',
                                                                fontSize: '24px',
                                                                fontWeight: 'bold',
                                                            }}
                                                            prefix={<EyeOutlined className="text-cyan-400" />}
                                                        />
                                                    </Col>
                                                    <Col xs={12} sm={6}>
                                                        <Statistic
                                                            title={<Text className="text-xs text-white/40">Reviews</Text>}
                                                            value={userData.stats.reviews}
                                                            valueStyle={{
                                                                color: 'white',
                                                                fontSize: '24px',
                                                                fontWeight: 'bold',
                                                            }}
                                                            prefix={<MessageOutlined className="text-purple-400" />}
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
                                    {
                                        key: 'history',
                                        label: (
                                            <span>
                                                <ClockCircleOutlined className="mr-2 text-cyan-400" />
                                                Watch History
                                            </span>
                                        ),
                                    }
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
                                                        <div className="text-6xl opacity-20">{movie.image}</div>
                                                        <Button
                                                            type="primary"
                                                            shape="circle"
                                                            icon={<PlayCircleOutlined />}
                                                            className="absolute !bg-[#E50914] opacity-0 transition-opacity group-hover:opacity-100"
                                                        />
                                                        <div className="absolute top-3 right-3">
                                                            <Badge
                                                                count="⭐"
                                                                style={{
                                                                    backgroundColor: 'rgba(0,0,0,0.7)',
                                                                    color: 'gold',
                                                                    padding: '2px 8px',
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex-1">
                                                            <Text className="block truncate font-medium text-white">
                                                                {movie.title}
                                                            </Text>
                                                            <Flex gap={8} className="mt-1 flex-wrap">
                                                                <Tag color="gold" className="rounded-full border-0 text-xs">
                                                                    ⭐ {movie.rating}
                                                                </Tag>
                                                                <Tag color="red" className="rounded-full border-0 text-xs">
                                                                    {movie.genre}
                                                                </Tag>
                                                                <Tag color="default" className="rounded-full border-0 text-xs">
                                                                    {movie.year}
                                                                </Tag>
                                                            </Flex>
                                                        </div>
                                                        <Button
                                                            type="text"
                                                            icon={<HeartFilled className="text-[#E50914]" />}
                                                            className="!text-[#E50914]"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            )}

                            {/* Watch History */}
                            {activeTab === 'history' && (
                                <div className="space-y-4">
                                    {watchHistory.map((item, index) => (
                                        <div
                                            key={index}
                                            className="rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10"
                                        >
                                            <Row gutter={[16, 16]} align="middle">
                                                <Col xs={24} md={8}>
                                                    <Flex align="center" gap={12}>
                                                        <div className="text-3xl">🎬</div>
                                                        <div>
                                                            <Text className="block font-medium text-white">
                                                                {item.title}
                                                            </Text>
                                                            <Text className="text-xs text-white/40">
                                                                {item.date}
                                                            </Text>
                                                        </div>
                                                    </Flex>
                                                </Col>
                                                <Col xs={24} md={8}>
                                                    <Flex align="center" gap={8}>
                                                        <ClockCircleOutlined className="text-white/40" />
                                                        <Text className="text-sm text-white/60">
                                                            {item.duration}
                                                        </Text>
                                                        <Progress
                                                            percent={item.progress}
                                                            showInfo={false}
                                                            strokeColor="#E50914"
                                                            trailColor="rgba(255,255,255,0.1)"
                                                            size="small"
                                                            className="flex-1"
                                                        />
                                                        <Text className="text-xs text-white/40">
                                                            {item.progress}%
                                                        </Text>
                                                    </Flex>
                                                </Col>
                                                <Col xs={24} md={8} className="text-right">
                                                    <Button
                                                        type="primary"
                                                        icon={<PlayCircleOutlined />}
                                                        className="!bg-[#E50914] hover:!bg-[#f6121d]"
                                                    >
                                                        Resume Watching
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                </Content>
            </Layout>

            {/* Edit Profile Modal */}
            <Modal
                title="Edit Profile"
                open={isEditing}
                onCancel={() => setIsEditing(false)}
                footer={[
                    <Button key="cancel" onClick={() => setIsEditing(false)}>
                        Cancel
                    </Button>,
                    <Button
                        key="save"
                        type="primary"
                        className="!bg-[#E50914] hover:!bg-[#f6121d]"
                    >
                        Save Changes
                    </Button>,
                ]}
                className="profile-modal"
            >
                <Form form={form} layout="vertical" className="mt-4">
                    <Form.Item
                        label="Display Name"
                        name="name"
                        initialValue={userData.name}
                    >
                        <Input className="!border-white/20 !bg-white/10 !text-white" />
                    </Form.Item>
                    <Form.Item
                        label="Bio"
                        name="bio"
                        initialValue={userData.bio}
                    >
                        <Input.TextArea rows={3} className="!border-white/20 !bg-white/10 !text-white" />
                    </Form.Item>
                    <Form.Item
                        label="Location"
                        name="location"
                        initialValue={userData.location}
                    >
                        <Input className="!border-white/20 !bg-white/10 !text-white" />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        initialValue={userData.email}
                    >
                        <Input className="!border-white/20 !bg-white/10 !text-white" />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        initialValue={userData.phone}
                    >
                        <Input className="!border-white/20 !bg-white/10 !text-white" />
                    </Form.Item>
                </Form>
            </Modal>

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
