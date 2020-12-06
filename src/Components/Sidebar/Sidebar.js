import { Chat, EmojiFlags, ExpandMoreOutlined, LocalHospital, People, Storefront, VideoLibrary } from "@material-ui/icons";
import React from "react";
import './sidebar.css'
import SidebarRow from "./SidebarRow/SidebarRow";

function Sidebar() {
	return <div className="sidebar">
        <SidebarRow src='https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2019/05/30/sachin.jpg?itok=ico_A-Oe' title='Sachin Tendulkar' />
        <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center'/>
        <SidebarRow Icon={EmojiFlags} title='Pages'/>
        <SidebarRow Icon={People} title='Friends'/>
        <SidebarRow Icon={Chat} title='Messenger'/>
        <SidebarRow Icon={Storefront} title='Marketplace'/>
        <SidebarRow Icon={VideoLibrary} title='Videos'/>
        <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace'/>
    </div>;
}

export default Sidebar;
