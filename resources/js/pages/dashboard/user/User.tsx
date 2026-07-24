import DashLayout from '@/layouts/dash-layout';
import { Flex, Table, Input } from 'antd';
import { router, usePage } from '@inertiajs/react';

export default function UserList() {
    const { list } = usePage<{ list: any }>().props;
    return (
        <DashLayout>
            <Flex justify="flex-end" className="!my-4">
                <Input.Search placeholder="Хайх..." />
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
                        title: 'И-мэйл',
                        dataIndex: 'email',
                        key: 'email',
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
