import { Card, Tag } from 'antd';

interface FeaturedCardProps {
    title: string;
    description?: string;
    image: string;
    tag?: string;
    className?: string;
}

export function FeaturedCard({
    title,
    description,
    image,
    tag,
    className = '',
}: FeaturedCardProps) {
    return (
        <Card
            hoverable
            bordered={false}
            bodyStyle={{ padding: 0 }}
            className={`relative overflow-hidden rounded-2xl border-0 ${className}`}
        >
            <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 z-10 p-5">
                {tag && (
                    <Tag color="red" className="mb-3">
                        {tag}
                    </Tag>
                )}

                <h3 className="text-2xl font-bold text-white">{title}</h3>

                {description && (
                    <p className="mt-2 max-w-md text-sm text-gray-300">
                        {description}
                    </p>
                )}
            </div>
        </Card>
    );
}
