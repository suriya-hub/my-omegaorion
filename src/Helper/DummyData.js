import HOME from "../assets/home.png";
import INFO from "../assets/myinfo.png";
import PEOPLE from "../assets/people.png";
import PROJECT from "../assets/project.png";
import HIRING from "../assets/hiring.png";
import REPORT from "../assets/report.png";
import SAND from "../assets/StrokeIcons1.png";
import GREEN from "../assets/StrokeIcons2.png";
import DOLLOR from "../assets/StrokeIcons3.png";
import WARNING from "../assets/StrokeIcons4.png";
import CLOCK from "../assets/StrokeIcons9.png";
import BADGE from "../assets/Badges.png";
import BADGE1 from "../assets/Badges1.png";
import BADGE2 from "../assets/Badges2.png";
import BADGE3 from "../assets/Badges3.png";
import BADGE4 from "../assets/Badges4.png";
import BADGE5 from "../assets/Badges5.png";
import BADGE6 from "../assets/Badges6.png";
import BADGE7 from "../assets/Badges7.png";

export const people = [
    { name: "Ethan Lee", role: "IT Specialist", img: "https://i.pravatar.cc/300?img=1", badge: BADGE },
    { name: "Emily Baker", role: "Marketing Manager", img: "https://i.pravatar.cc/300?img=2", badge: BADGE1 },
    { name: "Michael Shaun", role: "Sales Director", img: "https://i.pravatar.cc/300?img=3", badge: BADGE2 },
    { name: "Liam Carter", role: "Product Designer", img: "https://i.pravatar.cc/300?img=4", badge: BADGE3 },
    { name: "Grace Kim", role: "Customer Lead", img: "https://i.pravatar.cc/300?img=5", badge: BADGE4 },
    { name: "Noah Williams", role: "Finance Head", img: "https://i.pravatar.cc/300?img=6", badge: BADGE5 },
    { name: "Isabella Rossi", role: "Operations Manager", img: "https://i.pravatar.cc/300?img=7", badge: BADGE6 },
    { name: "Ava Thompson", role: "HR Executive", img: "https://i.pravatar.cc/300?img=8", badge: BADGE7 },
    { name: "Daniel Cooper", role: "Business Analyst", img: "https://i.pravatar.cc/300?img=9", badge: BADGE4 },
    { name: "Sophia Nguyen", role: "UI Developer", img: "https://i.pravatar.cc/300?img=10", badge: BADGE5 },
    { name: "James Patel", role: "Tech Lead", img: "https://i.pravatar.cc/300?img=11", badge: BADGE6 },
    { name: "Olivia Martinez", role: "QA Engineer", img: "https://i.pravatar.cc/300?img=12", badge: BADGE7 }
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
                route: "/teammanagement/timesheet",
                grandchildren: []
            },
            {
                childId: 402,
                childTitle: "Reimbursement",
                grandchildren: [
                    { grandchildId: 4021, grandchildTitle: "Reimbursement List", route: "/teammanagement/reimbursementlist" }
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

export const timesheetData = [
    { id: 100, type: "Total", hours: 169, icons: CLOCK, color: '#9BAE881A' },
    { id: 101, type: "Regular", hours: 7, icons: CLOCK, color: '#9BAE881A' },
    { id: 102, type: "Overtime", hours: 320, icons: SAND, color: '#FF51001A' },
    { id: 103, type: "OT2", hours: 20, icons: GREEN, color: '#9BAE881A' },
    { id: 104, type: "Holiday", hours: 8, icons: DOLLOR, color: '#3160941A' },
    { id: 105, type: "Anomalies", hours: 3, icons: WARNING, color: '#BC1C1C1A' },
]

export const tableData = [
    { id: 100, name: "Michael Shaun", total: "07:23", regular: "07:23", overtime: "-", ot2: "-", holiday: "-", icons: "https://i.pravatar.cc/300?img=1", badge: BADGE },
    { id: 101, name: "Ethan Lee", total: "08:28", regular: "08:00", overtime: "-", ot2: "-", holiday: "0.28", icons: "https://i.pravatar.cc/300?img=6", badge: BADGE1 },
    { id: 102, name: "Emily Baker", total: "09:53", regular: "05:20", overtime: "01:21", ot2: "-", holiday: "03:12", icons: "https://i.pravatar.cc/300?img=2", badge: BADGE2 },
    { id: 103, name: "Liam Carter", total: "10:46", regular: "07:34", overtime: "02:01", ot2: "-", holiday: "01:11", icons: "https://i.pravatar.cc/300?img=3", badge: BADGE3 },
    { id: 104, name: "Grace Kim", total: "12:59", regular: "06:46", overtime: "04:00", ot2: "01:10", holiday: "01:03", icons: "https://i.pravatar.cc/300?img=4", badge: BADGE4 },
    { id: 105, name: "Noah Williams", total: "16:44", regular: "07:12", overtime: "03:00", ot2: "02:12", holiday: "02:32", icons: "https://i.pravatar.cc/300?img=5", badge: BADGE5 },
    { id: 106, name: "Michael Shaun", total: "16:56", regular: "12:56", overtime: "03:00", ot2: "01:00", holiday: "-", icons: "https://i.pravatar.cc/300?img=7", badge: BADGE6 },
    { id: 107, name: "Liam Carter", total: "15:03", regular: "06:27", overtime: "04:12", ot2: "3:02", holiday: "1:22", icons: "https://i.pravatar.cc/300?img=8", badge: BADGE7 }
];
