'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  PictureOutlined,
  VideoCameraOutlined,
  MessageOutlined,
  LockOutlined,
  SmileOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: 'Post Your Thoughts',
      description: 'Share your thoughts in short, impactful messages.',
      icon: <EditOutlined />,
    },
    {
      heading: 'Share Multimedia',
      description: 'Enhance your posts with images and videos.',
      icon: <PictureOutlined />,
    },
    {
      heading: 'Engage in Real-Time',
      description: 'Join live conversations and trending topics.',
      icon: <MessageOutlined />,
    },
    {
      heading: 'Secure Your Data',
      description: 'Enjoy robust security and data privacy.',
      icon: <LockOutlined />,
    },
    {
      heading: 'Follow Your Interests',
      description: 'Stay updated with the content you love.',
      icon: <SmileOutlined />,
    },
    {
      heading: 'Direct Messaging',
      description: 'Connect privately with friends and followers.',
      icon: <MessageOutlined />,
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      designation: 'Content Creator',
      content:
        'This platform has revolutionized the way I connect with my audience. The privacy features are a game-changer!',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jane Smith',
      designation: 'Influencer',
      content:
        'I love the transparency and the user-friendly interface. It’s a breath of fresh air in the social media world.',
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Mike Johnson',
      designation: 'Tech Enthusiast',
      content:
        'Finally, a platform that respects my data privacy and allows me to express my views freely.',
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Sarah Lee',
      designation: 'Blogger',
      content:
        'The multimedia support is fantastic. It’s so easy to share my content with my followers.',
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'David Brown',
      designation: 'Journalist',
      content:
        'The commitment to free speech and privacy is unparalleled. Highly recommend this platform!',
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Emily Davis',
      designation: 'Photographer',
      content:
        'A perfect platform for sharing my work and connecting with like-minded individuals.',
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Features',
      link: '#features',
    },
    {
      title: 'Pricing',
      link: '#pricing',
    },
  ]

  const packages = [
    {
      title: 'Basic',
      description: 'Essential features for personal use',
      monthly: 9,
      yearly: 69,
      features: ['Post messages', 'Follow users'],
    },
    {
      title: 'Pro',
      description: 'Advanced features for influencers',
      monthly: 19,
      yearly: 149,
      features: [
        'All Basic features',
        'Multimedia support',
        'Direct messaging',
      ],
      highlight: true,
    },
    {
      title: 'Enterprise',
      description: 'Comprehensive features for businesses',
      monthly: 49,
      yearly: 499,
      features: ['All Pro features', 'Advanced analytics', 'Priority support'],
    },
  ]

  const questionAnswers = [
    {
      question: 'How secure is my data?',
      answer: 'We prioritize your data privacy with robust security measures.',
    },
    {
      question: 'Can I share multimedia content?',
      answer: 'Yes, you can share images, videos, and links.',
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 14-day free trial for all plans.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Simply sign up and start posting your thoughts and engaging with others.',
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: 'Sign Up',
      description: 'Create your account in just a few steps.',
    },
    {
      heading: 'Customize Your Profile',
      description: 'Add your personal touch to your profile.',
    },
    {
      heading: 'Start Posting',
      description: 'Share your thoughts and multimedia content.',
    },
    {
      heading: 'Engage with Others',
      description: 'Follow users and join conversations.',
    },
  ]

  const painPoints = [
    {
      emoji: '😟',
      title: 'Worried about data privacy?',
    },
    {
      emoji: '😤',
      title: 'Frustrated with content censorship?',
    },
    {
      emoji: '😞',
      title: 'Tired of monopolistic practices?',
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title="Your Voice, Your Platform"
        subtitle="Experience a new era of social networking with privacy and freedom."
        buttonText="Get Started"
        buttonLink="/register"
        pictureUrl="https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/B3o4CV-prueba-3QaF"
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText="from happy users"
          />
        }
      />
      <LandingSocialProof logos={logos} title="Featured on" />
      <LandingPainPoints
        title="Facing Social Media Challenges?"
        painPoints={painPoints}
      />
      <LandingHowItWorks title="How It Works" steps={steps} />
      <LandingFeatures
        id="features"
        title="Achieve Your Social Media Dreams"
        subtitle="Our platform empowers you to connect, share, and engage like never before."
        features={features}
      />
      <LandingTestimonials
        title="Success Stories"
        subtitle="See how our platform has transformed the social media experience for others."
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title="Choose Your Plan"
        subtitle="Find the perfect plan to meet your social networking needs."
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title="Frequently Asked Questions"
        subtitle="Got questions? We’ve got answers."
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title="Join the Revolution"
        subtitle="Sign up today and start experiencing social media like never before."
        buttonText="Get Started"
        buttonLink="/register"
      />
    </LandingContainer>
  )
}
