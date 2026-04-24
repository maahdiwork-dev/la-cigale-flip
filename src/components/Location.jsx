import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-16 md:py-24 bg-white">
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
            Accès
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-2 mb-4">
            Nous Trouver
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden shadow-lg border border-charcoal/10 h-[300px] md:h-[450px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25753.95!2d10.17!3d37.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCoco+Beach%2C+Ghar+El+Melh!5e0!3m2!1sfr!2stn!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Cigale CoCo Beach - Ghar El Melh"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Adresse</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    Ghar El Melh, Bizerte, Tunisie
                  </p>
                </div>
              </div>

              {/* Boat access */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🚤</span>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Accès</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    Accès uniquement par bateau — Départ du port de pêche de Ghar El Melh (5 min de traversée)
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Horaires</h3>
                  <p className="text-charcoal/60 text-sm">08h00 – 19h00</p>
                  <p className="text-charcoal/40 text-xs mt-1">Saison estivale</p>
                </div>
              </div>

              {/* Directions hint */}
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                <p className="text-sm text-charcoal/70 flex gap-2">
                  <span className="text-primary font-bold flex-shrink-0">💡</span>
                  <span>
                    Suivez les panneaux <strong>"Port de pêche"</strong> à Ghar El Melh. Notre équipe vous attendra au quai pour l'embarquement.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
