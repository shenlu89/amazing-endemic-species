import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Amazing Endemic Species";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  const extraBold = await fetch(
    new URL("../public/fonts/Cantarell-ExtraBold.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  const regular = await fetch(
    new URL("../public/fonts/Cantarell-Regular.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div tw="flex flex-col bg-white w-full h-full justify-between p-12">
        <div tw="flex flex-col">
          <div tw="flex justify-center">
            <img
              width="150"
              height="150"
              tw="bg-white rounded-full"
              src={`${
                process.env.NODE_ENV === "development"
                  ? "http://localhost:3000"
                  : "https://aes.shenlu.me"
              }/logo.png`}
              alt="Amazing Endemic Species"
            />
          </div>
          <div
            tw="text-5xl justify-center mt-8 mb-4 font-extrabold tracking-tight"
            style={{ lineHeight: "80px" }}
          >
            Amazing Endemic Species
          </div>
          <div
            tw="text-3xl justify-center text-slate-600 tracking-tight"
            style={{ lineHeight: "80px" }}
          >
            Mapping amazing endemic species all over the world
          </div>
        </div>
        <div tw="flex justify-between">
          <div tw="flex items-center">
            <div tw="flex flex-col">
              <span tw="flex text-3xl font-extrabold mb-2">
                Created by @shenlu89
              </span>
              <span tw="flex text-2xl text-gray-600">
                https://aes.shenlu.me
              </span>
            </div>
          </div>
          <div tw="flex items-center">
            <img
              tw="w-24 h-24"
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://aes.shenlu.me"
              alt="Amazing Endemic Species"
            />
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Cantarell",
          data: extraBold,
          weight: 800,
          style: "normal",
        },
        {
          name: "Cantarell",
          data: regular,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
