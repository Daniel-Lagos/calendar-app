import React from "react";
import {useDispatch} from "react-redux";
import {uiOpenModal} from "../../actions/ui";

export const AddNewRab = () => {
    const dispatch = useDispatch();
    const handleClickNew = () => {
        dispatch(uiOpenModal());
    }
    return (
        <button
            className="btn btn-primary fab"
            onClick={handleClickNew}
        >
            <i className="fas fa-plus"/>
        </button>
    );
}