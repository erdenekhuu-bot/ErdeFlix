import { Head, Link, usePage } from '@inertiajs/react';
import {
    Layout,
    Flex,
    Menu,
    Typography,
    Input,
    ConfigProvider,
    theme,
    Button,
    Row,
    Col,
} from 'antd';
import {
    dashboard,
    login,
    register,
    list,
    home,
    append,

} from '@/routes';

export default function HomeLayout({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) {
    const { auth, url } = usePage().props;
    console.log(auth)

    const darkTheme = {
        background: '#121212',
        surface: '#1E1E1E',
        surfaceLight: '#2D2D2D',
        border: '#404040',
        text: '#FFFFFF',
        modalBackground: '#222222',
    };

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
                        <Input.Search
                            placeholder={'Search movie...'}
                            className={'!w-92'}
                        />
                        <Flex gap={12} align="center">
                            {auth.user ? (
                                <Link href={dashboard()}>
                                    <Button type="primary">Dashboard</Button>
                                </Link>
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
                <Layout.Footer>
                    <Row gutter={[16, 16]}>
                        <Col span={6}>
                            <Typography.Title className="!mb-0 !tracking-wider whitespace-nowrap !text-[#E50914]">
                                ERDEFLIX
                            </Typography.Title>
                            <p className={'mt-6'}>
                                The world's most immersive streaming experience.
                                Dramatic, premium, and designed for film lovers
                                who demand perfection in every frame.
                            </p>
                        </Col>
                        <Col span={6}>
                            <Typography.Title
                                level={3}
                                className="!mb-0 !tracking-wider whitespace-nowrap"
                            >
                                Platform
                            </Typography.Title>
                            <p></p>
                        </Col>
                        <Col span={6}>
                            <Typography.Title
                                level={3}
                                className="!mb-0 !tracking-wider whitespace-nowrap"
                            >
                                Support
                            </Typography.Title>
                            <p></p>
                        </Col>
                        <Col span={6}>
                            <Typography.Title
                                level={3}
                                className="!mb-0 !tracking-wider whitespace-nowrap"
                            >
                                Connect
                            </Typography.Title>
                            <p></p>
                        </Col>
                    </Row>
                </Layout.Footer>
            </Layout>
        </ConfigProvider>
    );
}
