import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegFileLines } from "react-icons/fa6";
import { MdOutlineHandyman } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiHomeOfficeLine } from "react-icons/ri";
import { TbReportMoney } from "react-icons/tb";
import { TiChartLine } from "react-icons/ti";
import { TbInvoice } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";

import { TiUserAddOutline } from "react-icons/ti";
import { TiDocumentAdd } from "react-icons/ti";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

export const navData = [
  { name: "Dashboard", path: "/", icon: MdOutlineSpaceDashboard },
  { name: "Projects", path: "/projects", icon: FaRegFileLines },
  { name: "Employees", path: "/employees", icon: MdOutlineHandyman },
  { name: "Consumers", path: "/clients", icon: RiHomeOfficeLine },
  { name: "Remuneration", path: "/clients", icon: TbReportMoney },
  { name: "Revenue", path: "/clients", icon: TiChartLine },
  { name: "Announcement", path: "/contact", icon: TbInvoice },
  { name: "Teams", path: "/about", icon: HiOutlineUserGroup },
  { name: "Settings", path: "/settings", icon: TbSettings },
];
export const extraNavData = [
  { name: "Create Employee", path: "/Create Employee", icon: TiUserAddOutline },
  { name: "Create Project", path: "/Create Project", icon: TiDocumentAdd },
  { name: "Create Client", path: "/Create Client", icon: MdOutlineAddHomeWork },
  {
    name: "Create Announcement",
    path: "/Create Task",
    icon: HiOutlineDocumentAdd,
  },
  { name: "Create Team", path: "/Create Team", icon: AiOutlineUsergroupAdd },
];
export const footerNavData = [
  { name: "Privacy Policy", path: "/privacy", icon: "privacy" },
  { name: "Terms of Service", path: "/terms", icon: "terms" },
  { name: "Support", path: "/support", icon: "support" },
  { name: "Feedback", path: "/feedback", icon: "feedback" },
];
export const socialNavData = [
  { name: "Facebook", path: "https://facebook.com", icon: "facebook" },
  { name: "Twitter", path: "https://twitter.com", icon: "twitter" },
  { name: "LinkedIn", path: "https://linkedin.com", icon: "linkedin" },
  { name: "Instagram", path: "https://instagram.com", icon: "instagram" },
];
export const adminNavData = [
  { name: "Dashboard", path: "/admin/dashboard", icon: "dashboard" },
  { name: "User Management", path: "/admin/users", icon: "users" },
  { name: "Settings", path: "/admin/settings", icon: "admin-settings" },
  { name: "Reports", path: "/admin/reports", icon: "reports" },
  { name: "Logs", path: "/admin/logs", icon: "logs" },
];
