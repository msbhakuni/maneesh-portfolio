import { Navigate, createBrowserRouter } from "react-router-dom";
import ExperiencePage from "./ExperiencePage";
import App from "../App";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectPage";
import SkillPage from "./SkillPage";
import EducationPage from "./EducationPage";
import ContactPage  from "./ContactPage";
import ResumePage from "./ResumePage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {path:'', element:<HomePage/>},
            {path:'home', element:<HomePage/>},
            {path:'experience', element:<ExperiencePage/>},
            {path:'projects', element:<ProjectsPage/>},
            {path:'skills', element:<SkillPage/>},
            {path:'education', element:<EducationPage/>},
            {path:'contact', element:<ContactPage/>},
            {path:'resume', element:<ResumePage/>},
            {path:'*', element:<Navigate replace to='/not-found'/>}
        ]
    }
])