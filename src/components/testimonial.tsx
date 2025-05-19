'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

export function Testimonials() {
    const testimonials = [
        {
            quote:
                "I was dealing with ants for weeks and nothing worked. Then I found SayNoPest, and they helped me connect with a professional Pest Control service near me. Within a day, the issue was completely gone. Super easy and stress-free!",
            name: "Jessica M.",
            title: "Austin, TX",
            image: "/avatar/girl-1.avif",
        },
        {
            quote:
                "Saynopest has made it so simple to find a reliable pest control company for me. I was able to book someone the same day, and the professionals was friendly and very thorough. They guide me about the termites and how we can prevent them.  Highly recommend!",
            name: "Brian L.",
            title: "Orlando, FL",
            image: "/avatar/boy-1.avif",
        },
        {
            quote:
                "I  had a serious Cockroach problem in our backyard and in our entire property. I came across with SayNoPest while searching online, and they helped me get in touch with a trusted local Pest Control team. My Problem solved quickly and safely!",
            name: "Tina R.",
            title: "Sacramento, CA",
            image: "/avatar/girl-2.avif",
        },
        {
            quote:
                "I’ve tried calling around for pest services before also, and it was always a hassle for me. SayNoPest saved me this time by showing me the best options available for Pest control near me. They provide a complete short guide of many Pest Control service providers and compare their service features and reviews, which helps me to make my decision fast.",
            name: "James P.",
            title: "New York, US",
            image: "/avatar/boy-2.jpeg",
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-900 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    What our <span className="text-primary">clients</span> say
                </h2>

                <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                    Here’s what students and professionals have to say about their experience with Saynopest.
                </p>

                <div className="mt-10">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8 h-full flex flex-col justify-between">
                                    <p className="text-gray-500 dark:text-gray-300 mb-6 line-clamp-4">
                                        “{testimonial.quote}”
                                    </p>
                                    <div className="flex items-center mt-auto">
                                        <img
                                            className="object-cover rounded-full w-14 h-14"
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                        />
                                        <div className="mx-4">
                                            <h3 className="font-semibold text-primary">{testimonial.name}</h3>
                                            <span className="text-sm text-gray-500 dark:text-gray-300">{testimonial.title}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
