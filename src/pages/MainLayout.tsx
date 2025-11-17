import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet, useNavigate } from "react-router-dom";




export default function MainLayout() {
    const buttons = [
        { label: "الاحصائيات", path: "/Stat" },
        { label: "السجل", path: "/Log" },
        { label: "الجداول", path: "/Tables" },
        { label: "الطلبات", path: "/Requests" },
    ];
    const navigate = useNavigate();
    return (
        <div className="">
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

                <SidebarProvider>
                    <Sidebar >

                        <SidebarHeader>
                            <h1 className="text-xl bold  font-bold   text-center   ">Spot</h1>
                            {/* hnb2a n7ot el logo ba3deen  */}


                        </SidebarHeader>
                        <SidebarContent >
                            <div className=" flex flex-col text-start w-full ">
                                {buttons.map((btn) => (
                                    <Button
                                        key={btn.path}
                                        variant="ghost"
                                        onClick={() => navigate(btn.path)}
                                        className="text-start"
                                    >
                                        {btn.label}
                                    </Button>
                                ))}
                            </div>
                        </SidebarContent>
                    </Sidebar>

                    <div className="grow  flex flex-col rounded   ">
                        <div className="  flex justify-between items-center border-b-2 mb-5">

                            <SidebarTrigger />
                            <ModeToggle />


                        </div>
                        <div className="outlet grow   ">
                            <main >
                                <Outlet />
                            </main>
                        </div>
                    </div>



                </SidebarProvider>
            </ThemeProvider>
        </div>
    )
}
