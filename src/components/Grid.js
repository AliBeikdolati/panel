import React, {useEffect, useState} from 'react'

// import components
import {
    handleDragStart,
    handleDragEnter,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd
} from '../assets/js/DragDrop'
import useSortableData from "./useSortableData";
import ProductItem from "./GridRow";

// import styles
import '../assets/styles/Grid.css'

const Grid = () => {
    // this is for getting data of grid from server
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(response => {
                setData(response);
                // console.log(data);
            })
    }, []);


    // this useEffect is for setting drag and drop
    useEffect(() => {
        let items = document.querySelectorAll('.table-header .box');
        items.forEach(function (item) {
            item.addEventListener('dragstart', handleDragStart, false);
            item.addEventListener('dragenter', handleDragEnter, false);
            item.addEventListener('dragover', handleDragOver, false);
            item.addEventListener('dragleave', handleDragLeave, false);
            item.addEventListener('drop', handleDrop, false);
            item.addEventListener('dragend', handleDragEnd, false);
        });
    });


    // this setting is for sortable columns
    const { items, requestSort, sortConfig } = useSortableData(data);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return '';
        }
        return sortConfig.key === name ? sortConfig.direction : '';
    };

    return (
        <div className="grid">

            <table className="table table-bordered table-hover">
                <thead>
                <tr className='table-header'>
                    {
                        showHeaderTable(data[1], requestSort, getClassNamesFor)
                    }

                </tr>
                </thead>
                <tbody>{
                    showRows(items)
                }</tbody>
            </table>
        </div>
    );
}


// this function generate header of table
const showHeaderTable = (item, requestSort, className) => {
    var result = null;
    if (item) {
        result = Object.keys(item).map((key) => {
            // console.log(key);
            if ( typeof(item[key]) !== 'object' ) {
                return (
                    <th draggable="true"
                        className={className(key) + ' box'}
                        onClick={() => {requestSort(key); console.log("click");}}
                    > {key} </th>
                )
            }
        })
    }
    return result;
}


// this function generate row of tbody table
const showRows = (products) => {
    // console.log(products);
    var result = null;
    if (products.length > 0) {
        result = products.map((product, index) => {
            console.log(product);
            return <ProductItem key={index} product={product} index={index}/>;
        });
    }
    return result;
};



export default Grid;