import DashLayout from '@/layouts/dash-layout';
import { router, usePage, Form } from '@inertiajs/react';
import { UploadIcon } from 'lucide-react';
import { moviescreate } from '@/routes';
import { useState } from 'react';

export default function MovieCreate() {
    const { videos, categories } = usePage<{
        videos: any;
        categories: any;
    }>().props;
    const [checkout, setCheckout] = useState(false);

    return (
        <DashLayout>
            <Form
                action={moviescreate()}
                method="post"
                encType="multipart/form-data"
                className="flex h-[28rem] flex-col space-y-4 p-6"
                onSuccess={() => setCheckout(false)}
            >
                {({ processing }) => (
                    <>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Киноны нэр
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Постер зураг
                                </label>
                                <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 transition hover:border-blue-500">
                                    <UploadIcon
                                        size={20}
                                        className="mb-1 text-gray-400"
                                    />
                                    <span className="text-xs text-gray-500">
                                        Постер хуулах
                                    </span>
                                    <input
                                        type="file"
                                        name="poster"
                                        className="hidden"
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Мета зураг
                                </label>
                                <label className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 transition hover:border-blue-500">
                                    <UploadIcon
                                        size={20}
                                        className="mb-1 text-gray-400"
                                    />
                                    <span className="text-xs text-gray-500">
                                        Мета зураг хуулах
                                    </span>
                                    <input
                                        type="file"
                                        name="meta_banner"
                                        className="hidden"
                                    />
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Товч тайлбар
                            </label>
                            <textarea
                                name="description"
                                maxLength={255}
                                rows={3}
                                className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Ангилал
                                </label>
                                <select
                                    name="category_id"
                                    className="w-full rounded-lg border bg-[#121212] px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    <option value=""></option>
                                    {categories.map((item: any) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Бичлэг
                                </label>
                                <select
                                    name="video_id"
                                    className="w-full rounded-lg border bg-[#121212] px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    <option value=""></option>
                                    {videos.map((item: any) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name.substring(7)}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Аттрибут
                                </label>
                                <input
                                    type="text"
                                    name="attribute"
                                    className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700">
                                    Кино гарсан жил
                                </label>
                                <input
                                    type="date"
                                    name="movie_created_date"
                                    className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="-mx-6 mt-auto -mb-6 flex justify-end gap-2 rounded-b-xl border-t bg-[#121212] p-4">
                            <button
                                type="button"
                                onClick={() => setCheckout(false)}
                                className="rounded-lg border px-4 py-2 transition hover:bg-gray-100"
                            >
                                Цуцлах
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:opacity-50"
                            >
                                {processing ? 'Хадгалж байна...' : 'Хадгалах'}
                            </button>
                        </div>
                    </>
                )}
            </Form>
        </DashLayout>
    );
}
