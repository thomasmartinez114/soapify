'use client';

import Image from 'next/image';
import imgTab1 from '@/assets/images/illustration-features-tab-1.svg';
import imgTab2 from '@/assets/images/illustration-features-tab-2.svg';
import imgTab3 from '@/assets/images/illustration-features-tab-3.svg';
import { useEffect } from 'react';

const Features = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.panel');

    function onTabClick(e) {
      // Deactivate all tabs
      tabs.forEach(tab => {
        tab.children[0].classList.remove(
          'border-softRed',
          'border-b-4',
          'md:border-b-0'
        );
      });

      // Hide all panels
      panels.forEach(panel => panel.classList.add('hidden'));

      // Activate a new tab and panel based on the target
      e.target.classList.add('border-softRed', 'border-b-4');
      const classString = e.target.getAttribute('data-target');
      document
        .getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden');
    }

    // Add click event listeners to all tabs
    tabs.forEach(tab => tab.addEventListener('click', onTabClick));

    // Cleanup event listeners on component unmount
    return () => {
      tabs.forEach(tab => tab.removeEventListener('click', onTabClick));
    };
  }, []);

  return (
    <>
      <section id='features'>
        <div className='container mx-auto mt-16 px-6'>
          <h2 className='mb-6 text-4xl font-semibold text-center'>Features</h2>
          <p className='max-w-md mx-auto text-center text-grayishBlue'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            aliquam porro consequuntur? Corrupti alias dignissimos modi!
            Consequuntur placeat illo, nobis eligendi impedit molestiae
            accusantium fuga inventore dolor quae dicta recusandae.
          </p>
        </div>
      </section>

      {/* Feature Tabs */}
      <section id='tabs'>
        {/* Tabs/Panel Container */}
        <div className='container relative mx-auto my-6 mb-32 mt-12 px-6'>
          <div className='bg-tabs'></div>
          {/* Tabs Flex Container */}
          <div
            className='flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row'
            date-target='panel-1'
          >
            {/* Tab 1 */}
            <div className='flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'>
              <div
                className='py-5 border-b-4 border-softRed'
                data-target='panel-1'
              >
                Feature 1
              </div>
            </div>
            {/* Tab 2 */}
            <div className='flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'>
              <div className='py-5' data-target='panel-2'>
                Feature 2
              </div>
            </div>
            {/* Tab 3 */}
            <div className='flex justify-center text-center text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'>
              <div className='py-5' data-target='panel-3'>
                Feature 3
              </div>
            </div>
          </div>

          {/* Tabs Panel */}
          <div id='panels' className='container mx-auto'>
            {/* Panel 1 */}
            <div className='flex flex-col py-5 md:flex-row md:space-x-7 panel panel-1'>
              {/* Panel Image */}
              <div className='flex justify-center md:w-1/2'>
                <Image src={imgTab1} alt='' className='relative z-10' />
              </div>
              {/* Panel Content */}
              <div className='flex flex-col space-y-8 md:w-1/2'>
                <h3 className='mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left'>
                  Feature 1
                </h3>
                <p className='max-w-md text-center text-grayishBlue md:text-left'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore voluptate inventore repellat laudantium cum eligendi
                  neque vel ad ducimus ipsam.
                </p>
              </div>
            </div>
            {/* Panel 2 */}
            <div className='flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-2'>
              {/* Panel Image */}
              <div className='flex justify-center md:w-1/2'>
                <Image src={imgTab2} alt='' className='relative z-10' />
              </div>
              {/* Panel Content */}
              <div className='flex flex-col space-y-8 md:w-1/2'>
                <h3 className='mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left'>
                  Feature 2
                </h3>
                <p className='max-w-md text-center text-grayishBlue md:text-left'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore voluptate inventore repellat laudantium cum eligendi
                  neque vel ad ducimus ipsam.
                </p>
              </div>
            </div>
            {/* Panel 3 */}
            <div className='flex flex-col hidden py-5 md:flex-row md:space-x-7 panel panel-3'>
              {/* Panel Image */}
              <div className='flex justify-center md:w-1/2'>
                <Image src={imgTab3} alt='' className='relative z-10' />
              </div>
              {/* Panel Content */}
              <div className='flex flex-col space-y-8 md:w-1/2'>
                <h3 className='mt-14 text-3xl font-semibold text-center md:mt-0 md:text-left'>
                  Feature 3
                </h3>
                <p className='max-w-md text-center text-grayishBlue md:text-left'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore voluptate inventore repellat laudantium cum eligendi
                  neque vel ad ducimus ipsam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
