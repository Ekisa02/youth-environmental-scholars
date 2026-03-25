// src/components/sections/Structure.jsx
import React from 'react';
import { color, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Chairperson from '../assets/images/Chairperson.jpeg';
import Vicechairperson from '../assets/images/Vicechairperson.jpeg';
import Secretary from '../assets/images/Secretary.jpeg';
import Treasurer from '../assets/images/tresuarer.jpeg';
import OrganizingSecretary from '../assets/images/Organisingsecretary.jpeg';
import CommitteeTeam from '../assets/images/CommitteeMember.jpeg';
import CommiteeMember from '../assets/images/Committeemember.jpeg';

// Leadership data with photos
const leaders = [
  {
    position: "Chairperson",
    name: "Antony Aluvale",
    photo: Chairperson,
    bio: "Leading the organization with passion for environmental conservation and youth empowerment.",
    social: {
      linkedin: "https://linkedin.com/in/antony-aluvale",
      twitter: "https://twitter.com/antonyaluvale",
      instagram: "https://instagram.com/antonyaluvale",
      email: "antony@yes.org"
    }
  },
  {
    position: "Vice Chairperson",
    name: "Naomi Makhoha",
    photo: Vicechairperson,
    bio: "Dedicated to driving sustainable solutions and community engagement initiatives.",
    social: {
      linkedin: "https://linkedin.com/in/naomi-makhoha",
      twitter: "https://twitter.com/naomimakhoha",
      instagram: "https://instagram.com/naomimakhoha",
      email: "naomi@yes.org"
    }
  },
  {
    position: "Secretary",
    name: "Heykerl Adala",
    photo: Secretary,
    bio: "Expert in organizational management and environmental policy advocacy.",
    social: {
      linkedin: "https://linkedin.com/in/heykerl-adala",
      twitter: "https://twitter.com/heykerladala",
      instagram: "https://instagram.com/heykerladala",
      email: "heykerl@yes.org"
    }
  },
  {
    position: "Treasurer",
    name: "Ashanet Atieno",
    photo: Treasurer,
    bio: "Financial stewardship ensuring sustainable funding for conservation projects.",
    social: {
      linkedin: "https://linkedin.com/in/ashanet-atieno",
      twitter: "https://twitter.com/ashanetatieno",
      instagram: "https://instagram.com/ashanetatieno",
      email: "ashanet@yes.org"
    }
  },
  {
    position: "Organizing Secretary",
    name: "Byrone Abiero",
    photo: OrganizingSecretary,
    bio: "Coordinating events and programs that drive environmental awareness.",
    social: {
      linkedin: "https://linkedin.com/in/byrone-abiero",
      twitter: "https://twitter.com/byroneabiero",
      instagram: "https://instagram.com/byroneabiero",
      email: "byrone@yes.org"
    }
  },
  {
    position: "Committee Member",
    name: "Peter Muchiri",
    photo: CommitteeTeam,
    bio: "Dedicated committee member supporting organizational activities and community outreach.",
    social: {
      linkedin: "https://linkedin.com/in/peter-muchiri",
      twitter: "https://twitter.com/petermuchiri",
      instagram: "https://instagram.com/petermuchiri",
      email: "peter@yes.org"
    }
  },
  {
    position: "Committee Member",
    name: "Laura Aketch",
    photo: CommiteeMember,
    bio: "Passionate about environmental education and youth engagement programs.",
    social: {
      linkedin: "https://linkedin.com/in/laura-aketch",
      twitter: "https://twitter.com/lauraaketch",
      instagram: "https://instagram.com/lauraaketch",
      email: "laura@yes.org"
    }
  }
];

const Structure = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1, rootMargin: '-50px 0px' });

  const styles = {
    heroSection: {
      position: 'relative',
      background: 'linear-gradient(to bottom right, #f0fdf4, #f5f3e8, #ecfdf5)',
      padding: '80px 0',
      overflow: 'hidden'
    },
    heroContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 32px',
      position: 'relative',
      zIndex: 2,
      textAlign: 'center'
    },
    heroBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: 'rgba(255,255,255,0.8)',
      backdropFilter: 'blur(8px)',
      padding: '8px 20px',
      borderRadius: '40px',
      marginBottom: '24px'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '800',
      marginBottom: '24px',
      color: 'green'
    },
    heroTitleSpan: {
      background: 'linear-gradient(135deg, #a855f7, #9333ea)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
      color: '#4b5563',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.7'
    },
    section: {
      padding: '80px 0',
      background: '#0f172a',
      position: 'relative',
      fontFamily: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      overflow: 'hidden'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 32px',
      position: 'relative',
      zIndex: 2
    },
    header: {
      textAlign: 'center',
      marginBottom: '80px'
    },
    title: {
      fontSize: 'clamp(2rem, 4vw, 2.8rem)',
      fontWeight: '700',
      marginBottom: '16px',
      color: '#f1f5f9',
      position: 'relative',
      display: 'inline-block'
    },
    titleUnderline: {
      width: '80px',
      height: '4px',
      background: 'linear-gradient(135deg, #60a5fa, #a855f7)',
      margin: '16px auto 0',
      borderRadius: '2px'
    },
    subtitle: {
      fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
      color: '#94a3b8',
      maxWidth: '700px',
      margin: '24px auto 0',
      lineHeight: '1.7',
      textAlign: 'center'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
      gap: '40px',
      marginBottom: '100px'
    },
    card: {
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      overflow: 'hidden',
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      border: '1px solid rgba(96, 165, 250, 0.2)',
      boxShadow: 'none'
    },
    imageContainer: {
      position: 'relative',
      height: '360px',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1e293b, #0f172a)'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
      filter: 'brightness(0.95) contrast(1.05)'
    },
    badge: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'linear-gradient(135deg, #60a5fa, #a855f7)',
      padding: '8px 18px',
      borderRadius: '40px',
      color: 'white',
      fontSize: '12px',
      fontWeight: '600',
      letterSpacing: '0.8px',
      textTransform: 'uppercase',
      zIndex: 2,
      fontFamily: "'Poppins', sans-serif",
      border: '1px solid rgba(255,255,255,0.2)'
    },
    content: {
      padding: '32px',
      background: 'rgba(15, 23, 42, 0.9)'
    },
    name: {
      fontSize: 'clamp(1.3rem, 4vw, 1.7rem)',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #f1f5f9, #cbd5e1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '8px',
      lineHeight: '1.3',
      letterSpacing: '-0.01em'
    },
    position: {
      fontSize: '13px',
      background: 'linear-gradient(135deg, #60a5fa, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontWeight: '600',
      marginBottom: '16px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    bio: {
      fontSize: '14px',
      color: '#94a3b8',
      lineHeight: '1.7',
      marginBottom: '24px',
      fontWeight: '400'
    },
    socialLinks: {
      display: 'flex',
      gap: '16px',
      borderTop: '1px solid rgba(96, 165, 250, 0.2)',
      paddingTop: '24px'
    },
    socialLink: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '42px',
      height: '42px',
      borderRadius: '12px',
      background: 'rgba(96, 165, 250, 0.15)',
      border: '1px solid rgba(96, 165, 250, 0.3)',
      color: '#60a5fa',
      fontSize: '20px',
      textDecoration: 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer'
    },
    overviewCard: {
      marginTop: '80px',
      padding: '70px 48px',
      background: 'rgba(15, 23, 42, 0.7)',
      backdropFilter: 'blur(20px)',
      borderRadius: '48px',
      textAlign: 'center',
      border: '1px solid rgba(96, 165, 250, 0.2)',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'none'
    },
    overviewIcon: {
      width: '100px',
      height: '100px',
      background: 'linear-gradient(135deg, rgba(96,165,250,0.2), rgba(168,85,247,0.2))',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 28px',
      fontSize: '48px',
      border: '1px solid rgba(96, 165, 250, 0.3)'
    },
    overviewTitle: {
      fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #f1f5f9, #cbd5e1)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '20px',
      letterSpacing: '-0.02em'
    },
    overviewText: {
      fontSize: '16px',
      color: '#94a3b8',
      maxWidth: '650px',
      margin: '0 auto 40px',
      lineHeight: '1.7'
    },
    structureList: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '16px'
    },
    structureItem: {
      padding: '12px 28px',
      background: 'rgba(96, 165, 250, 0.1)',
      borderRadius: '40px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#60a5fa',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      border: '1px solid rgba(96, 165, 250, 0.3)',
      letterSpacing: '0.3px'
    },
    floatingOrb: {
      position: 'absolute',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(96,165,250,0.2) 0%, rgba(168,85,247,0.15) 50%, rgba(236,72,153,0.1) 100%)',
      filter: 'blur(60px)',
      pointerEvents: 'none',
      animation: 'float 8s ease-in-out infinite'
    }
  };

  return (
    <>
      {/* Hero Section - Matching BlogPage */}
      <section style={styles.heroSection}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05
        }} />
        <div style={styles.heroContainer}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={styles.heroBadge}>
              <i className="fas fa-leaf" style={{ color: '#059669' }}></i>
              <span style={{ fontSize: '14px', color: '#047857' }}>Youth Environmental Scholars</span>
            </div>
            <h1 style={styles.heroTitle}>
              Our <span style={styles.heroTitleSpan}>Leadership</span>
            </h1>
            <p style={styles.heroSubtitle}>
              Meet the visionary leaders shaping the future of environmental conservation through 
              innovation, dedication, and transformative action
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Cards Section - Dark Theme */}
      <section style={styles.section}>
        {/* Animated Background Elements */}
        <div style={{...styles.floatingOrb, top: '10%', left: '-10%', width: '500px', height: '500px', animationDelay: '0s'}} />
        <div style={{...styles.floatingOrb, bottom: '10%', right: '-10%', width: '600px', height: '600px', animationDelay: '2s'}} />
        <div style={{...styles.floatingOrb, top: '50%', left: '50%', width: '400px', height: '400px', animationDelay: '4s', transform: 'translate(-50%, -50%)'}} />

        <div style={styles.container}>
          {/* Header Section */}
          <div style={styles.header}>
            <h2 style={styles.title}>
              Meet Our Team
            </h2>
            <div style={styles.titleUnderline} />
            <p style={styles.subtitle}>
              Passionate professionals dedicated to driving environmental change through innovative solutions and community engagement
            </p>
          </div>

          {/* Leadership Grid */}
          <div 
            ref={ref}
            style={{
              ...styles.grid,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {leaders.map((leader, index) => (
              <div 
                key={index}
                style={{
                  ...styles.card,
                  transform: inView ? 'translateY(0)' : 'translateY(60px)',
                  transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.2)';
                }}
              >
                {/* Image Container */}
                <div style={styles.imageContainer}>
                  <img 
                    src={leader.photo} 
                    alt={leader.name}
                    style={styles.image}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={styles.badge}>
                    {leader.position}
                  </div>
                </div>
                
                {/* Content */}
                <div style={styles.content}>
                  <h3 style={styles.name}>{leader.name}</h3>
                  <p style={styles.position}>{leader.position}</p>
                  <p style={styles.bio}>{leader.bio}</p>
                  
                  {/* Social Links */}
                  <div style={styles.socialLinks}>
                    <a 
                      href={leader.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.socialLink}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#0077b5';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.borderColor = '#0077b5';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(96, 165, 250, 0.15)';
                        e.target.style.color = '#60a5fa';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.borderColor = 'rgba(96, 165, 250, 0.3)';
                      }}
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a 
                      href={leader.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.socialLink}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#1DA1F2';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.borderColor = '#1DA1F2';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(96, 165, 250, 0.15)';
                        e.target.style.color = '#60a5fa';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.borderColor = 'rgba(96, 165, 250, 0.3)';
                      }}
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a 
                      href={leader.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.socialLink}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'linear-gradient(135deg, #f58529, #dd2a7b, #8134af)';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.borderColor = '#f58529';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(96, 165, 250, 0.15)';
                        e.target.style.color = '#60a5fa';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.borderColor = 'rgba(96, 165, 250, 0.3)';
                      }}
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a 
                      href={`mailto:${leader.social.email}`}
                      style={styles.socialLink}
                      onMouseEnter={(e) => {
                        e.target.style.background = '#ea4335';
                        e.target.style.color = 'white';
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.borderColor = '#ea4335';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(96, 165, 250, 0.15)';
                        e.target.style.color = '#60a5fa';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.borderColor = 'rgba(96, 165, 250, 0.3)';
                      }}
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Organization Structure Overview */}
          <div 
            style={{
              ...styles.overviewCard,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(50px)',
              transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.4s`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.2)';
            }}
          >
            <div style={styles.overviewIcon}>
              <span>🌿</span>
            </div>
            <h3 style={styles.overviewTitle}>Organization Structure</h3>
            <p style={styles.overviewText}>
              Our innovative leadership framework ensures transparency, collaboration, and effective 
              governance to drive impactful environmental solutions
            </p>
            <div style={styles.structureList}>
              {[
                "Chairperson",
                "Vice Chairperson", 
                "Secretary",
                "Treasurer",
                "Organizing Secretary",
                "Committee Members"
              ].map((position, idx) => (
                <span
                  key={idx}
                  style={styles.structureItem}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #60a5fa, #a855f7)';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.borderColor = 'transparent';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(96, 165, 250, 0.1)';
                    e.target.style.color = '#60a5fa';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.borderColor = 'rgba(96, 165, 250, 0.3)';
                  }}
                >
                  {position}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animation Keyframes and Font Awesome CDN */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', 'Inter', sans-serif;
        }

        @media (max-width: 1200px) {
          .container {
            padding: 0 24px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 16px;
          }
        }

        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0f172a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #60a5fa, #a855f7);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #a855f7, #ec489a);
        }

        ::selection {
          background: rgba(96, 165, 250, 0.3);
          color: white;
        }
      `}</style>
    </>
  );
};

export default Structure;