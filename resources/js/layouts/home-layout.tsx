import { Head, Link, usePage, router } from '@inertiajs/react';
import {
    Layout,
    Flex,
    Menu,
    Typography,
    ConfigProvider,
    theme,
    Button,
    Row,
    Col,
    AutoComplete,
} from 'antd';
import {
    dashboard,
    login,
    register,
    list,
    home,
    append,
    movies,
    player,
} from '@/routes';
import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const darkTheme = {
    background: '#121212',
    surface: '#1E1E1E',
    surfaceLight: '#2D2D2D',
    border: '#404040',
    text: '#FFFFFF',
    modalBackground: '#222222',
};
export default function HomeLayout({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) {
    const { auth, url } = usePage().props;
    // const [options, setOptions] = useState<AutoCompleteProps['options']>([]);
    const [searchText, setSearchText] = useState('');

    const getActiveKey = () => {
        const path = String(url).split('?')[0];

        switch (path) {
            case '/':
                return '1';
            case '/list':
                return '2';
            case '/append':
                return '3';
            default:
                return '';
        }
    };

    const { data: movies = [], isLoading } = useQuery({
        queryKey: ['searchMovies', searchText],
        queryFn: async () => {
            const response = await axios.get('/api/filtermovies', {
                params: {
                    search: searchText,
                },
            });
            return response.data.movies;
        },
        enabled: searchText.trim().length > 0,
    });

    const options = movies.map((movie: any) => ({
        value: movie.name,
        label: movie.name,
        movieId: movie.id,
    }));

    const handleLogout = () => {
        router.post(
            '/logout',
            {},
            {
                preserveState: false,
                preserveScroll: false,
                onSuccess: () => {},
            },
        );
    };

    const onSelect = (
        value: string,
        option: {
            value: string;
            label: string;
            movieId: number;
            videoId: string;
        },
    ) => {
        setSearchText(value);

        console.log('Movie name:', value);
        console.log('Movie ID:', option.movieId);
        console.log('Video ID:', option.videoId);
        router.get(player(option.videoId));
    };

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorBgLayout: darkTheme.background,
                    colorBgContainer: darkTheme.surface,
                    colorBgElevated: darkTheme.surfaceLight,
                    colorBorder: darkTheme.border,
                    colorText: darkTheme.text,
                    colorPrimary: '#E50914', // Changed to Netflix red to unify branding!
                    borderRadius: 8,
                    wireframe: false,
                },
                components: {
                    Layout: {
                        bodyBg: darkTheme.background,
                        headerBg: darkTheme.background,
                        siderBg: darkTheme.background,
                    },
                    Menu: {
                        darkItemBg: darkTheme.background,
                        darkItemSelectedBg: darkTheme.surfaceLight,
                        darkItemHoverBg: '#2A2A2A',
                    },
                    Input: {
                        // Ensures input handles match the theme surface color
                        colorBgContainer: darkTheme.surface,
                    },
                    Button: {
                        // Unified button behavior matching the dark theme surface
                        paddingInline: 20, // Clean horizontal padding like inputs
                        fontWeight: 500,

                        // Styling specifically for default/secondary buttons if used
                        colorBgContainer: darkTheme.surface,
                        colorBorder: darkTheme.border,
                    },
                },
            }}
        >
            <Layout className="scrollbar min-h-screen">
                <Head title={title} />
                <Layout.Header className={'!fixed !z-20 !w-full'}>
                    <Flex className="!w-full" align="center" gap={24}>
                        <Typography.Title className="!mb-0 !tracking-wider whitespace-nowrap !text-[#E50914]">
                            ERDEFLIX
                        </Typography.Title>
                        <Menu
                            theme={'dark'}
                            selectedKeys={[getActiveKey()]}
                            mode="horizontal"
                            items={[
                                {
                                    key: '1',
                                    label: <Link href={home()}>Нүүр</Link>,
                                },
                                {
                                    key: '2',
                                    label: <Link href={list()}>Жагсаалт</Link>,
                                },
                                {
                                    key: '3',
                                    label: (
                                        <Link href={append()}>
                                            Шинээр нэмэгдсэн
                                        </Link>
                                    ),
                                },
                            ]}

                            className="flex-1 !border-b-0 !bg-transparent"
                        />
                        <AutoComplete
                            loadingIcon={
                                isLoading ? <span>Loading...</span> : null
                            }
                            value={searchText}
                            options={options}
                            className="!w-92"
                            onSelect={onSelect}
                            onSearch={setSearchText}
                            suffix={<SearchOutlined />}
                        />

                        <Flex gap={12} align="center">
                            {auth.user ? (
                                <Flex align={'center'} gap={8}>
                                    <Link href={dashboard()}>
                                        <Button type="primary">
                                            Dashboard
                                        </Button>
                                    </Link>
                                    <Button
                                        className="!text-white hover:!bg-white/10"
                                        onClick={handleLogout}
                                    >
                                        Гарах
                                    </Button>
                                </Flex>
                            ) : (
                                <>
                                    <Link href={login()}>
                                        <Button
                                            type="text"
                                            className="!text-white hover:!bg-white/10"
                                        >
                                            Log in
                                        </Button>
                                    </Link>
                                    <Link href={register()}>
                                        <Button type="primary">Register</Button>
                                    </Link>
                                </>
                            )}
                        </Flex>
                    </Flex>
                </Layout.Header>
                <Layout.Content>{children}</Layout.Content>
                <Layout.Footer className="!border-t !border-[#404040] !bg-[#121212] !text-white md:!px-8 lg:!px-16">
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Typography.Title className="!mb-0 !tracking-wider whitespace-nowrap !text-[#E50914]">
                                ERDEFLIX
                            </Typography.Title>
                            <p className={'mt-6'}>
                                Үнэгүй кино үзэх боломжтой онлайн веб сайт.
                                Энэхүү сайт нь хүмүүст өндөр чанартай кино,
                                цуврал, баримтат кино болон бусад видео
                                контентыг үнэгүй үзэх боломжийг олгоно.
                            </p>
                        </Col>

                        <Col span={12}>
                            <Typography.Title
                                level={3}
                                className="!mb-0 !tracking-wider whitespace-nowrap"
                            >
                                Холбоо барих
                            </Typography.Title>
                            <p className="mt-6">
                                Утасны дугаар: +976 90322690 <br />
                                И-мэйл: info@erdeflix.mn
                            </p>
                        </Col>
                    </Row>
                </Layout.Footer>
            </Layout>
        </ConfigProvider>
    );
}
