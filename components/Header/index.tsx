import Link from "next/link";
import { FaBars } from "react-icons/fa";
import ButtonComponent from "../commons/Button";
import { navs } from "../../assets/data/navs";
import { DropdownMenu } from "@radix-ui/themes";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import { Logo } from "../../assets/imgs";

const HeaderComponent = () => {
  return (
    <header className="shadow-lg sticky bg-white z-50 top-0 left-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4 lg:py-0">
          <div className="flex items-center space-x-4">
            <Image src={Logo} alt="logo" className="w-40 h-14 object-contain" />
            <nav className="hidden lg:flex">
              <ul className="flex items-center space-x-5">
                {navs.map((item) => {
                  return (
                    <DropdownMenu.Root key={item.link}>
                      <DropdownMenu.Trigger>
                        <div className="text-base cursor-pointer">
                          <h3 className="text-gray-900 flex items-center space-x-1 hover:text-blue-600">
                            {item.name}
                            <span className="ml-1">
                              <FaAngleDown size={14} />
                            </span>
                          </h3>
                        </div>
                      </DropdownMenu.Trigger>
                    </DropdownMenu.Root>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="#login" className="text-lg">
              Log In
            </Link>
            <ButtonComponent variant="text-white text-lg font-normal p-4 bg-blue-600">
              Get Trello for free
            </ButtonComponent>
          </div>
          <FaBars size={24} className="flex lg:hidden" />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
