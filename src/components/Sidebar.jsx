import { useEffect, useState } from "react";
import CHEVRON from "../assets/chevron.png";
import LOGO from "../assets/companylogo.png";
import MULTICHEVRON from "../assets/multichevron.png";
import SETTINGS from "../assets/settings.png";
import { useLocation, useNavigate } from "react-router-dom";
import { menus } from "./Helper/DummyData";


export default function Sidebar({ isOpen, setIsOpen, }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [openChildMenu, setOpenChildMenu] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const path = location.pathname;
    menus.forEach((menu) => {
      if (path.startsWith(menu.route)) {
        setOpenMenu(menu.title);
        menu.children?.forEach((child) => {
          child.grandchildren?.forEach((g) => {
            if (path === g.route) {
              setOpenChildMenu(child.childTitle);
            }
          });
        });
      }
    });
  }, [location.pathname]);

  const handleNavigate = (route) => {
    navigate(route);
  };
  console.log(isOpen, 'isOpen')
  return (
    <>

      <aside className={`  fixed lg:static top-0 left-0 z-40 h-screen lg:h-auto w-72 max-w-[85%]
    bg-[#3D3936] text-white p-4 m-0 lg:m-4 border lg:rounded-[20px] flex flex-col transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 overflow-y-auto display: ${isOpen ? "block" : "hidden"}`}>
        <div>
          <div className="flex items-center justify-between mb-10"><img src={LOGO} alt="Logo" /><img src={MULTICHEVRON} className="w-4 h-4 cursor-pointer" onClick={() => setIsOpen(prev => !prev)} /></div>
          <nav className="space-y-2">
            {menus.map((menu) => {
              const isParentActive = location.pathname === menu.route;
              const isParentIndicator = location.pathname === menu.route || location.pathname.startsWith(menu.route)

              return (
                <div key={menu.id}>
                  {/* ================= PARENT ================= */}
                  <div onClick={() => {
                    console.log(location.pathname, '1')
                    console.log(menu.route, '2')
                    console.log(isParentActive, 'isParentActive')
                    console.log(isParentIndicator, 'isParentIndicator')
                    menu.children?.length ? setOpenMenu(openMenu === menu.title ? null : menu.title) : handleNavigate(menu.route)
                  }}
                    className={`relative p-2 pl-4 rounded-lg cursor-pointer
                  ${isParentActive ? "bg-white text-black" : "hover:bg-zinc-700"}`}
                  >
                    <div className={`absolute left-[-18px] top-1/2 -translate-y-1/2 h-8 w-1.5 rounded-r-full
                    ${isParentIndicator ? "bg-white opacity-100" : "opacity-0"}`} />
                    <img src={menu.icon} alt={menu.title} className={`w-5 h-5 mr-2 inline-block ${isParentActive ? "invert" : "opacity-100"}`} />
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
                          const isChildActive = location.pathname === child.route;
                          return (
                            <div key={child.childId}>
                              <div onClick={() => {
                                console.log(isChildActive, 'isChildActive')
                                child.grandchildren?.length ? setOpenChildMenu(openChildMenu === child.childTitle ? null : child.childTitle) : handleNavigate(child.route)
                              }}
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
                                      const isGrandChildActive = location.pathname === g.route;
                                      return (
                                        <div key={g.grandchildId} onClick={() => {
                                          handleNavigate(g.route)
                                        }}
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
        </div>
        <div className="mt-auto text-sm opacity-70 border p-4 border-zinc-700 rounded-[15px] flex items-center cursor-pointer">
          <img src={SETTINGS} alt="Settings" className={`w-5 h-5 mr-2 inline-block "opacity-100"}`} />
          Settings
        </div>
      </aside>
    </>
  );
}
