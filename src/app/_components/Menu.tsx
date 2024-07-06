import React from 'react';
import Image from 'next/image';
interface MenuProps {
  toggleMenu: () => void;
}

export const Menu: React.FC<MenuProps> = ({ toggleMenu }) => {
  // toggleMenu 함수 타입 지정
  return (
    <div
      className='inline-flex flex-col items-start gap-10 relative bg-[#434343] w-full h-full z-50'
      onClick={toggleMenu}
    >
      {' '}
      {/* 클릭 이벤트 추가 */}
      <header className='flex flex-col w-full items-center px-0 py-[15px] relative flex-[0_0_auto] bg-magazine-bcomblack-5 backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)]'>
        <div className='flex w-full items-center justify-between px-5 py-0 relative flex-[0_0_auto]'>
          <div className='flex w-[182px] items-center gap-5 relative'>
            <Image
              src='/img/Search.svg'
              alt='Search'
              width={67}
              height={19.2}
            />
            <div className="relative w-[67px] [font-family:'Yink-Regular',Helvetica] font-normal text-white text-[19.2px] tracking-[0] leading-5">
              <Image
                src='/img/Login.svg'
                alt='Login'
                width={67}
                height={19.2}
              />
            </div>
            <div className='inline-flex flex-col items-start relative flex-[0_0_auto] mr-[-13.33px]'>
              <div className='flex items-start relative self-stretch w-full flex-[0_0_auto]'>
                <div className='relative max-w-[21.33px] w-[21.33px] h-6' />
              </div>
            </div>
          </div>
          <img
            className='relative flex-[0_0_auto] mr-[-0.39px]'
            alt='Container'
            src='/img/container.svg'
          />
        </div>
      </header>
      <div className='flex flex-col w-full items-start gap-2.5 p-2.5 relative flex-[0_0_auto]'>
        <div className='relative w-[265px] h-[53px]'>
          <div className="absolute w-[68px] h-8 top-[9px] left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-3xl tracking-[0] leading-5">
            New
          </div>
        </div>
        <div className='relative w-[265px] h-[53px]'>
          <div className="absolute w-[143px] h-8 top-[9px] left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-3xl tracking-[0] leading-5">
            Magazine
          </div>
        </div>
        <div className='relative w-[265px] h-[53px]'>
          <div className="absolute w-[77px] h-8 top-[9px] left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-3xl tracking-[0] leading-5">
            Book
          </div>
        </div>
        <div className='relative w-[265px] h-[53px]'>
          <div className="absolute w-[100px] h-8 top-[9px] left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-3xl tracking-[0] leading-5">
            Goods
          </div>
        </div>
        <div className='relative w-[265px] h-[53px]'>
          <div className="absolute w-[164px] h-8 top-[9px] left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-3xl tracking-[0] leading-5">
            Newsletter
          </div>
        </div>
        <div className='relative w-[265px] h-[53px]'>
          <div className="absolute w-[85px] h-8 top-[9px] left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-3xl tracking-[0] leading-5">
            Index
          </div>
        </div>
        <div className='relative w-[265px] h-[53px]'>
          <div className="absolute w-[156px] h-8 top-[9px] left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-3xl tracking-[0] leading-5">
            Subscribe
          </div>
        </div>
        <div className='relative w-[265px] h-[53px]' />
        <div className='relative w-[265px] h-[53px]' />
        <div className='inline-flex items-start relative flex-[0_0_auto]'>
          <div className='relative w-[47px] h-[49px]'>
            <div className="absolute w-[43px] h-[35px] -top-px left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-3xl tracking-[0] leading-5">
              KR
            </div>
            <img
              className='absolute w-[39px] h-[3px] top-[35px] left-0'
              alt='Line'
              src='/img/line-1.svg'
            />
          </div>
          <div className='relative w-[47px] h-[49px]' />
          <div className='relative w-[47px] h-[49px]'>
            <div className="absolute w-[43px] h-[35px] -top-px left-0 [font-family:'Inter',Helvetica] font-semibold text-white text-3xl tracking-[0] leading-5">
              EN
            </div>
          </div>
          <div className='relative w-[58px] h-[49px]' />
        </div>
      </div>
    </div>
  );
};
