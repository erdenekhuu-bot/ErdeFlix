import DashLayout from '@/layouts/dash-layout';
import { router, usePage } from '@inertiajs/react';
import { Input, Button, Table, Flex, Form, Modal } from 'antd';

export default function VideoList() {
    const { list } = usePage<{ list: any }>().props;

    return (
        <DashLayout>
            <Flex className="!my-4">
                <Input.Search />
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
                        title: 'Бичлэгийн зам',
                        dataIndex: 'path',
                        key: 'path',
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
