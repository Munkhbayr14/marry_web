import coverImage from "../images/3.jpg";
import cover_1 from "../images/1.jpg";
import cover_2 from "../images/2.jpg";
import cover_4 from "../images/4.jpg";
import cover_5 from "../images/5.jpg";
import cover_6 from "../images/6.jpg";
import cover_7 from "../images/7.jpg";

export default function Home() {
    return (
        <div>
            <div className="border-2 border-pink-100 my-6 mx-5">
                <div className="md:text-6xl text-4xl h-64 md:h-96 mx-auto flex flex-col items-center justify-center ">
                    <h1 className="text-gray-700 font-Sans">М.Уламбаяр </h1>
                    <h1 className="text-gray-700  font-Sans">Б.Ануужин</h1>
                </div>
                <div className="w-full">
                    <img className="w-full" src={coverImage} alt="" />
                </div>
                <div className="md:text-2xl lg:text-3xl flex flex-col items-center justify-center">
                    <p className="pt-12 font-Sans text-pink-100 italic">Wedding invitation</p>
                    <div className="flex font-Sans flex-col items-center justify-center p-12 pb-14">
                    <p>2023оны 11сарын 11өдөр</p>
                    <p>2023оны 11сарын 11өдөр</p>
                    <p>хаана</p>
                    <p>хаана</p>
                    </div>
              
                </div>
            </div>
         
             <div className="bg-[#fcf5eb94] h-auto w-screen p-5">
                <div className="flex justify-between ">
                    <p className="italic text-[14px]  text-[#7f838c] font-serif">Wedding invitation</p>
                    <p className="text-[#7f838c] text-[14px] italic font-serif">11/11</p>  
                </div>
         
                <hr />
                <div className="flex flex-col items-center justify-center">
               <p >Бурханы хайр, нигүүсэл, нэг итгэл дотор уулзсан бид хойшдоо нэгэн гэр бүлийг бий болгож өнгөрсөн хугацаанд хайрлаж, бүхий л зүйлээ зориулж ирсэн эцэг эх, ах дүү, хамаатан садан, хайрт ахан дүүс, Бурханыхаа өмнө хайрын тангараг өргөх гэж байна</p>
                    
                </div>

                <div className="grid grid-cols-3 gap-1 mt-10 mb-10">
    
                </div>
            </div>

                   <div className="bg-[#ffffff] h-auto w-screen p-5">
                <div className="flex justify-between ">
                    <p className="italic text-[14px]  text-[#7f838c] font-serif">Wedding invitation</p>
                    <p className="text-[#7f838c] text-[14px] italic font-serif">11/11</p>  
                </div>
         
                <hr />
                <div className=" mt-8 flex flex-col items-center justify-center">
                    <h1>Холбоо барих</h1>
                    <table className="w-full md:w-[1000px]  mt-8 ">
                          <tbody className="">
    <tr className="border border-solid border-l-0 border-r-0 ">
        <td className=" text-md px-6 py-3 ">М.Уламбаяр </td>
        <td className=" text-md px-6 py-3 ">86641614 </td>
    </tr>
    <tr className="border border-solid border-l-0 border-r-0 ">
      <td className="text-md px-6 py-3  ">Аав Мөнхбаатар</td>
      <td className="text-md px-6 py-3  ">80209036</td>
    </tr>
    <tr className="border border-solid border-l-0 border-r-0 ">
      <td className="text-md px-6 py-3 "> Ээж Ариунтуяа </td>
      <td className="text-md px-6 py-3  ">80209085</td>
    </tr>
  </tbody>
                    </table>     

                          <table className="w-full md:w-[1000px]  mt-8 ">
                          <tbody className="">
    <tr className="border border-solid border-l-0 border-r-0 ">
        <td className=" text-md px-6 py-3 ">Б.Ануужин </td>
        <td className=" text-md px-6 py-3 ">86040900 </td>
    </tr>
    <tr className="border border-solid border-l-0 border-r-0 ">
      <td className="text-md px-6 py-3  ">Аав Баяржаргал</td>
      <td className="text-md px-6 py-3  ">88719843</td>
    </tr>
    <tr className="border border-solid border-l-0 border-r-0 ">
      <td className="text-md px-6 py-3 ">  Ээж Найдалмаа  </td>
      <td className="text-md px-6 py-3  ">88701169</td>
    </tr>
  </tbody>
                  </table>   
                </div>
                <div className="grid grid-cols-3 gap-1 mt-10 mb-10">
    
                </div>
            </div>

               <div className="bg-[#fcf5eb94] h-auto w-screen p-5">
                <div className="flex justify-between ">
                    <p className="italic text-[14px]  text-[#7f838c] font-serif">Wedding invitation</p>
                    <p className="text-[#7f838c] text-[14px] italic font-serif">11/11</p>  
                </div>
         
                <hr />
                <h1 className="flex justify-center pt-10 text-[22px]">Зураг</h1>
                <div className="w-full max-w-7xl p-1 pb-10 mx-auto pt-10 gap-1 columns-2">
                    <img src={cover_1} alt="" />
                   
                    <img src={cover_5} alt="" />
                     <img src={cover_7} alt="" />
                    <img src={cover_6} alt="" />
                    <img src={cover_4} alt="" />
                      <img src={cover_2} alt="" />
       
                </div>
            </div>
               <div className="bg-[#ffffff] h-auto w-screen p-5">
                <div className="flex justify-between ">
                    <p className="italic text-[14px]  text-[#7f838c] font-serif">Wedding invitation</p>
                    <p className="text-[#7f838c] text-[14px] italic font-serif">11/11</p>  
                </div>
                <hr />
                <h1 className="flex justify-center pt-10 text-[25px]">Байршил</h1>
                <h1  className="flex  justify-center pt-10 text-[22px]"><u>♥Улаанбаатар зүүн чуулган♥ </u></h1>
               
                <h1 className="flex justify-center pb-4  text-[22px]">Улаанбаатар зүүн чуулган</h1>
                <div className="flex justify-center">
                    <button className=" rounded-2xl  bg-[#e7b596]  p-1 pl-7 pr-7 text-white">86641614</button>
                </div>
                <iframe className="w-screen p-10 h-90" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10695.247020883977!2d106.95975198065267!3d47.920679739523756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96911c8ad90ded%3A0x154015dc33d0e30a!2z0KPQu9Cw0LDQvdCx0LDQsNGC0LDRgCDQsdCw0L_RgtC40YHRgiDQt9Kv0q_QvSDRh9GD0YPQu9Cz0LDQvQ!5e0!3m2!1sen!2smn!4v1698212444861!5m2!1sen!2smn" width="600" height="450" loading="lazy" ></iframe>

            </div>

               <div className="bg-[#fff7f0] h-60 w-screen p-5 flex flex-col justify-center items-center">
         
                    <h1 className="italic">Thank you!</h1>
                    <h1>♥</h1>
          
                </div>


        </div>
    )
} 