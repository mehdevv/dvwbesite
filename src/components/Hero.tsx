import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Logo3D } from './Logo3D';
import { AuroraText } from './AuroraText';
import { GridBackground } from './GridBackground';
import { FlipWords } from './FlipWords';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <motion.section 
      id="home" 
      className={styles.heroContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Mobile Header - Only visible on phone */}
      <div className={styles.mobileHeader}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={styles.mobileHeaderSubtitle}
        >
          Premium University Club
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={styles.mobileHeaderTitle}
        >
          <AuroraText 
            speed={1} 
            colors={["#032c6a", "#0a4fb5", "#2563eb", "#3b82f6", "#60a5fa", "#38bdf8", "#0a4fb5", "#032c6a"]}
            className={styles.mobileHeaderAuroraText}
          >
            Digital Valley
          </AuroraText>
        </motion.h1>
      </div>

      {/* Grid Background */}
      <GridBackground />
      
      {/* Animated Gradient Background */}
      <div className={styles.gradientBackground}>
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          className={styles.gradientLayer1}
        />
        {/* Additional subtle gradient layer for more depth */}
        <motion.div
          animate={{
            backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className={styles.gradientLayer2}
        />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.gridContainer}>
          {/* 3D Model - First on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={styles.modelContainer}
          >
            <div className={styles.modelWrapper}>
              {/* 3D Model */}
              <div className={styles.modelInner}>
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div className={styles.modelSize}>
                    {/* 3D Model Container */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Logo3D />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text Content - Second on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={styles.textContainer}
          >
            {/* Hide subtitle and heading on mobile since they're in the header */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={styles.desktopSubtitle}
            >
              <span className={styles.subtitle}>
                Premium University Club
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={styles.desktopHeading}
            >
              <AuroraText 
                speed={1} 
                colors={["#032c6a", "#0a4fb5", "#2563eb", "#3b82f6", "#60a5fa", "#38bdf8", "#0a4fb5", "#032c6a"]}
                className={styles.auroraText}
              >
                Digital Valley
              </AuroraText>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={styles.description}
            >
              Where we{' '}
              <FlipWords 
                words={["innovate", "create", "build", "grow", "excel", "succeed", "thrive", "lead"]}
                duration={3000}
                className={styles.flipWords}
              />
              . Join our community of tech enthusiasts and entrepreneurs shaping the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={styles.buttonGroup}
            >
              <a
                href="#join"
                className={styles.primaryButton}
              >
                <motion.div
                  className={styles.buttonGradient}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                <span className={styles.buttonText}>Get Started</span>
                <ArrowRight className={styles.buttonIcon} />
              </a>
              <a
                href="#about"
                className={styles.secondaryButton}
              >
                <div className={styles.secondaryButtonHover} />
                <span className={styles.secondaryButtonText}>Learn More</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom divider */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={styles.bottomDivider}
      />

      {/* Scroll Indicator Arrow */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className={styles.scrollArrow}
        onMouseEnter={(e) => e.currentTarget.style.color = '#0a4fb5'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#032c6a'}
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className={styles.scrollArrowIcon} />
        </motion.div>
      </motion.a>
    </motion.section>
  );
}