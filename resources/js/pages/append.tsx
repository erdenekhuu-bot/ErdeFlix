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
    Empty,
    Pagination,
    Select,
    Slider,
    Drawer,
    Image,
} from 'antd';
import HomeLayout from '@/layouts/home-layout';
import {
    FilterOutlined,
    ClockCircleOutlined,
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

    const { list, genre } = usePage<{ list: any; genre: any }>().props;

    const pageSize = 8;
    const paginatedMovies = list?.data.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize,
    );

    return (
        <HomeLayout title="Шинээр нэмэгдсэн">
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
                                    <Option value="newest">Шинэ</Option>
                                    <Option value="oldest">Хуучин</Option>
                                    <Option value="views">Их үзсэн</Option>
                                </Select>
                                <Button
                                    icon={<FilterOutlined />}
                                    className="!border-white/20 !bg-white/10 !text-white"
                                    onClick={() => setFilterDrawer(true)}
                                >
                                    Шүүх
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
                                    className="flex"
                                >
                                    <div className="group relative flex w-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/10">
                                        <div className="relative">
                                            <div className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-gray-800 to-gray-900">
                                                <div className="absolute inset-0 h-full w-full opacity-70">
                                                    <Image
                                                        src={movie.poster}
                                                        alt={movie.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>

                                                {movie.isNew && (
                                                    <Badge
                                                        count="NEW"
                                                        style={{
                                                            backgroundColor:
                                                                '#00b894',
                                                        }}
                                                        className="absolute top-3 left-3 z-20"
                                                    />
                                                )}
                                                {movie.isTrending && (
                                                    <Badge
                                                        count="🔥 TRENDING"
                                                        style={{
                                                            backgroundColor:
                                                                '#E50914',
                                                        }}
                                                        className="absolute top-3 right-3 z-20"
                                                    />
                                                )}
                                                <div className="absolute top-3 right-20 z-20 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-sm">
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
                                                    className="absolute inset-0 z-10 flex items-center justify-center"
                                                >
                                                    <Button
                                                        type="primary"
                                                        shape="circle"
                                                        icon={
                                                            <PlayCircleOutlined />
                                                        }
                                                        className="!h-18 !w-18 !bg-[#E50914] !text-2xl opacity-0 transition-opacity group-hover:opacity-100"
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
                        <div className="space-y-4">
                            {paginatedMovies.map((movie: any) => (
                                <div
                                    key={movie.id}
                                    className="group rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:border-white/20 hover:bg-white/10"
                                >
                                    <Row gutter={[16, 16]} align="middle">
                                        <Col xs={24} md={2}>
                                            <div className="text-4xl opacity-70">
                                                <Image src={movie.poster} />
                                            </div>
                                        </Col>
                                        <Col xs={24} md={6}>
                                            <div>
                                                <Text className="block font-medium text-white">
                                                    {movie.name}
                                                </Text>
                                                <Text className="text-sm text-white/40">
                                                    {movie.genre} •{' '}
                                                    {movie.movie_created_date}
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
                                                {movie.views} Үзэлт
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
                                            <Link
                                                href={player({
                                                    id: movie.video_id,
                                                })}
                                                className="absolute inset-0 z-10 flex items-center justify-center"
                                            >
                                                <Button
                                                    type="primary"
                                                    size="large"
                                                    icon={
                                                        <PlayCircleOutlined />
                                                    }
                                                    className="!w-full !bg-[#E50914] hover:!bg-[#f6121d]"
                                                >
                                                    Үзэх
                                                </Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {list?.data.length > 0 && (
                        <div className="mt-8 flex justify-center">
                            <Pagination
                                current={list?.current_page}
                                total={list?.total}
                                pageSize={list?.per_page}
                                onChange={(page: number, pageSize: number) => {
                                    router.get(
                                        window.location.pathname,
                                        {
                                            page: page,
                                            per_page: pageSize,
                                        },
                                        {
                                            preserveState: true,
                                            preserveScroll: true,
                                        },
                                    );
                                }}
                                showSizeChanger={false}
                                className="custom-pagination"
                            />
                        </div>
                    )}
                </div>
            </section>

            {/* Filter Drawer */}
            <Drawer
                title={
                    <Flex align="center" gap={8}>
                        <FilterOutlined className="text-[#E50914]" />
                        <Text className="text-white">Шүүлтүүр</Text>
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
                            Ангилал
                        </Text>
                        <div className="flex flex-wrap gap-2">
                            {genre.map(
                                (item: { name: string }, index: number) => (
                                    <Tag
                                        key={index}
                                        className={`cursor-pointer rounded-full px-3 py-1 transition-all ${
                                            selectedGenres.includes(item.name)
                                                ? 'border-0 !bg-[#E50914] !text-white'
                                                : 'border-0 !bg-white/10 !text-white/60 hover:!bg-white/20'
                                        }`}
                                        onClick={() => {
                                            setSelectedGenres(
                                                selectedGenres.includes(
                                                    item.name,
                                                )
                                                    ? selectedGenres.filter(
                                                          (g) =>
                                                              g !== item.name,
                                                      )
                                                    : [
                                                          ...selectedGenres,
                                                          item.name,
                                                      ],
                                            );
                                        }}
                                    >
                                        {item.name}
                                    </Tag>
                                ),
                            )}
                        </div>
                    </div>

                    <Divider className="!border-white/10" />

                    {/* Year Range */}
                    <div>
                        <Text className="mb-3 block font-medium text-white">
                            Кино гарсан жилүүд ({yearRange[0]} - {yearRange[1]})
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
                            Үнэлгээ ({ratingRange[0]} - {ratingRange[1]})
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

                    <Button
                        type="primary"
                        block
                        className="!h-12 !bg-[#E50914] hover:!bg-[#f6121d]"
                        onClick={() => setFilterDrawer(false)}
                    >
                        Шүүх
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
