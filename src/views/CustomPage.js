import Asider from "../components/Asider";
import Grid from "../components/Grid";


import {custopmNavbar} from '../assets/js/asider-data'

// import css
import '../assets/styles/Asider.css'


const CustomPage = () => {

    return (
        <div className="main">
            <Asider data={custopmNavbar}/>
            <Grid/>
        </div>
    )
}

export default CustomPage;