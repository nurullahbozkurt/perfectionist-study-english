import { createContext, useContext, useRef, useState } from "react";

interface IAppContext {
    headerHeight: number;
    setHeaderHeight: (height: number) => void;
    isReviewModalOpen: boolean;
    setIsReviewModalOpen: (isOpen: boolean) => void;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
    logoRef?: React.RefObject<HTMLDivElement>;
    sidebarRef?: React.RefObject<HTMLDivElement>;
    contentRef?: React.RefObject<HTMLDivElement>;
    maxSidebarRef?: React.RefObject<HTMLDivElement>;
    maxToolbarRef?: React.RefObject<HTMLDivElement>;
    miniSidebarRef?: React.RefObject<HTMLDivElement>;
    openNav?: () => void;


}

const AppContext = createContext<IAppContext>({} as IAppContext);
const useApp = () => useContext(AppContext);

interface IProps {
    children: React.ReactNode;
}

const AppProvider = ({ children }: IProps) => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)

    const logoRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const maxSidebarRef = useRef<HTMLDivElement>(null);
    const maxToolbarRef = useRef<HTMLDivElement>(null);
    const miniSidebarRef = useRef<HTMLDivElement>(null);


    const openNav = () => {
        if (sidebarRef && maxSidebarRef && miniSidebarRef && maxToolbarRef && logoRef && contentRef) {
            if (sidebarRef.current?.classList.contains('-translate-x-48')) {
                // max sidebar 
                sidebarRef.current?.classList.remove("-translate-x-48");
                sidebarRef.current?.classList.add("translate-x-none");
                maxSidebarRef.current?.classList.remove("hidden");
                maxSidebarRef.current?.classList.add("flex");
                miniSidebarRef.current?.classList.remove("flex");
                miniSidebarRef.current?.classList.add("hidden");
                maxToolbarRef.current?.classList.add("translate-x-0");
                maxToolbarRef.current?.classList.remove("translate-x-24", "scale-x-0");
                logoRef.current?.classList.remove("ml-12");
                contentRef.current?.classList.remove("ml-12");
                contentRef.current?.classList.add("ml-12", "md:ml-60");
                setIsSidebarOpen(true);
                console.log('open');
            } else {
                // mini sidebar
                sidebarRef.current?.classList.add("-translate-x-48");
                sidebarRef.current?.classList.remove("translate-x-none");
                maxSidebarRef.current?.classList.add("hidden");
                maxSidebarRef.current?.classList.remove("flex");
                miniSidebarRef.current?.classList.add("flex");
                miniSidebarRef.current?.classList.remove("hidden");
                maxToolbarRef.current?.classList.add("translate-x-24", "scale-x-0");
                maxToolbarRef.current?.classList.remove("translate-x-0");
                logoRef.current?.classList.add('ml-12');
                contentRef.current?.classList.remove("ml-12", "md:ml-60");
                contentRef.current?.classList.add("ml-12");
                setIsSidebarOpen(false);
                console.log('close');
            }
        }
    }


    return (
        <AppContext.Provider value={{ headerHeight, setHeaderHeight, isReviewModalOpen, setIsReviewModalOpen, isSidebarOpen, setIsSidebarOpen, contentRef, logoRef, maxSidebarRef, maxToolbarRef, miniSidebarRef, openNav, sidebarRef }} >
            {children}
        </AppContext.Provider>
    );

};
export { AppProvider, useApp };
