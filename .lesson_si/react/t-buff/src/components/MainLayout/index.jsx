import {
    useState,
    useEffect
} from 'react';
import {
    Tabbar,
} from 'react-vant';
import {
    HomeO,
    Search,
    FriendsO,
    SettingO,
    UserO
} from "@vant/icons";
import{
  Outlet,
  useNavigate,
  useLocation
} from 'react-router-dom';


//菜单栏选项
const tabs = [
    { icon: <HomeO />, title: '首页', path: '/home'},
    { icon: <Search />, title: '发现', path: '/find'},
    { icon: <FriendsO />, title: '库存', path: '/stock'},
    { icon: <SettingO />, title: '店铺', path: '/shop'},
    { icon: <UserO />, title: '我的账户', path: '/account'}
]

const MainLayout = () => {
    const [active, setActive] = useState(0)
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
      const index = tabs.findIndex((tab) => location.pathname.startsWith(tab.path));
      ;
      setActive(index!==-1?index:0);
    },[location])
    return (
        <>
            <Outlet />
            {/* tabbar */}
            <Tabbar value={active} onChange={
                (key) => { setActive(key);
                  navigate(tabs[key].path);
                }
            }>
                {tabs.map((tab, index) => (
                    <Tabbar.Item 
                        key={index} 
                        icon={tab.icon}
                    > 
                    {tab.title}
                    </Tabbar.Item>
                ))}
            </Tabbar>
        </>
    )
}

export default MainLayout;