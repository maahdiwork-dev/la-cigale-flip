import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: '🚤',
    title: 'Accès en bateau',
    desc: 'Traversée de 5 minutes depuis le port de pêche de Ghar El Melh — une aventure commence avant même d\'arriver.',
  },
  {
    icon: '🏖️',
    title: 'Plage privée',
    desc: 'Un îlot paradisiaque préservé, loin du bruit, avec du sable fin et des eaux cristallines de la Méditerranée.',
  },
  {
    icon: '🍽️',
    title: 'Gastronomie méditerranéenne',
    desc: 'Savourez des plats frais préparés avec amour — fruits de mer, grillades, salades et boissons rafraîchissantes.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Ambiance familiale',
    desc: 'Un cadre sûr et convivial pour les familles. Les enfants s\'amusent, les parents se détendent.',
  },
]

function FeatureCard({ feature, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="text-center p-6 rounded-2xl hover:bg-primary/5 transition-colors group"
    >
      <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
        {feature.icon}
      </span>
      <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
        {feature.title}
      </h3>
      <p className="text-charcoal/60 text-sm leading-relaxed">{feature.desc}</p>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
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
            Bienvenue
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
            Bienvenue à La Cigale
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <p className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-6">
            Nichée sur l'île de Coco Beach, au large de <strong className="text-charcoal">Ghar El Melh</strong> dans la magnifique région de <strong className="text-charcoal">Bizerte</strong>, La Cigale vous invite à vivre une expérience balnéaire unique en Tunisie.
          </p>
          <p className="text-charcoal/70 text-base md:text-lg leading-relaxed mb-6">
            Accessible uniquement par une courte traversée en bateau de cinq minutes, notre plage privée est un véritable havre de paix. Loin de l'agitation urbaine, vous découvrirez un cadre préservé où le sable doré rencontre des eaux turquoise d'une clarté exceptionnelle.
          </p>
          <p className="text-charcoal/70 text-base md:text-lg leading-relaxed">
            Que vous soyez en famille, entre amis ou en couple, La Cigale offre le cadre idéal pour une journée de détente inoubliable. Détendez-vous sous un parasol, savourez notre cuisine méditerranéenne fraîche, ou profitez d'une balade en mer au coucher du soleil — chaque moment ici est un souvenir précieux.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
