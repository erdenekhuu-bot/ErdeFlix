import {
    CalendarOutlined,
    EyeOutlined,
    StarOutlined,
    PlayCircleOutlined,
    ClockCircleOutlined,
    FireOutlined,
} from '@ant-design/icons';
import { Card, Tag } from 'antd';

export function FeaturedCard({
    title,
    kind,
    description,
    image,
    date,
    rating,
    views,
    duration,
    isNew,
    isTrending,
    isExclusive,
}: {
    title: string;
    kind: string;
    description: string;
    image: string;
    date: string;
    rating?: number;
    views?: string;
    duration?: string;
    isNew?: boolean;
    isTrending?: boolean;
    isExclusive?: boolean;
}) {
    return (
        <Card
            hoverable
            className="group relative overflow-hidden rounded-2xl border-0 bg-transparent shadow-none transition-all duration-500"
            styles={{
                body: { padding: '0' },
                cover: { borderRadius: '16px' },
            }}
            cover={
                <div className="relative h-72 w-full overflow-hidden rounded-2xl">
                    {/* Background Image */}
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Cinematic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

                    {/* Subtle Border Glow */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-all duration-500 ring-inset group-hover:ring-white/30" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                        <Tag
                            color={'lime'}
                            className="bg-opacity-90 m-0 rounded-full border-0 px-4 py-1.5 text-xs font-bold tracking-wider uppercase shadow-lg backdrop-blur-md"
                            style={{
                                background: 'rgba(6, 182, 212, 0.9)',
                                backdropFilter: 'blur(12px)',
                            }}
                        >
                            {kind}
                        </Tag>
                        {isExclusive && (
                            <Tag
                                color="gold"
                                className="bg-opacity-90 m-0 rounded-full border-0 px-4 py-1.5 text-xs font-bold tracking-wider uppercase shadow-lg backdrop-blur-md"
                                style={{
                                    background: 'rgba(250, 204, 21, 0.9)',
                                    backdropFilter: 'blur(12px)',
                                }}
                            >
                                ⭐ EXCLUSIVE
                            </Tag>
                        )}
                    </div>

                    {/* Top Right - Rating */}
                    {rating && (
                        <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1.5 backdrop-blur-md">
                            <StarOutlined className="text-sm text-yellow-400" />
                            <span className="text-sm font-bold text-white">
                                {rating.toFixed(1)}
                            </span>
                        </div>
                    )}

                    {/* Bottom Info Overlay */}
                    <div className="absolute right-0 bottom-0 left-0 p-5">
                        <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
                            {duration && (
                                <span className="flex items-center gap-1.5">
                                    <ClockCircleOutlined className="text-white/50" />
                                    {duration}
                                </span>
                            )}
                            {views && (
                                <span className="flex items-center gap-1.5">
                                    <EyeOutlined className="text-white/50" />
                                    {views}
                                </span>
                            )}
                            <span className="flex items-center gap-1.5">
                                <CalendarOutlined className="text-white/50" />
                                {new Date(date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </span>
                            {isNew && (
                                <span className="ml-auto rounded-full bg-green-500/80 px-3 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase backdrop-blur-sm">
                                    New
                                </span>
                            )}
                            {isTrending && (
                                <span className="ml-auto flex items-center gap-1 rounded-full bg-orange-500/80 px-3 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase backdrop-blur-sm">
                                    <FireOutlined className="text-xs" />
                                    Trending
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Hover Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <div className="transform rounded-full bg-white/10 p-5 backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:bg-white/20">
                            <PlayCircleOutlined className="text-6xl text-white drop-shadow-2xl" />
                        </div>
                    </div>
                </div>
            }
        >
            {/* Card Content - White Text */}
            <div className="mt-4 space-y-2 px-1">
                <h2 className="line-clamp-1 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-400">
                    {title}
                </h2>

                <p className="line-clamp-2 min-h-[40px] text-sm leading-relaxed text-white/70">
                    {description}
                </p>
            </div>

            {/* Animated Border Glow */}
            <div className="absolute -inset-0.5 -z-10 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 opacity-0 blur-xl transition-all duration-700 group-hover:from-cyan-500/30 group-hover:via-purple-500/20 group-hover:to-pink-500/20 group-hover:opacity-100" />
        </Card>
    );
}
