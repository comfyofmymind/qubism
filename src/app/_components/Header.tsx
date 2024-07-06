import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='flex flex-col w-[390px] items-center px-0 py-[15px] absolute top-0 left-0 bg-magazine-bcomblack-5 backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)]'>
        <div className='flex w-[390px] items-center justify-between px-5 py-0 relative flex-[0_0_auto]'>
          <div className='flex w-[182px] items-center relative'>
            <div className="w-[57px] [font-family:'Yink-Regular',Helvetica] font-normal text-[19.2px] leading-5 relative mt-[-1.00px] text-white tracking-[0]">
              QUBISM
            </div>
            <div className='inline-flex flex-col items-start relative flex-[0_0_auto]'>
              <a
                className='flex items-start relative self-stretch w-full flex-[0_0_auto]'
                rel='noopener noreferrer'
                target='_blank'
              >
                <div className='relative max-w-[21.33px] w-[21.33px] h-6' />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
