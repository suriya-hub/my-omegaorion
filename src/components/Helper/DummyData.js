import HOME from "../../assets/home.png";
import INFO from "../../assets/myinfo.png";
import PEOPLE from "../../assets/people.png";
import PROJECT from "../../assets/project.png";
import HIRING from "../../assets/hiring.png";
import REPORT from "../../assets/report.png";

export const people = [
    { name: "Ethan Lee", role: "IT Specialist", img: "https://i.pravatar.cc/300?img=1" },
    { name: "Emily Baker", role: "Marketing Manager", img: "https://i.pravatar.cc/300?img=2" },
    { name: "Michael Shaun", role: "Sales Director", img: "https://i.pravatar.cc/300?img=3" },
    { name: "Liam Carter", role: "Product Designer", img: "https://i.pravatar.cc/300?img=4" },
    { name: "Grace Kim", role: "Customer Lead", img: "https://i.pravatar.cc/300?img=5" },
    { name: "Noah Williams", role: "Finance Head", img: "https://i.pravatar.cc/300?img=6" },
    { name: "Isabella Rossi", role: "Operations Manager", img: "https://i.pravatar.cc/300?img=7" },
    { name: "Ava Thompson", role: "HR Executive", img: "https://i.pravatar.cc/300?img=8" }
];

export const menus = [
    { id: 1, title: "Home", icon: HOME, route: "/home", children: [] },
    {
        id: 2,
        title: "My Info",
        icon: INFO,
        route: "/myinfo",
        children: [
            {
                childId: 201,
                childTitle: "Employees Info",
                grandchildren: [
                    { grandchildId: 2011, grandchildTitle: "Personal Details", route: "/myinfo/personaldetails" },
                ]
            }
        ]
    },
    {
        id: 3,
        title: "People",
        icon: PEOPLE,
        route: "/people",
        children: []
    },
    {
        id: 4,
        title: "Team Management",
        icon: HOME,
        route: "/teammanagement",
        children: [
            {
                childId: 401,
                childTitle: "Timesheet",
                grandchildren: [
                    { grandchildId: 4011, grandchildTitle: "Add Employee", route: "/teammanagement/addemployee", },
                    { grandchildId: 4012, grandchildTitle: "Employee List", route: "/teammanagement/employeelist", }
                ]
            },
            {
                childId: 402,
                childTitle: "Reimbursement",
                grandchildren: [
                    { grandchildId: 4021, grandchildTitle: "Reimbursement List", route: "/reimbursement/reimbursementlist" }
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Project Setup",
        icon: PROJECT,
        route: "/projectsetup",
        children: [
            {
                childId: 501,
                childTitle: "Projects",
                route: "/projectsetup/projects",
                grandchildren: []
            }
        ]
    },
    { id: 6, title: "Hiring", icon: HIRING, route: "/hiring", children: [] },
    { id: 7, title: "Report", icon: REPORT, route: "/report", children: [] }
];
