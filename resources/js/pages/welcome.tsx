import { Head, Link, usePage } from '@inertiajs/react';
import { Layout,Flex,Menu, Typography,Input,ConfigProvider,theme,Button } from 'antd';
import type { MenuProps } from 'antd';
import {useState} from 'react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';

type MenuItem = Required<MenuProps>['items'][number];
export default function Welcome() {
    const { auth } = usePage().props;
    const [current, setCurrent] = useState('mail');

    const items: MenuItem[] = [
        {
            label: 'Dashboard',
            key: 1,
        },
        {
            label: 'Explore',
            key: 2,
        },
        {
            label: 'Live hub',
            key: 3,
        },
        {
            label: 'Watch list',
            key: 4
        }
    ];
    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };
    const darkTheme = {
        background: '#121212',
        surface: '#1E1E1E',
        surfaceLight: '#2D2D2D',
        border: '#404040',
        text: '#FFFFFF',
        modalBackground: '#222222',
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
            <Layout className="min-h-screen">
                <Head title="Welcome" />
                <Layout.Header>
                    <Flex className="!w-full" align="center" gap={24}>
                        <Typography.Title
                            className="!mb-0 !tracking-wider whitespace-nowrap !text-[#E50914]"
                        >
                            ERDEFLIX
                        </Typography.Title>
                        <Menu
                            theme={'dark'}
                            onClick={onClick}
                            selectedKeys={[current]}
                            mode="horizontal"
                            items={items}
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
            </Layout>
        </ConfigProvider>
    );
}
