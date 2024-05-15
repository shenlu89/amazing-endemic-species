"use client";
import {
  ComponentProps,
  ReactElement,
  useCallback,
  useEffect,
  useState,
  Children,
} from "react";

import { LuCopy, LuCheck } from "react-icons/lu";

const CustomPre = ({ children, ...props }: any): ReactElement => {
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const timerId = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [isCopied]);

  const handleClick = useCallback<
    NonNullable<ComponentProps<"button">["onClick"]>
  >(async () => {
    const getTextContent = (children: any) => {
      let textContent = "";
      Children.map(children, (child) => {
        if (typeof child === "string" || typeof child === "number") {
          textContent += child;
        }
        children = child?.props?.children;
        if (children) {
          textContent += getTextContent(children);
        }
      });
      return textContent;
    };
    if (!navigator?.clipboard) {
      console.error("Access to clipboard rejected!");
    }
    try {
      await navigator.clipboard.writeText(getTextContent(children));
      setCopied(true);
    } catch {
      console.error("Failed to copy!");
    }
  }, [children]);

  const IconToUse = isCopied ? LuCheck : LuCopy;

  return (
    <pre className="relative m-0 bg-red-100 text-red-600" {...props}>
      <button onClick={handleClick} tabIndex={0} {...props}>
        <IconToUse
          className={`absolute top-2 right-2 w-8 h-8 float-right border rounded p-1 block ${
            isCopied
              ? "text-red-600 !bg-red-50 border-red-200"
              : "text-red-600 !bg-red-50 border-red-200"
          }`}
        />
      </button>
      {children}
    </pre>
  );
};

export default CustomPre;
