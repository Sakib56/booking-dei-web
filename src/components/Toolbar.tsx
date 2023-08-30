import {
  BellOutlined,
  ExclamationCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Input, Space } from "antd";
import {
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";
import { FiHelpCircle } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import gridots from "../assets/gridots.png";
import { RootState } from "../store";

interface ToolbarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Toolbar = ({ collapsed, setCollapsed }: ToolbarProps) => {
  const { user } = useSelector((state: RootState) => state.auth);

  const notificationCount = 5;

  const items = [
    {
      label: (
        <Link to="/profile" className="flex items-center gap-2">
          <span>
            <AiOutlineUser />
          </span>
          My Account
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to="/settings" className="flex items-center gap-2">
          <span>
            <AiOutlineSetting />
          </span>
          Settings
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link to="/login" className="flex items-center gap-2">
          <span>
            <AiOutlineUser />
          </span>
          Login
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link to="/help" className="flex items-center gap-2">
          <span>
            <FiHelpCircle />
          </span>
          Help
        </Link>
      ),
      key: "3",
    },
  ];

  return (
    <>
      <div className="flex items-center gap-6">
        <Button
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="w-64 h-16"
        />
        <Input
          className="w-2/5"
          size="large"
          placeholder=" Search your booking"
          prefix={<AiOutlineSearch />}
        />
        <div className="space-x-3 ml-auto mr-6 flex items-center">
          <Badge count={notificationCount} className="cursor-pointer">
            <BellOutlined style={{ fontSize: "24px" }} />
            <ExclamationCircleOutlined className="text-red-500 absolute top-0 right-0 -mt-2 -mr-2" />
          </Badge>
          <div className="px-2 cursor-pointer">
            <span className="text-xl">
              <img src={gridots} alt="Dots" />
            </span>
          </div>
          <Dropdown
            menu={{
              items: items as [],
            }}
            trigger={["click"]}
          >
            <div className="cursor-pointer">
              <Space className="items-center" wrap size={16}>
                <Avatar size="large" icon={<UserOutlined />} />
              </Space>
            </div>
          </Dropdown>
          <div className="text-left">
            {user ? <p className="font-bold text-md">{user?.name}</p> : ""}
            <p className="font-semibold text-gray-600">{user?.type}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
