import React from 'react';
import messeges from './messeges';
import { Container } from 'react-bootstrap';

function GoBack({title, description}) {
    return (
        <div>
            <div>
                <a><h1>{title}</h1></a>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}

function Item({title, description, target, url}) {
    return (
        <div>
            <div>
                <a target={target} url={url}><h1>{title}</h1></a>
            </div>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}

function MedicationInfo() {
    const items = messeges.links.map((item, index) => 
        <Item
            key={index}
            title={item.title}
            description={item.desc}
            target={item.target}
            url={item.url} 
        />
    )
    return (
        <Container>
            <GoBack
                title={messeges.title}
                description={messeges.desc} 
            />
            {items}
        </Container>
    )
}

export default MedicationInfo;
