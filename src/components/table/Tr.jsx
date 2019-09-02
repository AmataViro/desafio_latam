import React from 'react';

const Tr = (props) => (
    <tr className={"character-row "+props.class}>{props.children}</tr>
);

export default Tr;