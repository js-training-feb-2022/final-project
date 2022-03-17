import React from 'react';

function List(props) {
    const CustomTag = props.tag;
    
    return props.list.map((data) => <CustomTag className={props.isType ? `${props.className} ${data[props.name].name}` : `${props.className}`}>{props.doSomething(data[props.name].name)}</CustomTag>);
}

export default List;