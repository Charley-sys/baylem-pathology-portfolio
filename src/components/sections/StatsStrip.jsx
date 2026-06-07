import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { stats } from "../../data/content";

const brandBlue = "#1b0ddc";

function CountUp({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="bg-charcoal-50 border-y border-charcoal-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-charcoal-200">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-10 px-8 flex flex-col items-center text-center group"
            >
              <div
                className="font-display text-[clamp(2.4rem,4vw,3.2rem)] leading-none mb-2"
                style={{ color: brandBlue }}
              >
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>

              <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-charcoal-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}