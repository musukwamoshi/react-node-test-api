import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Articles } from '../article/Articles';
import { Comments } from '../comment/Comments';
import { AddArticle } from '../article/AddArticle';
import { ReviewArticle } from '../article/ReviewArticle';
import { Home } from '../clientside/article/Home';
import { Login } from '../authentication/Login';
import { SignUp } from '../authentication/SignUp';
import { ViewArticle } from '../clientside/article/ViewArticle';
import { About } from '../clientside/article/about';


function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/admin/signup" element={<SignUp />} />
                <Route path="/admin/login" element={<Login />} />
                <Route path="/admin/articles/review" element={<Articles />} />
                <Route path="/admin/article/add" element={<AddArticle />} />
                <Route path="/admin/comments/review" element={<Comments />} />
                <Route path="/admin/article/:id" element={<ReviewArticle />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/article/:id" element={<ViewArticle />} />
            </Routes>
        </div>
    );
}

export default AppRoutes;
