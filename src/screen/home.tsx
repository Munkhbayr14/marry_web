import cover from "../manlaiImage/cover-2.jpg";
import cover_1 from "../manlaiImage/img-1.jpg";
import cover_4 from "../manlaiImage/img-2.jpg";
import cover_5 from "../manlaiImage/img-3.jpg";
import cover_8 from "../manlaiImage/img-4.jpg";
import cover_9 from "../manlaiImage/img-5.jpg";
import cover_10 from "../manlaiImage/img-7.png";
import dans from "../manlaiImage/lastFooter.png";
import { IoLogoInstagram } from "react-icons/io5";

import { SetStateAction, useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

export default function Home() {
  const [slides, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("5xl");
  const sizes = ["5xl"];

  const handleOpen = (size: any) => {
    setSize(size);
    onOpen();
  };

  return (
    <div>
      <div>
        <div className="border-2my-6 mx-5">
          <div className="flex justify-center items-center">
            <p className="italic text-[20px] mt-10  text-[#7f838c] font-serif">
              Хуримын урилга
            </p>
          </div>

          <div className="md:text-6xl text-4xl h-64 md:h-96 mx-auto flex flex-col items-center justify-center ">
            <h1 className="text-gray-600 italic font-serif ">Мөнхманлай </h1>{" "}
            <p className="text-gray-600 italic font-serif">&</p>
            <h1 className="text-gray-600 italic  font-serif">Ариунтэс</h1>
          </div>
          <div className="w-full">
            <img className="w-full" src={cover} alt="" />
          </div>
          <div className="md:text-2xl lg:text-3xl flex flex-col items-center justify-center">
            {/* <p className="pt-12 font-Sans text-pink-100 italic">
              Хуримын урилга
            </p> */}
            <div className="flex font-serif flex-col items-center justify-center p-12 pb-14">
              ♥<p className="font-serif">2024 оны 6-р сарын 15-ны өдөр</p>
              <p>Улаанбаатар зүүн чуулган</p>
              <p> 10:00 цагт</p>
            </div>
          </div>
        </div>

        <div className="bg-[#fcf5eb94] h-auto w-screen p-5">
          <div className="flex justify-between ">
            <p className="italic text-[14px]  text-[#7f838c] font-serif">
              Хуримын урилга
            </p>
            <p className="text-[#7f838c] text-[14px] italic font-serif">M&A</p>
          </div>

          <hr />
          <div className="flex font-serif flex-col items-center justify-center mt-16">
            <div className="my-5">
              <p className="text-[14px] ">Таныг бидний хуримын ёслолд </p>{" "}
              <p className="text-[14px]"> хүрэлцэн ирэхийг урьж байна </p>
            </div>
            ♥
            <p className="text-[14px] mt-5">
              Ганцаараа байснаас хоёул байх нь{" "}
            </p>
            <p className="text-[14px]">илүү дээр билээ. Тэгвэл тэдний зүтгэл</p>
            <p className="text-[14px] "> сайнаар хариулагдах болно.</p>
            <p className="text-[14px] pb-10">Номлогчийн үгс 4:9 </p>
            {/* <p className="text-[14px] ">
              Хүндэтгэсэн: М.Мөнхманлай & Б.Ариунтэс
            </p> */}
          </div>

          <div className="grid grid-cols-3 gap-1 mt-10 mb-10"></div>
        </div>

        <div className="bg-[#ffffff] h-auto w-screen p-5">
          <div className="flex justify-between ">
            <p className="italic text-[14px]  text-[#7f838c] font-serif">
              Хуримын урилга
            </p>
            <p className="text-[#7f838c] text-[14px] italic font-serif">M&A</p>
          </div>

          <hr />
          <div className=" mt-8 flex flex-col items-center justify-center">
            <h1 className="font-serif text-[25px]">Холбоо барих</h1>
            <table className="w-full md:w-[1000px]  mt-8 ">
              <tbody className="">
                <tr className="font-serif border border-solid border-l-0 border-r-0 ">
                  <td className=" text-md px-6 py-3 ">Мөнхманлай </td>
                  <td className="flex justify-end text-md px-6 py-3 ">
                    88567012{" "}
                  </td>
                </tr>
                <tr className=" font-serif border border-solid border-l-0 border-r-0 ">
                  <td className="text-md px-6 py-3  ">Аав Мөнхсайхан</td>
                  <td className="flex justify-end text-md px-6 py-3  ">
                    88929966
                  </td>
                </tr>
                <tr className="font-serif border border-solid border-l-0 border-r-0 ">
                  <td className="text-md px-6 py-3 "> Ээж Дэлгэрчимэг </td>
                  <td className="flex justify-end text-md px-6 py-3  ">
                    99022683
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full md:w-[1000px]  mt-8 ">
              <tbody className="">
                <tr className="font-serif border border-solid border-l-0 border-r-0 ">
                  <td className=" text-md px-6 py-3 "> Ариунтэс </td>
                  <td className=" flex justify-end text-md px-6 py-3 ">
                    88443927{" "}
                  </td>
                </tr>
                <tr className="font-serif border border-solid border-l-0 border-r-0 ">
                  <td className="text-md px-6 py-3  ">Аав Баярболд</td>
                  <td className="flex justify-end text-md px-6 py-3  ">
                    {" "}
                    99358265
                  </td>
                </tr>
                <tr className="border border-solid border-l-0 border-r-0 ">
                  <td className="font-serif text-md px-6 py-3 "> Ээж Орхон </td>
                  <td className="font-serif flex justify-end text-md px-6 py-3  ">
                    99759934
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-3 gap-1 mt-10 mb-10"></div>
        </div>

        <div className="bg-[#fcf5eb94] h-auto w-screen p-5">
          <div className="flex justify-between ">
            <p className="italic text-[14px]  text-[#7f838c] font-serif">
              Хуримын урилга
            </p>
            <p className="text-[#7f838c] text-[14px] italic font-serif">M&A</p>
          </div>

          <hr />
          <h1 className="font-serif flex justify-center pt-10 text-[30px] ">
            ♥ Зураг ♥
          </h1>
          <div className="w-full max-w-7xl p-1 pb-10 mx-auto pt-10 gap-1 space-y-1 columns-2">
            <img className="rounded-lg" src={cover_1} alt="" />

            <img className="rounded-lg" src={cover_4} alt="" />
            <img className="rounded-lg" src={cover_10} alt="" />
            <img className="rounded-lg" src={cover_5} alt="" />
            <img className="rounded-lg" src={cover_9} alt="" />
            <img className="rounded-lg" src={cover_8} alt="" />
          </div>
          <div className="flex justify-center items-center">
            <a
              href="https://www.instagram.com/pluto_munkhtes/?igsh=MXJkbnFjbnJtNjU4cg%3D%3D&utm_source=qr"
              className=" rounded-2xl  bg-[#e7b596] flex justify-center items-center  md:text-[24px]  md:p-3 p-1 pl-7 pr-7 text-white"
            >
              <p>
                <IoLogoInstagram className="font-bold text-[26px] mr-1" />
              </p>

              <p className="font-serif"> Дэлгэрэнгүй</p>
            </a>
          </div>
        </div>
        <div className="bg-[#ffffff] pt-3  h-auto w-screen">
          <div className="flex justify-between ">
            <p className="italic text-[14px]  text-[#7f838c] font-serif">
              Хуримын урилга
            </p>
            <p className="text-[#7f838c] text-[14px] italic font-serif">M&A</p>
          </div>
          <hr />
          <h1 className="flex font-serif justify-center pt-10 text-[25px]">
            Байршил
          </h1>
          <h1 className="flex font-serif  justify-center pt-10 text-[15px]">
            <u>♥Улаанбаатар зүүн чуулган♥ </u>
          </h1>

          <h1 className="font-serif flex justify-center pb-4  text-[15px]">
            БЗД 22-р хороо өлгийн 3-37 тоот
          </h1>
          <div className="flex justify-center">
            <button className=" rounded-2xl  bg-[#e7b596]  p-1 pl-7 pr-7 text-white">
              ♥
            </button>
          </div>
          <iframe
            className="w-screen p-5 h-90"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10695.247020883977!2d106.95975198065267!3d47.920679739523756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96911c8ad90ded%3A0x154015dc33d0e30a!2z0KPQu9Cw0LDQvdCx0LDQsNGC0LDRgCDQsdCw0L_RgtC40YHRgiDQt9Kv0q_QvSDRh9GD0YPQu9Cz0LDQvQ!5e0!3m2!1sen!2smn!4v1698212444861!5m2!1sen!2smn"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>

        <div className="bg-[#ffffff] p-3  h-auto w-screen">
          <div className="flex justify-between  ">
            <p className="italic text-[14px] mx-3 text-[#7f838c] font-serif">
              Хуримын урилга
            </p>
            <p className="text-[#7f838c] mx-3 text-[14px] italic font-serif">
              M&A
            </p>
          </div>
          <hr />
          <div className="w-full flex flex-col">
            <img src={dans} alt="" />
          </div>
        </div>

        <div className="bg-[#ffff] h-60 w-screen flex flex-col justify-center items-center">
          <h1 className="italic">Thank you!</h1>
          <h1 className="">♥</h1>
        </div>
      </div>
    </div>
  );
}
