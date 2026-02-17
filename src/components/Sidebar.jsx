import { useEffect, useState } from "react";
import CHEVRON from "../assets/chevron.png";

export default function Sidebar({ isOpen, setIsOpen, active, setActive }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [openChildMenu, setOpenChildMenu] = useState(null);

  const menus = [
    { id: 1, title: "Home" },

    {
      id: 2,
      title: "My Info",
      children: [
        {
          childId: 201,
          childTitle: "Employees Info",
          grandchildren: [
            { grandchildId: 2011, grandchildTitle: "Personal Details" },
          ]
        }
      ]
    },

    {
      id: 3,
      title: "People",
      children: []
    },

    {
      id: 4,
      title: "Team Management",
      children: [
        {
          childId: 401,
          childTitle: "Timesheet",
          grandchildren: [
            { grandchildId: 4011, grandchildTitle: "Add Employee" },
            { grandchildId: 4012, grandchildTitle: "Employee List" }
          ]
        },
        {
          childId: 402,
          childTitle: "Reimbursement",
          grandchildren: [
            {
              grandchildId: 4021,
              grandchildTitle: "Reimbursement Employee"
            },
            { grandchildId: 4022, grandchildTitle: "Reimbursement List" }
          ]
        }
      ]
    },

    {
      id: 5,
      title: "Project Setup",
      children: [
        {
          childId: 501,
          childTitle: "Projects",
          grandchildren: []
        }
      ]
    },

    { id: 6, title: "Hiring", children: [] },
    { id: 7, title: "Report", children: [] }
  ];

  const handleClick = (item, parent) => {
    setActive(parent ? `${parent}/${item}` : item);
    setIsOpen(false);
  };

  useEffect(() => {
    const parts = active.split("/");
    setOpenMenu(parts[0] || null);
    setOpenChildMenu(parts[1] || null);
  }, [active]);
  console.log(active, 'active')
  return (
    <>
      {/* Mobile Overlay */}
      <div className={`fixed inset-0 bg-black/40 z-30 lg:hidden ${isOpen ? "block" : "hidden"}`} onClick={() => setIsOpen(false)} />
      <aside
        className={`fixed lg:static z-40 top-0 left-0 w-64 h-full bg-zinc-800 text-white p-4
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <h1 className="text-2xl font-bold mb-8">CORE</h1>

        <nav className="space-y-2">
          {menus.map((menu) => {
            const isParentActive = active === menu.title;
            const isParentIndicator = active === menu.title || active.startsWith(menu.title + "/");
            return (
              <div key={menu.id}>
                {/* ================= PARENT ================= */}
                <div onClick={() => {
                  menu.children?.length > 0 ? setOpenMenu(openMenu === menu.title ? null : menu.title) : handleClick(menu.title);
                }}
                  className={`relative p-2 pl-4 rounded-lg cursor-pointer
                  ${isParentActive ? "bg-white text-black" : "hover:bg-zinc-700"}`}
                >
                  {/* Active indicator */}
                  <div className={`absolute left-[-18px] top-1/2 -translate-y-1/2 h-8 w-1.5 rounded-r-full
                    ${isParentIndicator ? "bg-white opacity-100" : "opacity-0"}`} />
                  {menu.title}
                  {menu.children?.length > 0 && (
                    <img src={CHEVRON} className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 transition ${openMenu === menu.title ? "rotate-90" : ""}`} />
                  )}
                </div>

                {/* ================= CHILDREN ================= */}
                {menu.children?.length > 0 &&
                  openMenu === menu.title && (
                    <div className="ml-4 mt-1 space-y-1">
                      {menu.children.map((child) => {
                        const childPath = `${menu.title}/${child.childTitle}`;
                        const isChildActive = active === childPath;
                        return (
                          <div key={child.childId}>
                            {/* CHILD */}
                            <div onClick={() => { child.grandchildren?.length > 0 ? setOpenChildMenu(openChildMenu === child.childTitle ? null : child.childTitle) : handleClick(child.childTitle, menu.title); }}
                              className={`relative p-2 pl-4 rounded-lg cursor-pointer text-sm
                              ${isChildActive ? "bg-white text-black" : "hover:bg-zinc-700"}`}
                            >
                              {child.childTitle}
                              {child.grandchildren?.length > 0 && (
                                <img src={CHEVRON} className={`absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 transition
                                  ${openChildMenu === child.childTitle ? "rotate-90" : ""}`} />
                              )}
                            </div>

                            {/* ================= GRANDCHILD ================= */}
                            {child.grandchildren?.length > 0 &&
                              openChildMenu === child.childTitle && (
                                <div className="ml-4 mt-1 space-y-1">
                                  {child.grandchildren.map((g) => {
                                    const grandChildPath = `${menu.title}/${child.childTitle}/${g.grandchildTitle}`;
                                    const isGrandChildActive = active === grandChildPath;
                                    return (
                                      <div key={g.grandchildId} onClick={() => handleClick(`${child.childTitle}/${g.grandchildTitle}`, menu.title)}
                                        className={`p-2 pl-4 rounded-lg cursor-pointer text-sm
                                          ${isGrandChildActive ? "bg-white text-black" : "hover:bg-zinc-700"}`}>
                                        {g.grandchildTitle}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                          </div>
                        );
                      })}
                    </div>
                  )}
              </div>
            );
          })}
        </nav>

        <div className="pt-4 text-sm opacity-70">Settings</div>
      </aside>
    </>
  );
}
