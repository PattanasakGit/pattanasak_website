"use client";

import Image from 'next/image'
import { Data } from "@/store/Data";
import React, { useEffect } from "react";
import { IoMdCopy } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { LuFileCheck2 } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";
import { CustomText, TopicEffect } from "@/utils/ColorEffect";
import { MdEmail } from 'react-icons/md';

const ShowContact = 'w-full h-32 p-8 bg-[#ffffff22] rounded-[45px] border border-[#c6af71] flex justify-center items-center shadow-2xl'

const Contact: React.FC = () => {
    const [copied, setCopied] = React.useState(false);

    useEffect(() => {
      if (copied) {
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    },[copied])

    const hendleClickEmail = () => {
      navigator.clipboard
        .writeText("putjat145@gmail.com")
        .then(() => {
          setCopied(true);
        })
        .catch(() => {
          setCopied(false);
        });
    };
    const hendleClickIngedin = () => {
        window.open(Data.links.linkedin_url, "_blank");
    }
  return (
    <section className=" p-8 lg:pb-[20vh] rounded-[50px] w-[90%] sm:w-[85%] md:w-[90%] lg:w-[65%] xl:w-[55%] mb-4 pt-16">
      <TopicEffect className="text-center md:text-left text-[35px] ">CONTACT</TopicEffect>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-md h-[60%] min-h-[200px] mt-8">
            <Image
              src="/avatar/onefing.gif"
              alt="avatar"
              layout="fill"
              sizes="auto"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-8 py-[5vw] text-[20px] ">
          <div className={ShowContact}>
            <CustomText className="w-[90%] text-[20px] font-semibold px-4 text-center flex justify-center items-center gap-2">
              <MdEmail size={24}/> 
              <span className='w-full truncate text-start'>: Putjat145@gmail.com</span>
            </CustomText>
            <button name='btn-mail-in-contact'  onClick={hendleClickEmail} className="ml-4 hover:scale-[1.3]">
              <CustomText>
                {copied 
                  ?<LuFileCheck2 size={24}/>
                  :<IoMdCopy size={24}/>
                }
                  
              </CustomText>
            </button>
          </div>

          <div className={ShowContact}>
            <CustomText className="w-[90%] text-[20px] font-semibold px-4 text-center flex justify-center items-center gap-2">
              <FaLinkedin size={24}/> 
              <span className='w-full truncate text-start'>: Linkedin</span>
            </CustomText>
            <button name='btn-mail-in-contact'  onClick={hendleClickIngedin} className="ml-4 hover:scale-[1.3]">
              <CustomText>
                  <FiExternalLink size={24}/>
              </CustomText>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;