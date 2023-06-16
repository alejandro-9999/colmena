import ChartModule from "../components/ChartModule/ChartModule";
import Tasks from "../components/Tasks/Tasks";

const routes = [
    {
        path: "/",
        element: <ChartModule/>,
    },
    {
        path: "/tasks",
        element: <Tasks/>,
    },
];


export default routes;