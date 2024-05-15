import React, { useState } from "react";
import { usePublication } from "../../shared/usePublication";
import toast from "react-hot-toast";
import { useForm } from 'react-hook-form';



export const AddPost = ({ switchPostHandler }) => {
    const { addPost, getPosts, isLoading } = usePublication();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        await addPost(data.title, data.img, data.description, data.author, data.url);
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : 'border-gray-200'}`} id="title" type="text" placeholder="Title" {...register("title", { required: true })} />
                        {errors.title && <p className="text-red-500 text-xs italic">Please enter a title</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Image
                        </label>
                        <input className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.img ? 'border-red-500' : 'border-gray-200'}`} id="img" type="text" placeholder="Image URL" {...register("img", { required: true })} />
                        {errors.img && <p className="text-red-500 text-xs italic">Please enter an image URL</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.description ? 'border-red-500' : 'border-gray-200'}`} id="description" placeholder="Description" {...register("description", { required: true })} />
                        {errors.description && <p className="text-red-500 text-xs italic">Please enter a description</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                            Author
                        </label>
                        <input className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.author ? 'border-red-500' : 'border-gray-200'}`} id="author" type="text" placeholder="Author" {...register("author", { required: true })} />
                        {errors.author && <p className="text-red-500 text-xs italic">Please enter an author</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">
                            Link
                        </label>
                        <input className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.url ? 'border-red-500' : 'border-gray-200'}`} id="url" type="text" placeholder="Link" {...register("url", { required: true })} />
                        {errors.url && <p className="text-red-500 text-xs italic">Please enter a link</p>}
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Add post
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
