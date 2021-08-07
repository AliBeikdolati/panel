import {useEffect} from 'react'

// import asiderData from '../assets/js/asider-data'
import TreeView from '../assets/js/TreeView'
import '../assets/styles/Asider.css'


const Asider = (props) => {
    useEffect(() => {
        let a = new TreeView(props.data, 'asiderNav');
    },[]);

    // const listItems =navItem(asiderData);
    return (
        <div className="asider">
            <div id="asiderNav"></div>
        </div>
    )
}

export default Asider;