import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import panoramaImage from '../assets/images/gallery/01-panorama.jpg'
import cabanesImage from '../assets/images/gallery/02-cabanes.jpg'
import waterImage from '../assets/images/gallery/03-water.jpg'
import boatImage from '../assets/images/gallery/04-boat-transfer.jpg'
import ambianceImage from '../assets/images/gallery/05-ambiance.jpg'
import sunsetImage from '../assets/images/gallery/06-sunset.jpg'

const galleryItems = [
  {
    label: 'Vue panoramique',
    image: panoramaImage,
    span: 'sm:col-span-2 sm:row-span-2',
    height: 'h-64 sm:h-full',
  },
  {
    label: 'Nos cabanes',
    image: cabanesImage,
    span: 'sm:col-span-1',
    height: 'h-48 sm:h-52',
  },
  {
    label: 'Eaux cristallines',
    image: waterImage,
    span: 'sm:col-span-1',
    height: 'h-48 sm:h-52',
  },
  {
    label: 'Traversée en bateau',
    image: boatImage,
    span: 'sm:col-span-1',
    height: 'h-48 sm:h-52',
  },
  {
    label: 'Ambiance détente',
    image: ambianceImage,
    span: 'sm:col-span-1',
    height: 'h-48 sm:h-52',
  },
  {
    label: 'Coucher de soleil',
    image: sunsetImage,
    span: 'sm:col-span-2',
    height: 'h-48 sm:h-52',
  },
]

function GalleryItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${item.span} ${item.height} relative rounded-2xl overflow-hidden group cursor-pointer`}
    >
      <img
        src={item.image}
        alt={item.label}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

      {/* Label */}
      <div className="absolute inset-0 flex items-end justify-start p-4 md:p-5">
        <div className="text-center">
          <div className="w-12 h-12 mb-3 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
            </svg>
          </div>
          <span className="text-white font-heading text-lg font-medium tracking-wide drop-shadow-lg">
            {item.label}
          </span>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
    </motion.div>
  )
}

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
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
            Découvrez
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
            Galerie
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 auto-rows-[minmax(120px,auto)]">
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.label} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
