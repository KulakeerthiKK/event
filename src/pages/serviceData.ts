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
  'event-planning': {
    title: 'Event Planning & Consultation',
    subtitle: 'Full-service event planning from concept to execution.',
    description: 'Our expert planners guide you through every step of event creation, from initial vision to final execution. We handle logistics, vendor coordination, timeline management, and creative design.',
    image: 'https://images.pexels.com/photos/3950311/pexels-photo-3950311.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Concept development', 'Budget planning', 'Vendor coordination', 'Timeline management', 'Layout design', 'Creative brainstorming', 'Guest management', 'Day-of coordination'],
    process: [
      { title: 'Consultation', desc: 'We discuss your vision, goals, budget, and guest count.' },
      { title: 'Concept Development', desc: 'We create a detailed plan with themes, layouts, and timelines.' },
      { title: 'Vendor Management', desc: 'We source and coordinate with trusted vendors.' },
      { title: 'Event Execution', desc: 'Our team manages everything to ensure smooth execution.' },
    ],
    cta: 'Start Planning Your Event',
  },
  'corporate-events': {
    title: 'Corporate Events',
    subtitle: 'Professional events that impact your business goals.',
    description: 'From conferences and product launches to galas and team building, we create corporate events that impress clients, engage employees, and achieve business objectives.',
    image: 'https://images.pexels.com/photos/1608270/pexels-photo-1608270.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Conference planning', 'Product launches', 'Gala dinners', 'Team building events', 'Award ceremonies', 'Networking events', 'Keynote coordination', 'Media management'],
    process: [
      { title: 'Strategy Session', desc: 'We align on your corporate goals and event objectives.' },
      { title: 'Experience Design', desc: 'We create an agenda and experience that engages attendees.' },
      { title: 'Logistics & Setup', desc: 'We handle all technical, catering, and venue requirements.' },
      { title: 'Event Management', desc: 'Our team ensures flawless execution and attendee satisfaction.' },
    ],
    cta: 'Plan Your Corporate Event',
  },
  'weddings': {
    title: 'Weddings',
    subtitle: 'Magical wedding celebrations tailored to your love story.',
    description: 'We specialize in creating beautiful, personalized wedding ceremonies and receptions that reflect your unique story and bring your dream day to life.',
    image: 'https://images.pexels.com/photos/3573287/pexels-photo-3573287.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Ceremony planning', 'Reception design', 'Décor & styling', 'Vendor coordination', 'Timeline management', 'Guest logistics', 'Rehearsal coordination', 'Day-of management'],
    process: [
      { title: 'Vision Meeting', desc: 'We understand your style, budget, and dream wedding.' },
      { title: 'Design & Planning', desc: 'We create a comprehensive plan with venue, décor, and timeline.' },
      { title: 'Vendor Coordination', desc: 'We source and manage all vendors and service providers.' },
      { title: 'Execution', desc: 'Our team coordinates every detail for your perfect day.' },
    ],
    cta: 'Plan Your Perfect Wedding',
  },
  'entertainment': {
    title: 'Entertainment & Production',
    subtitle: 'Sound, lighting, and entertainment that elevate your event.',
    description: 'Professional sound systems, lighting design, AV equipment, and entertainment services that create immersive experiences and keep your guests engaged.',
    image: 'https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Sound system design', 'Lighting design', 'AV equipment', 'Live performances', 'DJ services', 'Stage setup', 'Technical support', 'Entertainment booking'],
    process: [
      { title: 'Technical Review', desc: 'We assess your venue and event requirements.' },
      { title: 'Design & Planning', desc: 'We design sound, lighting, and entertainment solutions.' },
      { title: 'Equipment Setup', desc: 'We install and test all technical equipment.' },
      { title: 'Event Support', desc: 'Our technicians ensure everything runs smoothly.' },
    ],
    cta: 'Create Amazing Entertainment',
  },
  'catering': {
    title: 'Catering & Dining',
    subtitle: 'Exceptional cuisine that leaves a lasting impression.',
    description: 'Custom menus, professional service, and culinary excellence that transform your event into a gastronomic experience your guests will remember.',
    image: 'https://images.pexels.com/photos/3763878/pexels-photo-3763878.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Custom menu design', 'Dietary accommodations', 'Buffet service', 'Plated dinners', 'Bartending service', 'Presentation design', 'Setup & cleanup', 'Service staff'],
    process: [
      { title: 'Menu Consultation', desc: 'We discuss cuisine preferences, dietary needs, and theme.' },
      { title: 'Menu Design', desc: 'We create a customized menu that impresses your guests.' },
      { title: 'Tasting & Approval', desc: 'You taste dishes and approve final selections.' },
      { title: 'Event Service', desc: 'Our team delivers professional service on your event day.' },
    ],
    cta: 'Design Your Perfect Menu',
  },
  'venue-management': {
    title: 'Venue Management',
    subtitle: 'Expert venue selection and on-site event management.',
    description: 'We help you find the perfect venue and manage all logistics, setup, guest flow, and coordination to ensure your event runs seamlessly.',
    image: 'https://images.pexels.com/photos/1696949/pexels-photo-1696949.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Venue scouting', 'Capacity planning', 'Layout design', 'Logistics coordination', 'Vendor management', 'Guest flow management', 'Setup supervision', 'Day-of coordination'],
    process: [
      { title: 'Venue Discovery', desc: 'We find venues that match your vision and budget.' },
      { title: 'Space Planning', desc: 'We design optimal layouts for your event.' },
      { title: 'Logistics Planning', desc: 'We coordinate all technical and service setup.' },
      { title: 'Event Execution', desc: 'Our team manages everything on your event day.' },
    ],
    cta: 'Find Your Perfect Venue',
  },
};
