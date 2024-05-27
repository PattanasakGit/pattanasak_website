import React from "react";
import { CustomText, TopicEffect } from "@/utils/ColorEffect";
import { IconMail } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import Image from 'next/image'
import { Data } from "@/store/Data";

const CustomBTN = 'w-full h-32 p-8 bg-[#ffffff22] rounded-[50px] border border-[#c6af71] flex justify-center items-center shadow-2xl hover:scale-[1.1]'

const Contact: React.FC = () => {
    const hendleClickEmail = () => {
        window.open(Data.links.mail_url);
    }
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
        <div className="flex flex-wrap items-center justify-center gap-8 py-[5vw]">
          <button name='btn-mail-in-contact' className={CustomBTN} onClick={hendleClickEmail}>
            <CustomText>
                <IconMail stroke={1.5} size={100}/>
            </CustomText>
          </button>
          <button name='btn-linkedin-in-contact' className={CustomBTN} onClick={hendleClickIngedin}>
            <CustomText>
                <IconBrandLinkedin stroke={1.5} size={100}/>
            </CustomText>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;