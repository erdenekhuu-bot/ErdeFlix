import { Link } from '@inertiajs/react';
import { BookOpen, LayoutGrid,Users2,FastForwardIcon,ScreenShare,LucideSpeech } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem} from '@/components/ui/sidebar';
import {
    dashboard,
    categories,
    users,
    movies,
    videos,
    reactions,
} from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Category list',
        href: categories(),
        icon: BookOpen,
    },
    {
        title: 'User list',
        href: users(),
        icon: Users2,
    },
    {
        title: 'Movie list',
        href: movies(),
        icon: FastForwardIcon,
    },
    {
        title: 'Video list',
        href: videos(),
        icon: ScreenShare,
    },
    {
        title: 'Reaction list',
        href: reactions(),
        icon: LucideSpeech,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={[]} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
