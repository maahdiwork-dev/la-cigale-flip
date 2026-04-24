import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Sarra M.',
    location: 'Tunis',
    rating: 5,
    text: "Une journée magique en famille ! La traversée en bateau a enchanté les enfants, et la plage est tout simplement paradisiaque. Le personnel est accueillant et les installations sont impeccables. On reviendra sans hésiter !",
  },
  {
    name: 'Karim B.',
    location: 'Bizerte',
    rating: 5,
    text: "La Suite VIP vaut chaque dinar. Minibar privé, douche à disposition, et une vue mer à couper le souffle. Un vrai luxe accessible en Tunisie. Bravo à toute l'équipe de La Cigale !",
  },
  {
    name: 'Amira & Youssef',
    location: 'Sousse',
    rating: 5,
    text: "Nous avons découvert La Cigale grâce à des amis et c'était la meilleure décision de notre été. L'ambiance est relaxante, la nourriture est délicieuse et la balade en mer au coucher du soleil est inoubliable.",
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-gold' : 'text-charcoal/20'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-charcoal/5 border border-charcoal/10 relative"
    >
      {/* Quote mark */}
      <div className="absolute -top-3 left-6 md:left-8">
        <span className="text-5xl text-primary/20 font-heading leading-none">"</span>
      </div>

      <div className="pt-4">
        <StarRating count={testimonial.rating} />
        <p className="text-charcoal/70 leading-relaxed mt-4 mb-6 text-sm md:text-base">
          {testimonial.text}
        </p>
        <div className="flex items-center gap-3">
          {/* Avatar placeholder */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-charcoal text-sm">{testimonial.name}</p>
            <p className="text-charcoal/50 text-xs">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
            Témoignages
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
            Ce que disent nos clients
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
