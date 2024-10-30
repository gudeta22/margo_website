import React from 'react';

function MapComponent() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3940.687102014581!2d38.816503075018666!3d9.000911891059268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDAnMDMuMyJOIDM4wrA0OScwOC43IkU!5e0!3m2!1sen!2set!4v1730259532066!5m2!1sen!2set"; // Replace with your embed link

  return (
    <div className='m-2'>
      <div className='relative w-full h-96 flex justify-center my-10'>
        <div className='mb-6 lg:mb-0 shrink w-full lg:w-[50%] lg:pr-3 flex my-5'>
          <iframe
            title='map'
            className='h-56 md:h-full w-full border-0 rounded-md'
            allowFullScreen
            loading='lazy'
            src={mapUrl}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
