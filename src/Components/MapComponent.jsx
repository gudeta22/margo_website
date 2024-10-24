import React from 'react';

function MapComponent() {
  const mapUrl = 'https://www.google.com/maps/e';

  return (
    <div className='m-2'>
      <div className='relative w-full h-96 flex justify-center my-10'>
        <div className='mb-6 lg:mb-0 shrink w-full lg:w-[50%] lg:pr-3 flex my-5'>
          <iframe
            title='map'
            className='h-56 md:h-full w-full border-0 rounded-md'
            allowFullScreen=''
            loading='lazy'
            src={mapUrl}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;