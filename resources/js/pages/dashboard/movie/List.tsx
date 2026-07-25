import DashLayout from '@/layouts/dash-layout';
import { Input, Button, Table, Flex, Image } from 'antd';
import { router, usePage, Link } from '@inertiajs/react';
import { formmovie } from '@/routes';

export default function MovieList() {
    const { list } = usePage<{ list: any }>().props;

    return (
        <DashLayout>
            <Flex justify="space-between" className="!my-4">
                <Input.Search className="!w-96" />
                <Link href={formmovie()}>
                    <Button type="primary">Шинээр нэмэх</Button>
                </Link>
            </Flex>
            <Table
                rowKey={'id'}
                columns={[
                    {
                        title: 'Нэр',
                        dataIndex: 'name',
                        key: 'name',
                    },
                    {
                        title: 'Постер',
                        dataIndex: 'poster',
                        key: 'poster',
                        render: (arg: string) => <Image src={arg} width={80} />,
                    },
                    {
                        title: 'Баннер зураг',
                        dataIndex: 'meta_banner',
                        key: 'meta_banner',
                        render: (arg: string) => (
                            <Image src={arg} width={100} />
                        ),
                    },
                    {
                        title: 'Товч тайлбар',
                        dataIndex: 'description',
                        key: 'description',
                        width: 500,
                    },
                    {
                        title: 'Кино гарсан жил',
                        dataIndex: 'movie_created_date',
                        key: 'movie_created_date',
                    },
                    {
                        title: 'Үнэлгээ',
                        dataIndex: 'rating',
                        key: 'rating',
                    },
                ]}
                dataSource={list?.data}
                onChange={(pagination) => {
                    router.get(
                        window.location.pathname,
                        {
                            page: pagination.current,
                            per_page: pagination.pageSize,
                        },
                        { preserveState: true },
                    );
                }}
                pagination={{
                    current: list?.current_page,
                    pageSize: list?.per_page,
                    total: list?.total,
                    showSizeChanger: false,
                }}
                bordered
            />
        </DashLayout>
    );
}
