import React from 'react'
import Image from 'next/image'
import { Button } from "../../components/ui/button"
import ArrowIcon from "../../assets/arrow_right_alt(1).svg"
import { BusinessEbooks } from "../../helper"

const Business: React.FC = () => {
    return (
        <div className='mt-[6.25rem] flex justify-center p-[8.75rem] bg-customwhite-color' style={{
            backgroundImage: `url(/images/business/Frame1000002798.png)`
        }}>
            <div className='max-w-[1800px] flex items-center gap-[5.81rem]'>
                <div className='relative w-[64vh] h-[90vh]'>
                    <Image
                        src='/images/business/2149322972(1)1.png'
                        alt='business'
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className='w-[854px]'>
                    <div>
                        <p className='text-custom-blue-color text-[32px]'>LEARN HOW TO GROW YOUR BUSINESS</p>
                    </div>
                    <div className='mt-[1.25rem] text-custom-green text-[42px] font-semibold'>
                        <p className='font-oxygen font-bold'>TOP PICKS ON BUSINESS STRATEGIES</p>
                        <p>EBOOKS FOR YOU</p>
                    </div>
                    <div className='mt-[2.5rem] text-[24px] text-custom-light-green-color font-sans font-light'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className='mt-[2.5rem]'>
                        <Button className='bg-custom-green rounded-none w-[229px] h-[62px]'>
                            EXPLORE NOW
                            <Image src={ArrowIcon} alt='arrow' width={20} height={20} />
                        </Button>
                    </div>
                    <div className='mt-[30px]'>
                        <p className='text-custom-blue-color font-oxygen text-[28px]'>Trending E-Books</p>
                        <div className='flex justify-center gap-[45px]'>
                            {BusinessEbooks.map((Ebooks, index) => (
                                <div
                                    key={index}
                                    style={{
                                        backgroundImage: `url(${Ebooks.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                    className='w-[280px] h-[280px] flex justify-center items-end mt-[10px] p-[30px]'
                                >
                                    <p className='font-oxygen text-[24px] text-customwhite-color text-center'>{Ebooks.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business