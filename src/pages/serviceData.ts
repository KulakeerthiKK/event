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
  corporate: {
    title: 'Corporate Events',
    subtitle: 'Professional events that inspire, engage, and deliver results for your business.',
    description: 'From intimate board meetings to large-scale conferences, we specialize in creating corporate events that align with your brand and business objectives. Our team handles every detail so you can focus on what matters most — your attendees and your message.',
    image: 'https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Conference & Summit Planning', 'Product Launch Events', 'Team-Building Retreats', 'Award Ceremonies & Galas', 'Board Meeting Coordination', 'Corporate Holiday Parties', 'Brand Activation Events', 'Executive Leadership Offsites'],
    process: [
      { title: 'Needs Assessment', desc: 'We understand your business goals, audience, and desired outcomes.' },
      { title: 'Concept Development', desc: 'Creative concepts that align with your brand identity and message.' },
      { title: 'Logistics Planning', desc: 'Venue selection, AV setup, catering, and all operational details.' },
      { title: 'Execution & Management', desc: 'On-site coordination ensuring a seamless, professional experience.' },
    ],
    cta: 'Comprehensive Corporate Event Solutions',
  },
  weddings: {
    title: 'Wedding Events',
    subtitle: 'Your dream wedding, planned to perfection with love, creativity, and attention to every detail.',
    description: 'Your wedding day deserves nothing less than perfection. Our wedding planning team brings creativity, elegance, and meticulous attention to detail to create a celebration that reflects your unique love story.',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Full-Service Wedding Planning', 'Venue Selection & Decoration', 'Catering & Menu Planning', 'Entertainment & Music', 'Guest Management & RSVPs', 'Photography & Videography', 'Bridal & Groom Styling', 'Honeymoon Coordination'],
    process: [
      { title: 'Dream Session', desc: 'We learn your vision, style preferences, and budget expectations.' },
      { title: 'Design & Mood Board', desc: 'Creating a visual concept that captures your dream wedding aesthetic.' },
      { title: 'Vendor Curation', desc: 'Selecting the best vendors that match your style and budget.' },
      { title: 'Wedding Day Magic', desc: 'Flawless execution so you can enjoy every moment of your special day.' },
    ],
    cta: 'Making Your Dream Wedding a Reality',
  },
  community: {
    title: 'Community Events',
    subtitle: 'Bringing people together through meaningful community celebrations and programs.',
    description: 'Community events have the power to unite neighborhoods, celebrate diversity, and create lasting bonds. We specialize in organizing community gatherings that are inclusive, engaging, and memorable.',
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Cultural Program Organization', 'Local Celebration Planning', 'Public Gathering Management', 'Community Fair Coordination', 'Charity & Fundraiser Events', 'Neighborhood Block Parties', 'Seasonal Festivities', 'Civic Ceremony Planning'],
    process: [
      { title: 'Community Engagement', desc: "Understanding the community's needs and cultural preferences." },
      { title: 'Program Design', desc: 'Creating inclusive programs that appeal to diverse audiences.' },
      { title: 'Permits & Logistics', desc: 'Handling all permits, safety requirements, and logistics.' },
      { title: 'Event Day Management', desc: 'Ensuring a safe, enjoyable experience for all attendees.' },
    ],
    cta: 'Strengthening Communities Through Events',
  },
  festivals: {
    title: 'Festivals & Concerts',
    subtitle: 'Spectacular live entertainment events that captivate audiences and create lasting memories.',
    description: "Whether it's a music festival, cultural celebration, or live concert, we have the expertise to manage large-scale entertainment events. From stage design and artist management to crowd control and safety.",
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Stage Design & Setup', 'Artist Lineup & Management', 'Sound & Lighting Production', 'Crowd Management & Safety', 'Ticket & Entry Systems', 'Food & Beverage Coordination', 'Sponsorship Management', 'Multi-Day Festival Operations'],
    process: [
      { title: 'Concept & Lineup', desc: 'Developing the festival theme and securing talent.' },
      { title: 'Production Planning', desc: 'Stage, sound, lighting, and technical production design.' },
      { title: 'Operations Setup', desc: 'Security, crowd flow, food, and vendor coordination.' },
      { title: 'Live Execution', desc: 'Real-time management ensuring a spectacular, safe experience.' },
    ],
    cta: 'World-Class Festival Production',
  },
  exhibitions: {
    title: 'Exhibitions & Trade Shows',
    subtitle: 'Impactful exhibitions and trade shows that drive engagement and business results.',
    description: 'Exhibitions and trade shows require a unique blend of design, logistics, and visitor engagement strategies. We create exhibition experiences that maximize brand exposure and deliver measurable results.',
    image: 'https://images.pexels.com/photos/260484/pexels-photo-260484.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Booth Design & Fabrication', 'Exhibition Layout Planning', 'Visitor Engagement Strategies', 'Exhibitor Management', 'Event Logistics & Setup', 'Digital Interaction Solutions', 'Lead Capture Systems', 'Post-Show Analytics'],
    process: [
      { title: 'Exhibition Strategy', desc: 'Defining goals, audience profile, and engagement metrics.' },
      { title: 'Design & Layout', desc: 'Creating compelling booth designs and optimal floor plans.' },
      { title: 'Pre-Show Marketing', desc: 'Driving awareness and pre-registration for maximum attendance.' },
      { title: 'Show Management', desc: 'On-site coordination ensuring smooth operations and engagement.' },
    ],
    cta: 'Exhibition Excellence That Delivers Results',
  },
  school: {
    title: 'School & College Events',
    subtitle: 'Creating memorable educational institution events that students and families cherish.',
    description: 'From annual days and graduations to sports events and cultural festivals, we help educational institutions create events that students remember for a lifetime.',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920',
    features: ['Annual Day Celebrations', 'Graduation Ceremonies', 'Sports Day Events', 'Cultural Festival Organization', 'Science Fair Management', 'Inter-School Competitions', 'Alumni Meet Planning', 'Fundraising Events'],
    process: [
      { title: 'School Consultation', desc: "Understanding the institution's traditions and event objectives." },
      { title: 'Program Development', desc: 'Creating age-appropriate, engaging programs and activities.' },
      { title: 'Safety & Logistics', desc: 'Ensuring all safety protocols and logistical needs are covered.' },
      { title: 'Event Day Coordination', desc: 'Managing performances, schedules, and student activities.' },
    ],
    cta: 'Memorable Events for Educational Institutions',
  },
};
