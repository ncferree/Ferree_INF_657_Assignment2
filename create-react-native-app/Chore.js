import React from "react";
import PropTypes from "prop-types";


export default function Chore ({id, title, description}) {
    return(
        <div>
            {id}
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

Chore.propTypes={
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
}