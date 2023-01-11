
import { BsGithub, BsLinkedin, BsPrinterFill, BsInstagram } from 'react-icons/bs';
import { FaQuoteRight, FaRegFileCode, FaMailchimp } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<FaQuoteRight size="16" />} text="💡 About Me"/>
        <SideBarIcon icon={<FaRegFileCode size="20" />} text="💡 Portfolio"/>
        <SideBarIcon icon={<BsPrinterFill size="20" />} text="💡 Resume"/>
        <SideBarIcon icon={<FaMailchimp size="22" />} text ="💡 Contact Me"/>
        <SideBarIcon icon={<BsGithub size="20" />} text="💡 My Github"/>
        <SideBarIcon icon={<BsLinkedin size="20" />} text="💡 My LinkedIn"/>
        <SideBarIcon icon={<BsInstagram size="20" />} text="💡 My Instagram"/>

    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

export default SideBar;