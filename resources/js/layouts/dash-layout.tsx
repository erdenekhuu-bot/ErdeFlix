import { Layout, ConfigProvider, theme, Skeleton } from 'antd';
import {darkTheme} from '@/layouts/home-layout';
import { Suspense, ReactNode } from 'react';
export default function DashLayout({children}:{children:ReactNode}){
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
            <Suspense fallback={<Skeleton />}>
                <Layout.Content>{children}</Layout.Content>
            </Suspense>
        </ConfigProvider>
    );
}
