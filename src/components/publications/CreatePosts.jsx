import React, { useState } from "react";
import { usePublication } from "../../shared/usePublication";
import toast from "react-hot-toast";

export const AddPost = ({ switchPostHandler }) => {
    const { addPost, getPosts, isLoading } = usePublication();

    const [formState, setFormState] = useState({
        title: {
            value: '',
            isValid: false,
            showError: false
        },
        img: {
            value: '',
            isValid: false,
            showError: false
        },
        description: {
            value: '',
            isValid: false,
            showError: false
        },
        author: {
            value: '',
            isValid: false,
            showError: false
        },
        url: {
            value: '',
            isValid: false,
            showError: false
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState(prevState => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }));
    }

    const handleAddPost = async event => {
        event.preventDefault();
        const { title, img, description, author, url } = formState;
        await addPost(title.value, img.value, description.value, author.value, url.value);
        setFormState({
            title: {
                value: '',
                isValid: false,
                showError: false
            },
            img: {
                value: '',
                isValid: false,
                showError: false
            },
            description: {
                value: '',
                isValid: false,
                showError: false
            },
            author: {
                value: '',
                isValid: false,
                showError: false
            },
            url: {
                value: '',
                isValid: false,
                showError: false
            }
        });
        await getPosts();
    }

    return (
        <div className="form-card-container">
            <div className="form-card">
                <form className="form" onSubmit={handleAddPost}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Title"
                            value={formState.title.value}
                            onChange={event => handleInputValueChange(event.target.value, 'title')}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="image"
                            value={formState.img.value}
                            onChange={event => handleInputValueChange(event.target.value, 'img')}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            placeholder="Description"
                            value={formState.description.value}
                            onChange={event => handleInputValueChange(event.target.value, 'description')}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Author"
                            value={formState.author.value}
                            onChange={event => handleInputValueChange(event.target.value, 'author')}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Link repository"
                            value={formState.url.value}
                            onChange={event => handleInputValueChange(event.target.value, 'url')}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn-submit">
                            Add post
                        </button>
                    </div>
                </form>
                <span onClick={switchPostHandler}></span>
            </div>
        </div>
    );
};
