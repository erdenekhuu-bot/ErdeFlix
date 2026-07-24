import {
    Flex,
    Input,
    Button,
    Table,
    Modal,
    Form,
    FormProps,
    AutoComplete,
} from 'antd';
import DashLayout from '@/layouts/dash-layout';
import { categorycreate, categorydelete } from '@/routes';
import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Trash2 } from 'lucide-react';

export default function CategoryList() {
    const [checkout, setCheckout] = useState(false);
    const [forms] = Form.useForm();
    const [searchValue, setSearchValue] = useState('');

    const { list } = usePage<{ list: any }>().props;

    const onFinish: FormProps['onFinish'] = (values) => {
        router.post(categorycreate(), values, {
            onSuccess: (page) => {
                setCheckout(false);
                forms.resetFields();
            },
            onError: (errors) => {
                // Executed when validation fails (422 response)
                console.log('Validation errors:', errors);
            },
            onFinish: () => {
                setCheckout(false);
            },
        });
    };
    const handleSearch = (value: string) => {
        router.get(
            window.location.pathname,
            { search: value },
            { preserveState: true, replace: true },
        );
    };
    const searchOptions = (list?.data || []).map((item: any) => ({
        value: item.name,
        label: (
            <div className="flex justify-between">
                <span>{item.name}</span>
                <span className="text-xs text-gray-400">
                    {item.description}
                </span>
            </div>
        ),
    }));

    return (
        <DashLayout>
            <Flex justify="flex-end" className="!my-4">
                <AutoComplete
                    options={searchOptions}
                    className="!w-96"
                    onSelect={(value) => handleSearch(value)}
                >
                    <Input.Search
                        placeholder="Хайх..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onSearch={(value) => handleSearch(value)}
                        allowClear
                    />
                </AutoComplete>
                <Button type="primary" onClick={() => setCheckout(true)}>
                    Шинээр нэмэх
                </Button>
            </Flex>
            <Table
                rowKey={'id'}
                columns={[
                    {
                        title: 'Ангилал',
                        dataIndex: 'name',
                        key: 'name',
                    },
                    {
                        title: 'Дэлгэрэнгүй тайлбар',
                        dataIndex: 'description',
                        key: 'description',
                    },
                    {
                        title: '',
                        dataIndex: 'id',
                        key: 'id',
                        render: (id: number) => (
                            <Button
                                danger
                                size="large"
                                icon={<Trash2 className="text-md" />}
                                onClick={() => {
                                    router.delete(categorydelete({ id: id }), {
                                        preserveScroll: true,
                                        onError: (errors) => {
                                            console.error(
                                                'Delete error:',
                                                errors,
                                            );
                                        },
                                    });
                                }}
                            />
                        ),
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
            <Modal
                open={checkout}
                onOk={() => forms.submit()}
                onCancel={() => {
                    setCheckout(false);
                    forms.resetFields();
                }}
            >
                <Form layout="vertical" form={forms} onFinish={onFinish}>
                    <Form.Item
                        name="name"
                        label="Ангилал"
                        rules={[
                            {
                                required: true,
                                message: 'Ангилалын нэр',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Дэлгэрэнгүй тайлбар"
                        rules={[
                            {
                                required: true,
                                message: 'Дэлгэрэнгүй тайлбар',
                            },
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                </Form>
            </Modal>
        </DashLayout>
    );
}
