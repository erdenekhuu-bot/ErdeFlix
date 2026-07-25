import DashLayout from '@/layouts/dash-layout';
import {
    Input,
    Button,
    Table,
    Flex,
    Form,
    FormProps,
    Modal,
    Upload,
    UploadFile,
    Row,
    Col,
    DatePicker,
    Select,
    Image,
} from 'antd';
import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { UploadIcon } from 'lucide-react';
import { moviescreate } from '@/routes';

export default function MovieList() {
    const { list, videos, categories } = usePage<{
        list: any;
        videos: any;
        categories: any;
    }>().props;
    const [checkout, setCheckout] = useState(false);
    const [forms] = Form.useForm();

    const [posterList, setPosterList] = useState<UploadFile[]>([]);
    const [bannerList, setBannerList] = useState<UploadFile[]>([]);

    const onFinish: FormProps['onFinish'] = (values) => {
        const formData = new FormData();

        Object.keys(values).forEach((key) => {
            if (values[key] !== undefined && values[key] !== null) {
                if (key === 'movie_created_date' && values[key].format) {
                    formData.append(key, values[key].format('YYYY-MM-DD'));
                } else {
                    formData.append(key, values[key]);
                }
            }
        });

        if (posterList.length > 0 && posterList[0].originFileObj) {
            formData.append('poster', posterList[0].originFileObj);
        }
        if (bannerList.length > 0 && bannerList[0].originFileObj) {
            formData.append('meta_banner', bannerList[0].originFileObj);
        }

        router.post(moviescreate(), formData, {
            onSuccess: () => {
                setCheckout(false);
                forms.resetFields();
                setPosterList([]);
                setBannerList([]);
            },
            onError: (errors) => {
                console.log('Validation errors:', errors);
            },
        });
    };
    const listcategories: { value: number; label: string }[] = categories.map(
        (item: { id: number; name: string }) => {
            return {
                value: item.id,
                label: item.name,
            };
        },
    );
    const listvideo: { value: number; label: string }[] = videos.map(
        (item: { id: number; name: string }) => {
            return {
                value: item.id,
                label: item.name.substring(7),
            };
        },
    );
    console.log(list);
    return (
        <DashLayout>
            <Flex justify="space-between" className="!my-4">
                <Input.Search className="!w-96" />
                <Button type="primary" onClick={() => setCheckout(true)}>
                    Шинээр нэмэх
                </Button>
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
                        render: (arg: string) => <Image src={arg} width={50} />,
                    },
                    {
                        title: 'Товч тайлбар',
                        dataIndex: 'description',
                        key: 'description',
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
            <Modal
                open={checkout}
                onOk={() => forms.submit()}
                onCancel={() => {
                    setCheckout(false);
                    forms.resetFields();
                    setPosterList([]);
                    setBannerList([]);
                }}
            >
                <Form
                    layout="vertical"
                    form={forms}
                    onFinish={onFinish}
                    className="!h-[calc(28rem)] !overflow-y-scroll !p-2"
                    encType="multifarm/form-data"
                >
                    <Form.Item
                        name="name"
                        label="Киноны нэр"
                        rules={[
                            {
                                required: true,
                                message: 'Киноны нэр оруулна уу',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item label="Постер зураг">
                                <Upload
                                    fileList={posterList}
                                    maxCount={1}
                                    beforeUpload={(file) => {
                                        setPosterList([file]);
                                        return false; // Prevent automatic upload
                                    }}
                                    onRemove={() => setPosterList([])}
                                >
                                    <Button icon={<UploadIcon size={16} />}>
                                        Постер хуулах
                                    </Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Мета зураг">
                                <Upload
                                    fileList={bannerList}
                                    maxCount={1}
                                    beforeUpload={(file) => {
                                        setBannerList([file]);
                                        return false; // Prevent automatic upload
                                    }}
                                    onRemove={() => setBannerList([])}
                                >
                                    <Button icon={<UploadIcon size={16} />}>
                                        Мета зураг хуулах
                                    </Button>
                                </Upload>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item name="description" label="Товч тайлбар">
                        <Input.TextArea maxLength={255} showCount />
                    </Form.Item>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item name="category_id" label="Ангилал">
                                <Select
                                    showSearch={{
                                        filterOption: (input, option) =>
                                            (option?.label ?? '')
                                                .toLowerCase()
                                                .includes(input.toLowerCase()),
                                    }}
                                    placeholder="Select a person"
                                    options={listcategories}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="video_id" label="Бичлэг">
                                <Select
                                    showSearch={{
                                        filterOption: (input, option) =>
                                            (option?.label ?? '')
                                                .toLowerCase()
                                                .includes(input.toLowerCase()),
                                    }}
                                    placeholder="Select a person"
                                    options={listvideo}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Form.Item name="attribute" label="Аттрибут">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="movie_created_date"
                                label="Кино гарсан жил"
                            >
                                <DatePicker className="!w-full" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </DashLayout>
    );
}
