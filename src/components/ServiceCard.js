import React, { useState } from "react";

export default function ServiceCard(props) {
    const Logo = props.test;

    const [selected, setSelected] = useState(false);

    return (
        <div
            onClick={() => {
                setSelected(!selected);
            }}
            className={`service-card ${selected ? "selected" : ""}`}
        >
            <Logo className='logo' />
        </div>
    );
}
