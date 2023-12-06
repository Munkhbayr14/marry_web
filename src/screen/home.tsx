// import coverImage from "../images/3.jpg";
// import cover_1 from "../images/1.jpg";
// import cover_2 from "../images/2.jpg";
// import cover_4 from "../images/4.jpg";
// import cover_5 from "../images/5.jpg";
// import cover_6 from "../images/6.jpg";
// import cover_7 from "../images/7.jpg";
// import cover_8 from "../images/gift.jpg";
// import cover from "../images/cover.jpg"
import cover from "../images_kherlen/3.jpg"
import cover_1 from "../images_kherlen/1.jpg"
import cover_4 from "../images_kherlen/4.jpg"
import cover_5 from "../images_kherlen/5.jpg"
import cover_8 from "../images_kherlen/8.jpg"
import cover_9 from "../images_kherlen/9.jpg"
import dans from "../images_kherlen/dans.jpg"

export default function Home() {
    return (
        <div>
            <div className="border-2 border-pink-100 my-6 mx-5">
                <div className="md:text-6xl text-4xl h-64 md:h-96 mx-auto flex flex-col items-center justify-center ">
                    <h1 className="text-gray-700 font-serif">С.Хэрлэн </h1>
                    <h1 className="text-gray-700  font-serif">Э.Батцэцэг</h1>
                </div>
                <div className="w-full">
                    <img className="w-full" src={cover} alt="" />
                </div>
                <div className="md:text-2xl lg:text-3xl flex flex-col items-center justify-center">
                    <p className="pt-12 font-Sans text-pink-100 italic">Wedding invitation</p>
                    <div className="flex font-serif flex-col items-center justify-center p-12 pb-14">
                        ♥
                    <p className="font-serif">2023оны 12сарын 16өдөр</p>
                   
                    <p >Улаанбаатар зүүн чуулган</p>
                     <p> 11:00 цагаас</p>
                    </div>
              
                </div>
            </div>
         
             <div className="bg-[#fcf5eb94] h-auto w-screen p-5">
                <div className="flex justify-between ">
                    <p className="italic text-[14px]  text-[#7f838c] font-serif">Wedding invitation</p>
                    <p className="text-[#7f838c] text-[14px] italic font-serif">11/11</p>  
                </div>
         
                <hr />
                <div className="flex font-serif flex-col items-center justify-center ">
                    <h1 className="text-[25px] p-8">Таныг урьж байна</h1>

                    {/* {/* <p className=" text-[14px] text-justify px-16 pb-10">Бурханы хайр, нигүүсэл, нэг итгэл дотор уулзсан бид хойшдоо нэгэн гэр бүлийг бий болгож өнгөрсөн хугацаанд хайрлаж, бүхий л зүйлээ зориулж ирсэн эцэг эх, ах дүү, хамаатан садан, хайрт ахан дүүс, Бурханыхаа өмнө хайрын тангараг өргөх гэж байна
</p> */}
                    ♥
          
                    <p className="text-[14px]">Бурханы хайр,нигүүсэл,</p>
                    <p className="text-[14px]">нэг итгэл дотроо</p>
                    <p className="text-[14px]">учирсан  бид хойшдоо</p>
                    <p className="text-[14px]">нэгэн шинэ гэр бүлийг бий болгон</p>
                    <p className="text-[14px]">айл гэр болон гал</p>
                    <p className="text-[14px]">голомтоо бадраах гэж байна. </p>
                    <p className="text-[14px]">Ганцаараа байснаас хоёул байх нь илүү </p>
                    <p className="text-[14px]">дээр билээ. Тэгвэл тэдний зүтгэл сайнаар</p>
                    <p className="text-[14px] ">  хайрын тангараг өргөх гэж байна.</p>
                       <p className="text-[14px] pb-10">Номлогчийн үгс 4:9     </p>
                 

                    <p className="text-[14px] ">Хүндэтгэсэн: С. Хэрлэн & Э. Батцэцэг</p> 
           

                    
                    
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
                    <h1 className="font-serif text-[25px]" >Холбоо барих</h1>
                    <table className="w-full md:w-[1000px]  mt-8 ">
                          <tbody className="">
    <tr className="font-serif border border-solid border-l-0 border-r-0 ">
        <td className=" text-md px-6 py-3 ">С.Хэрлэн </td>
        <td className="flex justify-end text-md px-6 py-3 ">90641224 </td>
    </tr>
    <tr className=" font-serif border border-solid border-l-0 border-r-0 ">
      <td className="text-md px-6 py-3  ">Аав Сод-Оргил</td>
      <td className="flex justify-end text-md px-6 py-3  ">95582558</td>
    </tr>
    <tr className="font-serif border border-solid border-l-0 border-r-0 ">
      <td className="text-md px-6 py-3 "> Ээж Халзанхүүхэн </td>
      <td className="flex justify-end text-md px-6 py-3  ">86652282</td>
    </tr>
  </tbody>
                    </table>     

                          <table className="w-full md:w-[1000px]  mt-8 ">
                          <tbody className="">
    <tr className="font-serif border border-solid border-l-0 border-r-0 ">
        <td className=" text-md px-6 py-3 "> Э.Батцэцэг </td>
        <td className=" flex justify-end text-md px-6 py-3 ">92050529 </td>
    </tr>
    <tr className="font-serif border border-solid border-l-0 border-r-0 ">
      <td className="text-md px-6 py-3  ">Аав Эрдэнэбилэг</td>
      <td className="flex justify-end text-md px-6 py-3  ">99450023</td>
    </tr>
    <tr className="border border-solid border-l-0 border-r-0 ">
      <td className="font-serif text-md px-6 py-3 ">  Ээж Цэнджав </td>
      <td className="font-serif flex justify-end text-md px-6 py-3  ">85276886</td>
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
                <h1 className="font-serif flex justify-center pt-10 text-[30px] ">Зураг</h1>
                <div className="w-full max-w-7xl p-1 pb-10 mx-auto pt-10 gap-1 columns-2">
              
                   
                    <img src={cover_5} alt="" />
                                   
    
                    <img src={cover_1} alt="" />
                        
                    <img src={cover} alt="" />
                                <img src={cover_4} alt="" />
                               <img src={cover_9} alt="" />
                    <img src={cover_8} alt="" />
          
         

                    
       
                </div>
            </div>
               <div className="bg-[#ffffff] pt-3  h-auto w-screen">
                <div className="flex justify-between ">
                    <p className="italic text-[14px]  text-[#7f838c] font-serif">Wedding invitation</p>
                    <p className="text-[#7f838c] text-[14px] italic font-serif">11/11</p>  
                </div>
                <hr />
                <h1 className="flex font-serif justify-center pt-10 text-[25px]">Байршил</h1>
                <h1  className="flex font-serif  justify-center pt-10 text-[15px]"><u>♥Улаанбаатар зүүн чуулган♥ </u></h1>
               
                <h1 className="font-serif flex justify-center pb-4  text-[15px]">БЗД 22-р хороо өлгийн 3-37 тоот</h1>
                <div className="flex justify-center">
                    <button className=" rounded-2xl  bg-[#e7b596]  p-1 pl-7 pr-7 text-white">♥</button>
                </div>
                <iframe className="w-screen p-5 h-90" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10695.247020883977!2d106.95975198065267!3d47.920679739523756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96911c8ad90ded%3A0x154015dc33d0e30a!2z0KPQu9Cw0LDQvdCx0LDQsNGC0LDRgCDQsdCw0L_RgtC40YHRgiDQt9Kv0q_QvSDRh9GD0YPQu9Cz0LDQvQ!5e0!3m2!1sen!2smn!4v1698212444861!5m2!1sen!2smn" width="600" height="450" loading="lazy" ></iframe>

            </div>


                  <div className="bg-[#ffffff] p-3  h-auto w-screen">
                <div className="flex justify-between  ">
                    <p className="italic text-[14px]  text-[#7f838c] font-serif">Wedding invitation</p>
                    <p className="text-[#7f838c] text-[14px] italic font-serif">11/11</p>  
                   
                </div>
                <hr />
                   <div className="w-full flex flex-col">
                        <img src={dans} alt="" />
                    </div>
              
              
   

            </div>

               <div className="bg-[#ffff] h-60 w-screen flex flex-col justify-center items-center">
         
                    <h1 className="italic">Thank you!</h1>
                    <h1>♥</h1>
          
                </div>


        </div>
    )
} 