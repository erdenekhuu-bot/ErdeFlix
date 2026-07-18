import { Card, Tag } from 'antd';
import { ArrowRightOutlined, VideoCameraOutlined } from '@ant-design/icons';

export function FeaturedCard({
    title,
    kind,
    description,
    image,
    date,
}: {
    title: string;
    kind: string;
    description: string;
    image: string;
    date: string;
}) {
    return (
        <Card
            hoverable
            className="group overflow-hidden rounded-2xl border border-gray-100/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-100/50"
            styles={{ body: { padding: '20px' } }} // AntD v5 modern syntax with slightly more breathing room
            cover={
                <div className="relative h-64 w-full overflow-hidden bg-gray-50">
                    {' '}
                    {/* Increased height from h-48 to h-52 */}
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Gradient Overlay for better image-to-text separation */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                    {/* Floating 'Kind' Tag */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                        <Tag
                            color={kind === 'Movie' ? 'blue' : 'purple'}
                            className="bg-opacity-90 m-0 rounded-lg border-0 px-3 py-1 text-xs font-semibold tracking-wide shadow-sm backdrop-blur-md"
                        >
                            {kind}
                        </Tag>
                    </div>
                </div>
            }
        >
            {/* Card Body content */}
            <div className="flex flex-col gap-2">
                <h2 className="line-clamp-1 text-base font-bold tracking-tight text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                    {title}
                </h2>
                <p className="line-clamp-2 min-h-[36px] text-xs leading-relaxed text-gray-500/90">
                    {description}
                </p>
            </div>

            {/* Card Footer */}
            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-3.5 text-xs font-medium text-gray-400">
                <span className="flex items-center gap-1.5 text-gray-500">
                    <VideoCameraOutlined className="text-sm text-gray-400" />
                    {date}
                </span>

                {/* Interactive 'Watch Now' Action */}
                <span className="flex items-center gap-1 text-[11px] font-bold tracking-wider text-blue-500 uppercase transition-colors duration-300 group-hover:text-blue-700">
                    Watch Now
                    <ArrowRightOutlined className="text-[10px] transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
            </div>
        </Card>
    );
}
