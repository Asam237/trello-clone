import Image from "next/image";
import { footer, footer2 } from "../../assets/data/footer";
import { Logo1 } from "../../assets/imgs";
import Link from "next/link";
import { DropdownMenu } from "@radix-ui/themes";
import { FaAngleDown, FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="bg-[#172B4D] py-8 lg:py-8">
      <div className="container mx-auto lg:w-10/12">
        <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          <div>
            <Image alt="logo" height={180} width={180} src={Logo1} />
          </div>
          {footer.map((item) => {
            return (
              <div key={item.path} className="mx-4 lg:mx-0">
                <h2 className="text-lg text-white">{item.title}</h2>
                <p className="text-xs  text-white">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-10 my-4 h-[1px] bg-gray-500"></div>
      <div className="container mx-auto lg:w-10/12">
        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center mx-4 lg:mx-10">
          <div>
            <nav>
              <ul className="flex items-start lg:items-center space-x-2 text-xs text-white flex-col lg:flex-row space-y-2 lg:space-y-0">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <div className="text-base cursor-pointer">
                      <h3 className="text-white flex items-center space-x-1 text-lg">
                        <span>
                          <FaGlobe className="mr-3" />
                        </span>
                        English
                        <span className="mx-3 lg:mx-4">
                          <FaAngleDown size={14} />
                        </span>
                      </h3>
                    </div>
                  </DropdownMenu.Trigger>
                </DropdownMenu.Root>
                {footer2.map((item) => {
                  return (
                    <Link
                      href={item.path}
                      className="cursor-pointer hover:underline"
                      key={item.path}
                    >
                      {item.title}
                    </Link>
                  );
                })}
                <li>
                  <p>Copyright © 2023 Atlassian</p>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <ul className="flex items-center space-x-3">
              <li>
                <FaInstagram className="border rounded-full p-1 text-white" size={28}/>
              </li>
              <li>
                <FaFacebook className="border rounded-full p-1 text-white" size={28}/>
              </li>
              <li>
                <FaLinkedin className="border rounded-full p-1 text-white" size={28}/>
              </li>
              <li>
                <FaTwitter className="border rounded-full p-1 text-white" size={28}/>
              </li>
              <li>
                <FaYoutube className="border rounded-full p-1 text-white" size={28}/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
