import React from "react";

const showRows = (item) => {

    let result = null;
    if (item) {
        result = Object.keys(item).map((key) => {
            // console.log(key);
            if (typeof(item[key]) !== 'object') {
                return (
                    <td draggable="true" className="box"> {item[key]} </td>
                )
            }
        })
    }
    return result;
};

const GridRow = (props) => {
    let {product} = props;

    return (
        <tr>
            {
                showRows(product)
            }
        </tr>
    );
}

export default GridRow;
