import React from "react";
import ServiceCard from "./ServiceCard";

import { ReactComponent as NetflixLogo } from "../images/logos/Netflix_2015.svg";
import { ReactComponent as PrimeLogo } from "../images/logos/Prime.svg";

const data = [
    {
        title: "Netflix",
        logo: NetflixLogo
    },
    {
        title: "Prime Video",
        logo: PrimeLogo
    },
    {
        title: "HBO Max",
        logo: NetflixLogo
    },
    {
        title: "Disney Plus",
        logo: NetflixLogo
    }
];

export default function ServiceSelect() {
    const select = (
        <select hidden={true} name='service-select' id='service-select' multiple>
            {data.map((el, idx) => (
                <option value={el.title} key={idx}>
                    {el.title}
                </option>
            ))}
        </select>
    );

    const cards = data.map((el, idx) => (
        <ServiceCard key={idx} title={el.title} test={el.logo}></ServiceCard>
    ));

    return (
        <div className='container'>
            <div className='services-wrapper'>{cards}</div>
            {select}
        </div>
    );
}
