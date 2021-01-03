import React from 'react';
import {ADMIN} from "../../constans/usersRole";
import ErrorPage from "../../views/ErrorPage";

export default function AdminLayout(WrappedComponent,role) {

    const Child = (props) => {
        const checkAdmin = role === ADMIN;
        if(checkAdmin) return <WrappedComponent {...props} />
        else return <ErrorPage/>
    };

    return Child;
}