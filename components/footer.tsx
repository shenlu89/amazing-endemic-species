import type { NextPage } from "next";
import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export const runtime = "edge";

const Footer: NextPage = () => {
  return (
    <footer className="md:flex w-full items-center select-none text-slate-600">
      <div className="flex items-center flex-col-reverse md:flex-row md:mb-0 mb-4 justify-between w-full">
        <p className="m-4">
          © {`${new Date().getFullYear()} `}
          <Link
            href="https://shenlu.me"
            className="hover:text-black hover:underline underline-offset-[3px]"
            target={"_blank"}
          >
            Shen Lu
          </Link>
          . All rights reserved.
        </p>
        <ul className="flex items-center m-4">
          <li>
            <Link
              className="flex hover:text-black mx-2"
              href={"https://twitter.com/shenlu89"}
              target={"_blank"}
              title="X"
            >
              <FaXTwitter className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link
              className="flex hover:text-black dark:hover:text-white"
              href="https://github.com/shenlu89/amazing-endemic-species"
              target={"_blank"}
              title="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
