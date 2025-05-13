import Image from 'next/image';

function TestimonialCard({ text, image }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-gray-700 mb-4">{text}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden relative">
          <Image
            src={image}
            alt="Testimonial author"
            fill
            className="object-cover"
          />
        </div>
        {/* Rest of the component */}
      </div>
    </div>
  );
}

export default TestimonialCard;
