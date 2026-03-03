"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
const galleryItems = [
  {
    id: 1,
    title: "-",
    category: "E-Commerce",
    image: "https://placehold.co/600x400/10b981/ffffff?text=-",
    description: "",
    tags: ["Next.js",],
    gradient: "from-emerald-500 to-teal-600",
  },  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function GallerySection() {
  const tanyaWhatsApp = (title: string) => {
    const message = `Halo ASTA CLOUD, saya tertarik dengan pengerjaan seperti: "${title}". Bisa info lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6285815185245?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="relative h-full bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => tanyaWhatsApp(item.title)}
                  className={`w-full bg-gradient-to-r ${item.gradient} text-white hover:opacity-90 rounded-2xl py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition-opacity duration-200`}
                >
                  Mau yang Seperti Ini?
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
