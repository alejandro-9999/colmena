import {
    makeStyles,
    Tab,
    TabList,
} from "@fluentui/react-components";


import Logo from '../../assets/images/logo.png';
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";


const useStyles = makeStyles({
    root: {
        height: "100vh"
    },
});





const Layout = (props) => {

    const styles = useStyles();

    const navigate = useNavigate();

    const location = useLocation();

    const [selectedTab, setSelectedTab] = useState(location.pathname);

    useEffect(() => {
        navigate(selectedTab);
    }, [selectedTab,navigate]);


    
    const onChangeTab = (value) => {
        if (value != undefined) {
            setSelectedTab(value);
        }
    }

    return (
        <div className={styles.root}>
            <div className="header-content">
                <img className="logo-img" src={Logo} alt="" />
            </div>
            <TabList {...props} selectedValue={selectedTab}>
                <div onClick={() => onChangeTab("/")}>
                    <Tab value="/">
                        Graficas Ventas Vehiculos
                    </Tab>
                </div>
                <div onClick={() => onChangeTab("/tasks")}>
                    <Tab value="/tasks">
                        Tareas
                    </Tab>
                </div>
            </TabList>
            <div className="content-body">
                <Outlet />
            </div>
        </div>
    );
}


export default Layout;
