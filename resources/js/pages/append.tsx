import { useState } from 'react';
import {
    Flex,
    Button,
    Row,
    Col,
    Typography,
    Tag,
    Badge,
    Divider,
    Space,
    Empty,
    Pagination,
    Select,
    Slider,
    Checkbox,
    Drawer,
} from 'antd';
import HomeLayout from '@/layouts/home-layout';
import {
    FilterOutlined,
    ClockCircleOutlined,
    EyeOutlined,
    StarOutlined,
    HeartOutlined,
    PlayCircleOutlined,
    AppstoreOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons';
import { router, usePage, Link } from '@inertiajs/react';
import { player } from '@/routes';

const { Text } = Typography;
const { Option } = Select;

export default function Appended() {
    const [viewMode, setViewMode] = useState('grid');
    const [searchText, setSearchText] = useState('');
    const [filterDrawer, setFilterDrawer] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('newest');
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [yearRange, setYearRange] = useState<[number, number]>([2020, 2024]);
    const [ratingRange, setRatingRange] = useState<[number, number]>([4, 5]);

    const { list } = usePage<{ list: any }>().props;

    // Mock data for new movies
    const newMovies = [
        {
            id: 1,
            title: 'The Silent Echo',
            year: '2024',
            genre: 'Action',
            rating: '4.6',
            duration: '1h 30m',
            quality: '4K',
            addedDate: 'Today',
            description:
                'A gripping action thriller about a hacker who discovers a dark secret.',
            image: '🎬',
            isNew: true,
            isTrending: true,
            views: '12.4K',
            likes: 234,
        },
        {
            id: 2,
            title: 'Crimson Shields',
            year: '2024',
            genre: 'Sci-Fi',
            rating: '4.8',
            duration: '2h 15m',
            quality: 'HD',
            addedDate: '2 days ago',
            description:
                'In a dystopian future, a group of rebels fight against an oppressive regime.',
            image: '🚀',
            isNew: true,
            isTrending: true,
            views: '8.7K',
            likes: 189,
        },
        {
            id: 3,
            title: 'Obsidian Pulse',
            year: '2024',
            genre: 'Thriller',
            rating: '4.5',
            duration: '1h 45m',
            quality: '4K',
            addedDate: '3 days ago',
            description:
                'A psychological thriller that keeps you on the edge of your seat.',
            image: '🎭',
            isNew: true,
            isTrending: false,
            views: '5.2K',
            likes: 145,
        },
        {
            id: 4,
            title: 'Neon Nights',
            year: '2024',
            genre: 'Cyberpunk',
            rating: '4.7',
            duration: '2h 00m',
            quality: '4K',
            addedDate: '4 days ago',
            description:
                'A visually stunning cyberpunk adventure set in a neon-lit metropolis.',
            image: '🌃',
            isNew: true,
            isTrending: true,
            views: '15.8K',
            likes: 312,
        },
        {
            id: 5,
            title: 'Velvet Shadows',
            year: '2023',
            genre: 'Drama',
            rating: '4.4',
            duration: '1h 55m',
            quality: 'HD',
            addedDate: '5 days ago',
            description: 'An emotional drama about love, loss, and redemption.',
            image: '🎭',
            isNew: false,
            isTrending: false,
            views: '3.1K',
            likes: 78,
        },
        {
            id: 6,
            title: 'Digital Mirage',
            year: '2024',
            genre: 'Sci-Fi',
            rating: '4.9',
            duration: '2h 30m',
            quality: '4K',
            addedDate: '6 days ago',
            description:
                'A mind-bending sci-fi epic that explores the nature of reality.',
            image: '💻',
            isNew: true,
            isTrending: true,
            views: '22.1K',
            likes: 567,
        },
        {
            id: 7,
            title: 'Shadow Protocol',
            year: '2023',
            genre: 'Spy Thriller',
            rating: '4.3',
            duration: '1h 40m',
            quality: 'HD',
            addedDate: '1 week ago',
            description:
                'A spy thriller filled with twists, turns, and international intrigue.',
            image: '🕵️',
            isNew: false,
            isTrending: false,
            views: '4.5K',
            likes: 123,
        },
        {
            id: 8,
            title: 'Abyss Within',
            year: '2023',
            genre: 'Horror',
            rating: '4.2',
            duration: '1h 35m',
            quality: 'HD',
            addedDate: '1 week ago',
            description:
                'A horror film that explores the darkest corners of the human psyche.',
            image: '👻',
            isNew: false,
            isTrending: false,
            views: '2.8K',
            likes: 67,
        },
        {
            id: 9,
            title: 'Cloud Hopper',
            year: '2024',
            genre: 'Adventure',
            rating: '4.6',
            duration: '1h 50m',
            quality: '4K',
            addedDate: '2 days ago',
            description:
                'An epic adventure through the clouds and beyond the imagination.',
            image: '☁️',
            isNew: true,
            isTrending: true,
            views: '9.3K',
            likes: 245,
        },
        {
            id: 10,
            title: 'The Architect',
            year: '2024',
            genre: 'Sci-Fi',
            rating: '4.7',
            duration: '2h 10m',
            quality: '4K',
            addedDate: '3 days ago',
            description:
                "A visionary architect builds a city that may hold the key to humanity's future.",
            image: '🏛️',
            isNew: true,
            isTrending: false,
            views: '6.7K',
            likes: 178,
        },
        {
            id: 11,
            title: 'Eternal Echoes',
            year: '2024',
            genre: 'Romance',
            rating: '4.5',
            duration: '1h 45m',
            quality: 'HD',
            addedDate: '4 days ago',
            description: 'A timeless love story that transcends generations.',
            image: '❤️',
            isNew: true,
            isTrending: false,
            views: '4.2K',
            likes: 156,
        },
        {
            id: 12,
            title: 'Quantum Rift',
            year: '2024',
            genre: 'Sci-Fi',
            rating: '4.8',
            duration: '2h 20m',
            quality: '4K',
            addedDate: '1 day ago',
            description:
                'A breakthrough in quantum physics opens a door to parallel universes.',
            image: '⚛️',
            isNew: true,
            isTrending: true,
            views: '18.5K',
            likes: 432,
        },
    ];

    const genres = [
        'Action',
        'Adventure',
        'Comedy',
        'Cyberpunk',
        'Drama',
        'Horror',
        'Mystery',
        'Romance',
        'Sci-Fi',
        'Spy Thriller',
        'Thriller',
    ];

    // Filter and sort logic
    // const filteredMovies = newMovies
    //     .filter((movie) => {
    //         const matchesSearch = movie.title
    //             .toLowerCase()
    //             .includes(searchText.toLowerCase());
    //         const matchesGenre =
    //             selectedGenres.length === 0 ||
    //             selectedGenres.includes(movie.genre);
    //         return matchesSearch && matchesGenre;
    //     })
    //     .sort((a, b) => {
    //         switch (sortBy) {
    //             case 'newest':
    //                 return (
    //                     new Date(b.addedDate).getTime() -
    //                     new Date(a.addedDate).getTime()
    //                 );
    //             case 'oldest':
    //                 return (
    //                     new Date(a.addedDate).getTime() -
    //                     new Date(b.addedDate).getTime()
    //                 );
    //             case 'rating':
    //                 return parseFloat(b.rating) - parseFloat(a.rating);
    //             case 'views':
    //                 return parseInt(b.views.replace('K', ''));
    //             default:
    //                 return 0;
    //         }
    //     });

    // Pagination
    // const pageSize = 8;
    // const paginatedMovies = filteredMovies.slice(
    //     (currentPage - 1) * pageSize,
    //     currentPage * pageSize,
    // );

    const filteredMovies = [];

    return (
        <HomeLayout title="New Appended Movies">
            {/* Header Section */}
            <section className="bg-gradient-to-b from-black/95 to-black/90 px-4 py-8 md:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-xl">
                        <div className="flex flex-col gap-3">
                            <Flex gap={8} className="flex-wrap">
                                <Select
                                    value={sortBy}
                                    onChange={setSortBy}
                                    className="!w-40"
                                    dropdownClassName="dark-dropdown"
                                >
                                    <Option value="newest">Newest First</Option>
                                    <Option value="oldest">Oldest First</Option>
                                    <Option value="rating">Top Rated</Option>
                                    <Option value="views">Most Views</Option>
                                </Select>
                                <Button
                                    icon={<FilterOutlined />}
                                    className="!border-white/20 !bg-white/10 !text-white"
                                    onClick={() => setFilterDrawer(true)}
                                >
                                    Filters
                                </Button>
                                <Button.Group>
                                    <Button
                                        icon={<AppstoreOutlined />}
                                        className={`${viewMode === 'grid' ? '!bg-[#E50914] !text-white' : '!border-white/20 !bg-white/10 !text-white'}`}
                                        onClick={() => setViewMode('grid')}
                                    />
                                    <Button
                                        icon={<UnorderedListOutlined />}
                                        className={`${viewMode === 'list' ? '!bg-[#E50914] !text-white' : '!border-white/20 !bg-white/10 !text-white'}`}
                                        onClick={() => setViewMode('list')}
                                    />
                                </Button.Group>
                            </Flex>
                        </div>
                    </div>
                </div>
            </section>

            {/* Movies Grid/List */}
            <section className="px-4 py-8 md:px-8 lg:px-16">
                <div className="container mx-auto">
                    {list?.data.length === 0 ? (
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-12 text-center">
                            <Empty
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                description={
                                    <Text className="text-white/60">
                                        Одоогоор кино нэмэгдээгүй байна
                                    </Text>
                                }
                            >
                                <Button
                                    type="primary"
                                    className="!bg-[#E50914] hover:!bg-[#f6121d]"
                                    onClick={() => {
                                        setSearchText('');
                                        setSelectedGenres([]);
                                        setYearRange([2020, 2024]);
                                        setRatingRange([4, 5]);
                                    }}
                                >
                                    Clear Filters
                                </Button>
                            </Empty>
                        </div>
                    ) : viewMode === 'grid' ? (
                        <Row gutter={[16, 16]}>
                            {list?.data.map((movie: any) => (
                                <Col
                                    xs={24}
                                    sm={12}
                                    md={8}
                                    lg={6}
                                    key={movie.id}
                                >
                                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10">
                                        <div className="relative">
                                            <div className="flex h-56 items-center justify-center rounded-t-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                                                <div className="text-8xl opacity-20">
                                                    {movie.image}
                                                </div>
                                                {movie.isNew && (
                                                    <Badge
                                                        count="NEW"
                                                        style={{
                                                            backgroundColor:
                                                                '#00b894',
                                                        }}
                                                        className="absolute top-3 left-3"
                                                    />
                                                )}
                                                {movie.isTrending && (
                                                    <Badge
                                                        count="🔥 TRENDING"
                                                        style={{
                                                            backgroundColor:
                                                                '#E50914',
                                                        }}
                                                        className="absolute top-3 right-3"
                                                    />
                                                )}
                                                <div className="absolute top-3 right-20 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-sm">
                                                    <Flex
                                                        align="center"
                                                        gap={4}
                                                    >
                                                        <StarOutlined className="text-xs text-yellow-400" />
                                                        <Text className="text-xs font-bold text-white">
                                                            {movie.rating}
                                                        </Text>
                                                    </Flex>
                                                </div>

                                                <Link
                                                    href={player({
                                                        id: movie.video_id,
                                                    })}
                                                >
                                                    <Button
                                                        type="primary"
                                                        shape="circle"
                                                        icon={
                                                            <PlayCircleOutlined />
                                                        }
                                                        className="absolute z-10 !h-14 !w-14 !bg-[#E50914] !text-2xl opacity-0 transition-opacity group-hover:opacity-100"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="p-4">
                                                <Flex
                                                    justify="space-between"
                                                    align="start"
                                                >
                                                    <div className="min-w-0 flex-1">
                                                        <Text className="block truncate font-medium text-white">
                                                            {movie.name}
                                                        </Text>
                                                        <Flex
                                                            gap={4}
                                                            className="mt-1 flex-wrap"
                                                        >
                                                            <Tag
                                                                color="red"
                                                                className="rounded-full border-0 text-[10px]"
                                                            >
                                                                {movie.genre}
                                                            </Tag>
                                                        </Flex>
                                                        <div className="mt-2 flex items-center gap-2">
                                                            <ClockCircleOutlined className="text-xs text-white/30" />
                                                            <Text className="text-xs text-white/30">
                                                                {
                                                                    movie.movie_created_date
                                                                }
                                                            </Text>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-end gap-1">
                                                        <Button
                                                            type="text"
                                                            icon={
                                                                <HeartOutlined className="text-white/40 hover:text-red-500" />
                                                            }
                                                            className="!p-0 !text-white/40 hover:!text-red-500"
                                                        />
                                                        <Text className="text-[10px] text-white/30">
                                                            {movie.likes} likes
                                                        </Text>
                                                    </div>
                                                </Flex>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        // 1
                        <div className="space-y-4">
                            {/* {paginatedMovies.map((movie) => (
                                <div
                                    key={movie.id}
                                    className="group rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10"
                                >
                                    <Row gutter={[16, 16]} align="middle">
                                        <Col xs={24} md={2}>
                                            <div className="text-4xl opacity-50">
                                                {movie.image}
                                            </div>
                                        </Col>
                                        <Col xs={24} md={6}>
                                            <div>
                                                <Text className="block font-medium text-white">
                                                    {movie.title}
                                                </Text>
                                                <Text className="text-sm text-white/40">
                                                    {movie.genre} • {movie.year}
                                                </Text>
                                            </div>
                                        </Col>
                                        <Col xs={24} md={4}>
                                            <Flex align="center" gap={8}>
                                                <StarOutlined className="text-yellow-400" />
                                                <Text className="text-white">
                                                    {movie.rating}
                                                </Text>
                                                <Text className="text-xs text-white/40">
                                                    / 5
                                                </Text>
                                            </Flex>
                                        </Col>
                                        <Col xs={24} md={3}>
                                            <Text className="text-sm text-white/60">
                                                {movie.duration}
                                            </Text>
                                        </Col>
                                        <Col xs={24} md={3}>
                                            <Text className="text-sm text-white/60">
                                                {movie.views} views
                                            </Text>
                                        </Col>
                                        <Col xs={24} md={3}>
                                            {movie.isNew && (
                                                <Badge
                                                    count="NEW"
                                                    style={{
                                                        backgroundColor:
                                                            '#00b894',
                                                    }}
                                                />
                                            )}
                                            {movie.isTrending &&
                                                !movie.isNew && (
                                                    <Badge
                                                        count="🔥"
                                                        style={{
                                                            backgroundColor:
                                                                '#E50914',
                                                        }}
                                                    />
                                                )}
                                        </Col>
                                        <Col xs={24} md={3}>
                                            <Button
                                                type="primary"
                                                icon={<PlayCircleOutlined />}
                                                className="!w-full !bg-[#E50914] hover:!bg-[#f6121d]"
                                            >
                                                Watch
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            ))} */}
                            2
                        </div>
                    )}

                    {/* Pagination */}
                    {/* {filteredMovies.length > 0 && (
                        <div className="mt-8 flex justify-center">
                            <Pagination
                                current={currentPage}
                                total={filteredMovies.length}
                                pageSize={pageSize}
                                onChange={setCurrentPage}
                                showSizeChanger={false}
                                className="custom-pagination"
                            />
                        </div>
                    )} */}
                </div>
            </section>

            {/* Filter Drawer */}
            <Drawer
                title={
                    <Flex align="center" gap={8}>
                        <FilterOutlined className="text-[#E50914]" />
                        <Text className="text-white">Filters</Text>
                    </Flex>
                }
                placement="right"
                open={filterDrawer}
                onClose={() => setFilterDrawer(false)}
                className="filter-drawer"
                width={400}
                extra={
                    <Button
                        type="text"
                        className="!text-white/60"
                        onClick={() => {
                            setSelectedGenres([]);
                            setYearRange([2020, 2024]);
                            setRatingRange([4, 5]);
                        }}
                    >
                        Reset All
                    </Button>
                }
            >
                <div className="space-y-6">
                    {/* Genres */}
                    <div>
                        <Text className="mb-3 block font-medium text-white">
                            Genres
                        </Text>
                        <div className="flex flex-wrap gap-2">
                            {genres.map((genre) => (
                                <Tag
                                    key={genre}
                                    className={`cursor-pointer rounded-full px-3 py-1 transition-all ${
                                        selectedGenres.includes(genre)
                                            ? 'border-0 !bg-[#E50914] !text-white'
                                            : 'border-0 !bg-white/10 !text-white/60 hover:!bg-white/20'
                                    }`}
                                    onClick={() => {
                                        setSelectedGenres(
                                            selectedGenres.includes(genre)
                                                ? selectedGenres.filter(
                                                      (g) => g !== genre,
                                                  )
                                                : [...selectedGenres, genre],
                                        );
                                    }}
                                >
                                    {genre}
                                </Tag>
                            ))}
                        </div>
                    </div>

                    <Divider className="!border-white/10" />

                    {/* Year Range */}
                    <div>
                        <Text className="mb-3 block font-medium text-white">
                            Year Range ({yearRange[0]} - {yearRange[1]})
                        </Text>
                        <Slider
                            range
                            min={2000}
                            max={2024}
                            value={yearRange}
                            onChange={(value) =>
                                setYearRange(value as [number, number])
                            }
                            trackStyle={[{ background: '#E50914' }]}
                            railStyle={{ background: 'rgba(255,255,255,0.1)' }}
                        />
                    </div>

                    <Divider className="!border-white/10" />

                    {/* Rating Range */}
                    <div>
                        <Text className="mb-3 block font-medium text-white">
                            Rating Range ({ratingRange[0]} - {ratingRange[1]})
                        </Text>
                        <Slider
                            range
                            min={1}
                            max={5}
                            step={0.1}
                            value={ratingRange}
                            onChange={(value) =>
                                setRatingRange(value as [number, number])
                            }
                            trackStyle={[{ background: '#E50914' }]}
                            railStyle={{ background: 'rgba(255,255,255,0.1)' }}
                        />
                    </div>

                    <Divider className="!border-white/10" />

                    {/* Additional Filters */}
                    <div>
                        <Text className="mb-3 block font-medium text-white">
                            Additional
                        </Text>
                        <Space direction="vertical" className="w-full">
                            <Checkbox className="text-white/80">
                                <Text className="text-white/80">
                                    4K Quality Only
                                </Text>
                            </Checkbox>
                            <Checkbox className="text-white/80">
                                <Text className="text-white/80">Trending</Text>
                            </Checkbox>
                            <Checkbox className="text-white/80">
                                <Text className="text-white/80">
                                    New Releases
                                </Text>
                            </Checkbox>
                        </Space>
                    </div>

                    <Button
                        type="primary"
                        block
                        className="!h-12 !bg-[#E50914] hover:!bg-[#f6121d]"
                        onClick={() => setFilterDrawer(false)}
                    >
                        Apply Filters
                    </Button>
                </div>
            </Drawer>

            <style>{`
                .custom-pagination .ant-pagination-item {
                    background: rgba(255,255,255,0.05) !important;
                    border-color: rgba(255,255,255,0.1) !important;
                }
                .custom-pagination .ant-pagination-item a {
                    color: rgba(255,255,255,0.7) !important;
                }
                .custom-pagination .ant-pagination-item-active {
                    background: #E50914 !important;
                    border-color: #E50914 !important;
                }
                .custom-pagination .ant-pagination-item-active a {
                    color: white !important;
                }
                .custom-pagination .ant-pagination-prev button,
                .custom-pagination .ant-pagination-next button {
                    color: rgba(255,255,255,0.5) !important;
                }
                .custom-pagination .ant-pagination-prev button:hover,
                .custom-pagination .ant-pagination-next button:hover {
                    color: white !important;
                }

                .filter-drawer .ant-drawer-content {
                    background: #1a1a1a !important;
                }
                .filter-drawer .ant-drawer-header {
                    background: #1a1a1a !important;
                    border-bottom: 1px solid rgba(255,255,255,0.1) !important;
                }
                .filter-drawer .ant-drawer-title {
                    color: white !important;
                }
                .filter-drawer .ant-drawer-close {
                    color: white !important;
                }
                .filter-drawer .ant-drawer-body {
                    color: white !important;
                }
                .filter-drawer .ant-slider-mark-text {
                    color: rgba(255,255,255,0.5) !important;
                }
                .filter-drawer .ant-checkbox-inner {
                    background: rgba(255,255,255,0.1) !important;
                    border-color: rgba(255,255,255,0.2) !important;
                }
                .filter-drawer .ant-checkbox-checked .ant-checkbox-inner {
                    background: #E50914 !important;
                    border-color: #E50914 !important;
                }

                .dark-dropdown .ant-select-dropdown {
                    background: #1a1a1a !important;
                    border: 1px solid rgba(255,255,255,0.1) !important;
                }
                .dark-dropdown .ant-select-item {
                    color: rgba(255,255,255,0.8) !important;
                }
                .dark-dropdown .ant-select-item-option-active {
                    background: rgba(229,9,20,0.2) !important;
                }
                .dark-dropdown .ant-select-item-option-selected {
                    background: #E50914 !important;
                    color: white !important;
                }
            `}</style>
        </HomeLayout>
    );
}
