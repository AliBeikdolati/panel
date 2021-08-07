import Asider from "../components/Asider";
import Grid from "../components/Grid";

import {adminNavbar} from '../assets/js/asider-data'

// import css
import '../assets/styles/Asider.css'

const AdminPage = () => {
    return (
        <div className="main">
            <Asider data={adminNavbar}/>
            <Grid/>
        </div>
    )
}

export default AdminPage;