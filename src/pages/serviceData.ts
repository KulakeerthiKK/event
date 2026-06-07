interface ServiceConfig {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  process: { title: string; desc: string }[];
  cta: string;
}

export const servicePages: Record<string, ServiceConfig> = {
  'personal-training': {
    title: 'Personal Training',
    subtitle: 'One-on-one coaching tailored to your goals and needs.',
    description: 'Our certified trainers design personalized workout plans that help you build strength, lose weight, and improve athletic performance with focus and accountability.',
    image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Customized training plans', 'Progress tracking', 'Form correction', 'Goal-focused coaching', 'Flexible scheduling', 'Nutrition support', 'Accountability sessions', 'Recovery guidance'],
    process: [
      { title: 'Initial Assessment', desc: 'We evaluate your fitness level, goals, and movement patterns.' },
      { title: 'Program Design', desc: 'We create a tailored training plan based on your needs and schedule.' },
      { title: 'Guided Training', desc: 'Workouts are delivered with expert coaching for safe progress.' },
      { title: 'Ongoing Support', desc: 'We review results and adapt the program to keep you advancing.' },
    ],
    cta: 'Achieve Your Best Performance',
  },
  'group-classes': {
    title: 'Group Fitness Classes',
    subtitle: 'High-energy classes designed for all fitness levels.',
    description: 'Join motivating group classes like HIIT, yoga, cycling, and bootcamp. Our instructors keep every session engaging, effective, and supportive.',
    image: 'https://images.pexels.com/photos/5648706/pexels-photo-5648706.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['HIIT', 'Yoga', 'Spin', 'Bootcamp', 'Circuit training', 'Mobility classes', 'Recovery sessions', 'Community workouts'],
    process: [
      { title: 'Class Selection', desc: 'Choose classes that fit your goals, fitness, and schedule.' },
      { title: 'Friendly Coaching', desc: 'Expert instructors guide every participant through the workout.' },
      { title: 'Engaged Community', desc: 'Train with peers who motivate and support each other.' },
      { title: 'Progress Tracking', desc: 'We help you measure results and celebrate milestones.' },
    ],
    cta: 'Power Up Your Workouts',
  },
  'nutrition-coaching': {
    title: 'Nutrition Coaching',
    subtitle: 'Personalized meal plans to support your training and lifestyle.',
    description: 'Our nutrition coaches build realistic and sustainable food plans that help you fuel workouts, recover faster, and reach your body composition goals.',
    image: 'https://images.pexels.com/photos/3763879/pexels-photo-3763879.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Meal planning', 'Macro tracking', 'Supplement guidance', 'Healthy habits', 'Weight management', 'Meal prep tips', 'Lifestyle coaching', 'Ongoing accountability'],
    process: [
      { title: 'Nutrition Review', desc: 'We assess your current diet, preferences, and goals.' },
      { title: 'Customized Plan', desc: 'We create a meal strategy tailored to your needs.' },
      { title: 'Education & Support', desc: 'We teach you how to make smarter food choices consistently.' },
      { title: 'Progress Check-ins', desc: 'Regular reviews keep you on track and adapting your plan.' },
    ],
    cta: 'Fuel Your Fitness Journey',
  },
  'wellness-retreats': {
    title: 'Wellness Retreats',
    subtitle: 'Immersive wellness experiences for rest, recovery, and renewal.',
    description: 'Recharge with our wellness retreats combining movement, mindfulness, nutrition, and recovery in a supportive, rejuvenating environment.',
    image: 'https://images.pexels.com/photos/4498637/pexels-photo-4498637.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Mind-body sessions', 'Meditation', 'Mobility work', 'Nutrition workshops', 'Recovery therapy', 'Wellness seminars', 'Outdoor movement', 'Community support'],
    process: [
      { title: 'Retreat Planning', desc: 'We curate the right mix of movement, relaxation, and education.' },
      { title: 'Experience Design', desc: 'Every day is designed to support wellness and rejuvenation.' },
      { title: 'Guided Sessions', desc: 'Expert coaches and facilitators lead every activity.' },
      { title: 'Post-Retreat Support', desc: 'We provide tools to sustain progress after your retreat.', },
    ],
    cta: 'Renew Your Mind and Body',
  },
  'gym-design': {
    title: 'Gym Design & Setup',
    subtitle: 'Create a premium fitness space that inspires members.',
    description: 'We help design gym facilities, functional training areas, and recovery spaces that maximize comfort, performance, and member satisfaction.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Facility layout', 'Equipment selection', 'Functional zones', 'Recovery areas', 'Member flow design', 'Branding support', 'Fitness tech integration', 'Opening support'],
    process: [
      { title: 'Needs Analysis', desc: 'We understand your gym concept, audience, and goals.' },
      { title: 'Space Planning', desc: 'We design a functional layout for training and recovery.' },
      { title: 'Equipment Selection', desc: 'We specify quality gear that matches your programming.' },
      { title: 'Launch Support', desc: 'We help prepare your facility for a successful opening.', },
    ],
    cta: 'Build a Gym That Inspires',
  },
  'youth-fitness': {
    title: 'Youth Fitness Programs',
    subtitle: 'Fun and safe fitness classes for kids and teens.',
    description: 'Our youth programs focus on strength, agility, confidence, and healthy habits in a motivating environment for younger members.',
    image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Sports conditioning', 'Agility training', 'Group fitness', 'Healthy habits', 'Confidence building', 'Flexible scheduling', 'Parental updates', 'Fun programming'],
    process: [
      { title: 'Program Planning', desc: 'We design classes for age-appropriate fitness and development.' },
      { title: 'Safe Coaching', desc: 'Certified instructors deliver every session safely and effectively.' },
      { title: 'Goal Setting', desc: 'We help young members build confidence and consistency.' },
      { title: 'Parent Communication', desc: 'We keep families informed and engaged in progress.', },
    ],
    cta: 'Empower the Next Generation',
  },
};
