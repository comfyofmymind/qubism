'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu } from './Menu'; // Menu 컴포넌트 가져오기

const images = ['/img/main1.jpg', '/img/main2.jpg', '/img/main3.jpg'];

export default function Slide() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 상태 추가

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen); // 메뉴 상태 토글
  };

  return (
    <div className='inline-flex flex-col items-start gap-2.5 relative bg-white'>
      <div className='relative'>
        <Image
          className='relative object-cover'
          alt='Slide Image'
          width={390}
          height={692.31}
          src={images[currentSlide]}
        />
      </div>
      <div className='flex flex-col w-[390px] items-start gap-2.5 pt-0 pb-[38.59px] px-5 absolute top-[483px] left-0'>
        <div className='flex flex-col items-start pt-px pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]'>
          <div className="self-stretch text-white [font-family:'Inter',Helvetica] font-normal text-sm leading-[25px] relative mt-[-1.00px] text-magazine-bcomnero tracking-[0]">
            QUBISM
          </div>
        </div>
        <div className='w-full flex-[0_0_auto] flex flex-col items-start relative self-stretch'>
          <div className="self-stretch text-white [font-family:'Inter',Helvetica] font-medium text-[34.6px] leading-9 relative mt-[-1.00px] text-magazine-bcomnero tracking-[0]">
            QUBISM
            <br />
            MAGAZINE: 입체주의
          </div>
        </div>
      </div>
      <div className='flex flex-col w-[390px] h-[5px] items-start justify-center px-[130px] py-0 absolute top-[687px] left-0 bg-magazine-bcomnero-50'>
        <div className='relative flex-1 w-[130px] grow bg-magazine-bcomnero' />
      </div>
      <header className='flex flex-col w-[390px] items-center px-0 py-[15px] absolute top-0 left-0 bg-magazine-bcomblack-5 backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)]'>
        <div className='flex w-[390px] items-center justify-between px-5 py-0 relative flex-[0_0_auto]'>
          <div className='flex w-[182px] items-center relative'>
            <Image
              src='/img/QUBISM.svg'
              alt='QUBISM'
              width={57}
              height={19.2}
            />
            <div className='inline-flex flex-col items-start relative flex-[0_0_auto]'>
              <div className='flex items-start relative self-stretch w-full flex-[0_0_auto]'>
                <div className='relative max-w-[21.33px] w-[21.33px] h-6' />
              </div>
            </div>
          </div>
          <div className='inline-flex items-center relative flex-[0_0_auto]'>
            <div className='inline-flex flex-col items-start pl-4 pr-0 py-0 relative flex-[0_0_auto]'>
              <Image
                src='/img/Container.svg'
                alt='Menu'
                width={64}
                height={18}
                onClick={toggleMenu} // 메뉴 버튼 클릭 이벤트 추가
              />
            </div>
          </div>
        </div>
      </header>

      {/* 슬라이드 변경 버튼 부분 */}
      <div className='flex w-full justify-between absolute top-1/2 transform -translate-y-1/2 px-5'>
        <button
          onClick={handlePrevSlide}
          className='flex items-center justify-center bg-transparent'
        >
          <img src='/img/Ellipse1.svg' alt='Previous' width={40} height={40} />
        </button>
        <button
          onClick={handleNextSlide}
          className='flex items-center justify-center bg-transparent'
        >
          <img src='/img/Ellipse1.svg' alt='Next' width={40} height={40} />
        </button>
      </div>

      {/* 메뉴 표시 부분 */}
      {isMenuOpen && (
        <div className='absolute top-0 left-0 w-full h-full z-50'>
          <Menu toggleMenu={toggleMenu} />{' '}
          {/* toggleMenu 함수를 Menu 컴포넌트에 전달 */}
        </div>
      )}
    </div>
  );
}
