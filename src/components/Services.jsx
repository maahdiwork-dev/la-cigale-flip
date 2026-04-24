import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const packages = [
  {
    name: 'Parasol sur sable',
    priceAdult: '70',
    priceChild: '50',
    icon: '⛱️',
    features: [
      'Parasol avec transats',
      'Accès plage privée',
      'Vue mer panoramique',
    ],
    popular: false,
  },
  {
    name: 'Cabane sur sable',
    priceAdult: '80',
    priceChild: '50',
    icon: '🏕️',
    features: [
      'Cabane bois confortable',
      'Ombre naturelle',
      'Accès plage privée',
    ],
    popular: false,
  },
  {
    name: 'Paillote en mer',
    priceAdult: '80',
    priceChild: '50',
    icon: '🏠',
    features: [
      'Paillote sur pilotis',
      'Vue mer immersive',
      'Baignade depuis la paillote',
    ],
    popular: false,
  },
  {
    name: 'Suite VIP',
    priceAdult: '150',
    priceChild: '50',
    icon: '👑',
    features: [
      'Minibar privé',
      'Douche privée',
      'Espace premium exclusif',
      'Service prioritaire',
    ],
    popular: true,
  },
  {
    name: 'Balade en mer',
    priceAdult: '280',
    priceChild: null,
    icon: '🚤',
    features: [
      'Sortie en bateau privée',
      'Maximum 7 personnes',
      'Découverte des côtes',
      'Durée : environ 1 heure',
    ],
    popular: false,
    isGroup: true,
  },
]

function PricingCard({ pkg, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        pkg.popular
          ? 'bg-gradient-to-br from-charcoal to-charcoal/90 text-white shadow-2xl shadow-charcoal/20 ring-2 ring-gold scale-[1.02]'
          : 'bg-white shadow-lg shadow-charcoal/5 border border-charcoal/10 hover:shadow-xl'
      }`}
    >
      {/* Popular badge */}
      {pkg.popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-gold text-charcoal text-xs font-bold px-4 py-1.5 rounded-bl-xl">
            ✨ Premium
          </div>
        </div>
      )}

      <div className="p-6 md:p-8">
        {/* Icon & name */}
        <div className="text-center mb-6">
          <span className="text-4xl mb-3 block">{pkg.icon}</span>
          <h3
            className={`font-heading text-xl font-semibold ${
              pkg.popular ? 'text-white' : 'text-charcoal'
            }`}
          >
            {pkg.name}
          </h3>
        </div>

        {/* Price */}
        <div className="text-center mb-6">
          {pkg.isGroup ? (
            <div>
              <span className="text-3xl md:text-4xl font-bold text-gold">
                {pkg.priceAdult}
              </span>
              <span className={`text-sm ml-1 ${pkg.popular ? 'text-white/70' : 'text-charcoal/60'}`}>
                DT / groupe
              </span>
            </div>
          ) : (
            <div className="space-y-1">
              <div>
                <span className="text-3xl md:text-4xl font-bold text-primary">
                  {pkg.priceAdult}
                </span>
                <span className={`text-sm ml-1 ${pkg.popular ? 'text-white/70' : 'text-charcoal/60'}`}>
                  DT / adulte
                </span>
              </div>
              <div>
                <span className="text-xl font-bold text-gold">{pkg.priceChild}</span>
                <span className={`text-sm ml-1 ${pkg.popular ? 'text-white/70' : 'text-charcoal/60'}`}>
                  DT / enfant
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Divider */}
        <div
          className={`h-px mb-6 ${
            pkg.popular ? 'bg-white/20' : 'bg-charcoal/10'
          }`}
        />

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <svg
                className={`w-4 h-4 flex-shrink-0 ${
                  pkg.popular ? 'text-gold-light' : 'text-primary'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span
                className={`text-sm ${
                  pkg.popular ? 'text-white/85' : 'text-charcoal/70'
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`https://wa.me/21694940490?text=Bonjour, je suis intéressé(e) par le forfait ${pkg.name}.`}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-3 px-6 rounded-full font-semibold text-sm transition-all duration-300 ${
            pkg.popular
              ? 'bg-gold hover:bg-gold-light text-charcoal shadow-lg shadow-gold/30'
              : 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25'
          }`}
        >
          Réserver
        </a>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
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
            Nos offres
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
            Nos Formules
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-4" />
          <p className="text-charcoal/60 text-base max-w-xl mx-auto">
            Choisissez l'expérience qui vous correspond. Tous les forfaits incluent le transfert en bateau, le parking sécurisé et l'accès aux douches.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PricingCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Inclusions note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 md:mt-14 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-charcoal/10">
            <span className="text-lg">✅</span>
            <span className="text-sm text-charcoal/70 font-medium">
              Tous les forfaits incluent : transfert en bateau, parking sécurisé et douches
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
