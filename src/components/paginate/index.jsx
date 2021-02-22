import React from 'react';

const PaginateComponent = (props) => (
    <div>
        <div className="d-flex justify-content-center align-items-center my-4">
            <p className="page-view">Página: <span className="text-danger">{props.page}</span> de <span className="text-muted">{props.pages}</span></p>
        </div>

        <div className="d-flex justify-content-between mb-3">
            {props.children}
        </div>
    </div>
);

export default PaginateComponent;